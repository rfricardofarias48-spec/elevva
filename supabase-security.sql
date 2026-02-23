-- Enable Row Level Security (RLS) for all tables
-- This ensures that by default, no one can access any data unless a specific policy grants permission.

-- 1. PROFILES TABLE (Public user data linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  company_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own profile
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id);

-- Policy: New users can insert their own profile (often handled by triggers, but good to have)
CREATE POLICY "Users can insert own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = id);


-- 2. VACANCIES TABLE (Vagas)
CREATE TABLE IF NOT EXISTS public.vacancies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active', -- active, closed, draft
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.vacancies ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own vacancies
CREATE POLICY "Users can view own vacancies" 
ON public.vacancies FOR SELECT 
USING (auth.uid() = user_id);

-- Policy: Users can only insert vacancies for themselves
CREATE POLICY "Users can create own vacancies" 
ON public.vacancies FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Policy: Users can only update their own vacancies
CREATE POLICY "Users can update own vacancies" 
ON public.vacancies FOR UPDATE 
USING (auth.uid() = user_id);

-- Policy: Users can only delete their own vacancies
CREATE POLICY "Users can delete own vacancies" 
ON public.vacancies FOR DELETE 
USING (auth.uid() = user_id);


-- 3. CANDIDATES TABLE (Candidatos/Currículos)
CREATE TABLE IF NOT EXISTS public.candidates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vacancy_id UUID REFERENCES public.vacancies(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  resume_url TEXT,
  score NUMERIC, -- AI Score
  analysis_summary TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view candidates ONLY if they own the vacancy
-- We use a subquery to check if the vacancy belongs to the current user
CREATE POLICY "Users can view candidates for their vacancies" 
ON public.candidates FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.vacancies 
    WHERE id = public.candidates.vacancy_id 
    AND user_id = auth.uid()
  )
);

-- Policy: Users can insert candidates into their own vacancies
CREATE POLICY "Users can add candidates to their vacancies" 
ON public.candidates FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.vacancies 
    WHERE id = public.candidates.vacancy_id 
    AND user_id = auth.uid()
  )
);

-- Policy: Users can update candidates in their own vacancies
CREATE POLICY "Users can update candidates in their vacancies" 
ON public.candidates FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.vacancies 
    WHERE id = public.candidates.vacancy_id 
    AND user_id = auth.uid()
  )
);

-- Policy: Users can delete candidates in their own vacancies
CREATE POLICY "Users can delete candidates in their vacancies" 
ON public.candidates FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM public.vacancies 
    WHERE id = public.candidates.vacancy_id 
    AND user_id = auth.uid()
  )
);


-- 4. SECURE BUCKET POLICIES (Storage)
-- Assuming a bucket named 'resumes' exists
-- You must create the bucket in the Supabase Dashboard first!

-- Policy: Users can upload files to their own folder (e.g., resumes/user_id/...)
-- Note: Storage policies are created in the storage.objects table
-- CREATE POLICY "Allow authenticated uploads"
-- ON storage.objects FOR INSERT
-- TO authenticated
-- WITH CHECK (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.uid()::text);

-- CREATE POLICY "Allow users to view their own files"
-- ON storage.objects FOR SELECT
-- TO authenticated
-- USING (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.uid()::text);


-- 5. FUNCTION TO HANDLE NEW USERS (Optional but recommended)
-- Automatically creates a profile entry when a new user signs up via Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for the function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
