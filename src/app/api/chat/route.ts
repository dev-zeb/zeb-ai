import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Retrieve the API key from local storage or environment variables
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error('API key not found');
    }

    // Initialize the GoogleGenerativeAI instance
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Generate content using the Gemini model
    const result = await model.generateContent(message);
    if (!result?.response) {
      throw new Error('No response from AI model');
    }

    const responseText = result.response.text();
    console.log('Generated content:', responseText);

    // Return the generated content
    return NextResponse.json({ reply: responseText });
  } catch (error: unknown) {
    console.error('Error generating content:', error);
    let errorMessage = 'An unexpected error occurred while generating the response.';
    if(error instanceof Error && error.message === 'API key not found') {
      errorMessage = 'API configuration error. Please check the server setup.';
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
