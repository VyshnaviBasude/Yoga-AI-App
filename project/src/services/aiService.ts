import OpenAI from 'openai';
import { YogaPose } from '../types/yoga';
import { env } from '../config/env';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getAIYogaSuggestions(userProblem: string): Promise<YogaPose[]> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a knowledgeable yoga instructor with expertise in recommending poses for specific problems. Provide detailed, safe, and effective yoga pose suggestions."
        },
        {
          role: "user",
          content: `I'm experiencing ${userProblem}. Can you suggest some yoga poses that might help? Please include the Sanskrit names and benefits.`
        }
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 500
    });

    // Parse the AI response and convert it to YogaPose format
    const response = completion.choices[0].message.content;
    // This is where you'd implement proper parsing of the AI response
    const poses = parseAIResponse(response);
    return poses;
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    return [];
  }
}

function parseAIResponse(response: string): YogaPose[] {
  // This is where you'd implement proper parsing of the AI response
  // For now, we'll return a default pose as an example
  return [{
    name: 'AI Suggested Pose',
    sanskritName: 'Sanskrit Name',
    benefits: ['AI-suggested benefit 1', 'AI-suggested benefit 2'],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    youtuber: 'Yoga With Adriene',
    views: 1000000,
    duration: '10:00',
    level: 'Beginner'
  }];
}