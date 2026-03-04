import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase, ShoeData } from '@/lib/mongodb';
import { sendDataEmail } from '@/lib/email';
import { generateFunnyRecommendations } from '@/lib/openrouter';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, shoeSize, shoeType } = body;

    console.log(' Received form submission:', { name, email, shoeSize, shoeType });

    // Validate required fields
    if (!name || !email || !shoeSize || !shoeType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection<ShoeData>('customers');

    // Save to MongoDB
    const shoeData: ShoeData = {
      name,
      email,
      shoeSize,
      shoeType,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(shoeData);
    console.log(' Data saved to MongoDB:', result.insertedId);

    // Generate funny recommendations
    console.log(' Generating recommendations...');
    const recommendations = await generateFunnyRecommendations(name, shoeSize, shoeType);
    console.log(' Recommendations generated');

    // Send email
    console.log(' Sending email...');
    await sendDataEmail(shoeData, recommendations);

    // Return recommendations to frontend
    return NextResponse.json({
      success: true,
      recommendations,
      message: 'Check your email for personalized shoe recommendations!',
    });
  } catch (error) {
    console.error(' API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
