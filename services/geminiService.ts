import { GoogleGenAI, Type } from '@google/genai';
import type { AiSolution } from '../types';

const solutionSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      productName: {
        type: Type.STRING,
        description: 'The name of the recommended product or solution.',
      },
      reasoning: {
        type: Type.STRING,
        description: 'A detailed explanation of why this product is a good fit for the user\'s problem, written in a compelling and helpful tone.',
      },
    },
    required: ['productName', 'reasoning'],
  },
};

export const findSolutions = async (problemDescription: string): Promise<AiSolution[]> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("The AI Solution Finder is currently unavailable because the API Key is not configured.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `You are an expert IT solutions consultant.
Your goal is to analyze a user's business problem and recommend the most suitable software solutions available in the market.
You are free to suggest any relevant software, whether from open-source tools, commercial products, or custom-built solutions.
For each recommendation, provide a clear, concise, and helpful reason why it solves the user's specific problem.
Structure your entire response as a JSON array of objects with 'productName' and 'reasoning'.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Here is the user's problem: "${problemDescription}"`,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: solutionSchema,
      },
    });

    const jsonText = response.text?.trim();

    if (!jsonText) {
      console.warn("Gemini API returned an empty response.");
      return [];
    }

    const parsedSolutions: AiSolution[] = JSON.parse(jsonText);

    return parsedSolutions;

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to get a recommendation from the AI. Details: ${error.message}`);
    }
    throw new Error('An unknown error occurred while communicating with the AI.');
  }
};
