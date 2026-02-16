import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeResume = async (resumeText: string, jobDescription?: string): Promise<AnalysisResult> => {
  const modelId = "gemini-3-flash-preview"; 
  
  const prompt = `
    Analise o seguinte texto de currículo profissional.
    ${jobDescription ? `Considere este currículo para a seguinte descrição de vaga: ${jobDescription}` : 'Faça uma análise geral do perfil profissional.'}
    
    Seja extremamente detalhista e crítico, como um recrutador sênior.
    Retorne os dados estritamente em JSON.
    
    Currículo:
    "${resumeText}"
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            candidateName: { type: Type.STRING, description: "Nome do candidato identificado no CV (ou 'Não identificado')" },
            matchScore: { type: Type.INTEGER, description: "Nota de 0 a 100 baseada na qualidade e clareza do currículo" },
            summary: { type: Type.STRING, description: "Um resumo executivo do perfil em 2 frases." },
            strengths: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING }, 
              description: "Lista de 3 a 5 pontos fortes técnicos ou soft skills." 
            },
            weaknesses: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING }, 
              description: "Lista de 1 a 3 pontos de melhoria ou lacunas." 
            },
            recommendedRole: { type: Type.STRING, description: "Cargo ideal sugerido para este perfil." }
          },
          required: ["candidateName", "matchScore", "summary", "strengths", "weaknesses", "recommendedRole"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AnalysisResult;
    }
    
    throw new Error("Não foi possível gerar a análise.");
  } catch (error) {
    console.error("Erro na análise:", error);
    throw error;
  }
};