import { GoogleGenAI, Type } from '@google/genai';
import { PRODUCTS } from '../constants';
import type { AiSolution, Product } from '../types';

const solutionSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      productName: {
        type: Type.STRING,
        description: 'The name of the recommended product. Must be one of the provided product names.',
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

  const productList = PRODUCTS.map((p: Product) => p.name).join(', ');

  const systemInstruction = `You are an expert IT solutions consultant for a software company called 'M Intergraph Systems'. 
Your goal is to analyze a user's business problem and recommend up to two of the most suitable software products from our portfolio.
Your recommendations MUST be exclusively from this list of available products: ${productList}.
Do not suggest any products not on this list.
For each recommendation, provide a clear, concise, and helpful reason why it solves the user's specific problem.
Structure your entire response as a JSON array of objects according to the provided schema.`;

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
    
    const validSolutions = parsedSolutions.filter(sol => 
        PRODUCTS.some(p => p.name === sol.productName)
    );

    return validSolutions;

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    if (error instanceof Error) {
        throw new Error(`Failed to get a recommendation from the AI. Details: ${error.message}`);
    }
    throw new Error('An unknown error occurred while communicating with the AI.');
  }
};
