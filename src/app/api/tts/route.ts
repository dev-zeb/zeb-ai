import {NextResponse} from 'next/server';
import {OpenAI} from 'openai';

const openAi = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const response = await openAi.audio.transcriptions.create({file: prompt, model: "whisper-1"}); 

  return NextResponse.json({
    text: response.text
  });
}