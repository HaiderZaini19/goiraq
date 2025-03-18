import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

// GET handler to fetch requests by email
export async function GET(request) {
  try {
    // Connect to the database
    await connectDB();
    
    // Get the email from the URL query parameters
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    
    if (!email) {
      return NextResponse.json({ 
        success: false, 
        error: 'Email parameter is required' 
      }, { status: 400 });
    }
    
    // Find all requests for this email, sorted by created date (newest first)
    const requests = await Contact.find({ email: email.toLowerCase() })
      .sort({ createdAt: -1 })
      .select('fullName requestType message createdAt status')
      .lean();
    
    return NextResponse.json({ 
      success: true, 
      data: requests
    });
  } catch (error) {
    console.error('Error fetching contact requests:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Failed to fetch requests'
    }, { status: 500 });
  }
}

// POST handler to create a new contact request
export async function POST(request) {
  try {
    // Connect to the database
    await connectDB();
    
    // Parse the request body
    const { fullName, email, phone, requestType, message } = await request.json();
    
    // Validate input
    if (!fullName || !email || !requestType || !message) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Create new contact request
    const newContact = await Contact.create({
      fullName,
      email: email.toLowerCase(), // Store email in lowercase for consistency
      phone: phone || '',
      requestType,
      message,
      createdAt: new Date(),
      status: 'new'
    });
    
    return NextResponse.json({ 
      success: true, 
      data: {
        id: newContact._id,
        fullName: newContact.fullName,
        requestType: newContact.requestType
      }
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}