import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Score from '@/models/Score';

export async function POST(request) {
  try {
    // Connect to the database
    await connectDB();
    
    // Parse the request body
    const { username, category, level, score, maxScore } = await request.json();
    
    // Validate input
    if (!username || !category || !level || score === undefined || maxScore === undefined) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Create new score
    const newScore = await Score.create({
      username,
      category,
      level,
      score,
      maxScore,
      createdAt: new Date()
    });
    
    return NextResponse.json({ 
      success: true, 
      data: newScore 
    });
  } catch (error) {
    console.error('Score saving error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    
    const scores = await Score.find({})
      .sort({ score: -1, createdAt: -1 })
      .limit(10);
    
    return NextResponse.json({ 
      success: true, 
      data: scores 
    });
  } catch (error) {
    console.error('Fetch scores error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 400 });
  }
}