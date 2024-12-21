import { openai } from "@ai-sdk/openai"

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
  } catch (error) {
    return Response.json({ error: "Failed to generate image" }, { status: 500 })
  }
}

