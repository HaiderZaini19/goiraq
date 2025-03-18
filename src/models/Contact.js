import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  phone: {
    type: String,
    trim: true,
  },
  requestType: {
    type: String,
    required: [true, 'Request type is required'],
    enum: [
      'General Question',
      'Technical Issue',
      'Content Suggestion',
      'Report Inaccuracy',
      'Feedback',
      'Other'
    ],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'resolved'],
    default: 'new',
  }
});


const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;