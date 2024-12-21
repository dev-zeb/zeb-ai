
export async function POST(req: Request) {
  const { prompt } = await req.json()

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
      }),
    })

    const data = await response.json()
    return Response.json({ url: data.data[0].url })
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred while generating the image.'
    if (error instanceof Error && error.message === 'API key not found') {
      errorMessage = 'API configuration error. Please check the server setup.'
    }
    return Response.json({ error: errorMessage }, { status: 500 })
  }
}

