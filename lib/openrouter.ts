export async function generateFunnyRecommendations(
  name: string,
  shoeSize: string,
  shoeType: string
): Promise<string> {
  const prompt = `You are a hilarious shoe recommendation expert. A customer named ${name} with shoe size ${shoeSize} loves ${shoeType} shoes. 

Generate 3-4 FUNNY and CREATIVE shoe recommendations for them. Be playful, witty, and personalized. Include actual shoe brand/model suggestions mixed with absurd humor. Keep it under 200 words.

Format as a fun paragraph or bullet points. Make it entertaining and shareable!`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://zapatos.app',
        'X-Title': 'Zapatos',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.8,
        max_tokens: 300,
        top_p: 1,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(' OpenRouter response error:', response.status, errorData);
      throw new Error(`OpenRouter API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    console.log(' OpenRouter response received');
    
    return data.choices[0].message.content;
  } catch (error) {
    console.error(' Error generating recommendations:', error);
    throw error;
  }
}
