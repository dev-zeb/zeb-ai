export async function POST(req: Request) {
  const { text, voice } = await req.json()

  try {
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "tts-1",
        input: text,
        voice,
      }),
    })

    const audioData = await response.arrayBuffer()
    return new Response(audioData, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    })
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred while generating the audio.'
    if (error instanceof Error && error.message === 'API key not found') {
      errorMessage = 'API configuration error. Please check the server setup.'
    }
    return Response.json({ error: errorMessage }, { status: 500 })
  }
}

