import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { verse } = await req.json();

    const prompt = `Generate a rich, in-depth analysis of the following Bible verse: ${verse}.
Provide structured insights in this exact format:

${verse} says "[Insert full bible verse text here]"

Context in [Book Name]:
Give 2–3 sentences of background of the verse and book. Where does the verse fall in the narrative or argument? What’s happening in the surrounding verses or chapter? Include historical context like authorship, date, and setting if relevant.

Theological Depth:
Explain the theological meaning. What does this say about God, Jesus, salvation, sin, or Christian life? Focus on core doctrinal insights or big theological ideas. Explain why this verse is so important.

Original Language Insight:
Break down 1–2 key Greek or Hebrew words. Explain the original term, what it meant in its original context, how it was used elsewhere in Scripture or culture, and why it matters. Explain this in a way that sheds more light into the passage and context.

Why It’s Impactful:
Give a deep, illuminating explanation of why this verse matters. Highlight a “lightbulb moment” insight—something profound people might miss on casual reading. Speak to heart-level relevance and theological weight.

Historical Echoes:
Are there Old Testament echoes? Early church interpretation? Political or cultural dynamics that make this verse pop in its time?

Enduring Relevance:
How does this verse still speak today? What timeless encouragement, challenge, or vision does it cast for modern believers?

✨ Tone: Write like a trusted biblical historian, theologian, professor and pastor. Warm but authoritative. Modern but reverent. Avoid fluff. Every word should teach or move the reader.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    const text = completion.choices[0].message.content || '';

    // Pull the full verse using regex
    const fullVerseMatch = text.match(/says\s+"(.*?)"/);
    const fullVerse = fullVerseMatch ? fullVerseMatch[1] : '';

    const parseSection = (label: string) => {
      const regex = new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n\\n|\\n[A-Z]|$)`, 'i');
      const match = text.match(regex);
      return match ? match[1].trim() : '';
    };

    return NextResponse.json({
      verse,
      fullVerse,
      context: parseSection('Context in'),
      theology: parseSection('Theological Depth'),
      language: parseSection('Original Language Insight'),
      impact: parseSection('Why It’s Impactful'),
      history: parseSection('Historical Echoes'),
      relevance: parseSection('Enduring Relevance'),
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
