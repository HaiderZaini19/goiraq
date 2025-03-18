'use client';
import { useState } from 'react';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

// Support request types
const requestTypes = [
  'General Question',
  'Technical Issue',
  'Content Suggestion',
  'Report Inaccuracy',
  'Feedback',
  'Other'
];

// Status colors for request status badges
const statusColors = {
  'new': 'bg-blue-100 text-blue-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'resolved': 'bg-green-100 text-green-800'
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    requestType: 'General Question',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // States for viewing previous requests
  const [showPreviousRequests, setShowPreviousRequests] = useState(false);
  const [searchEmail, setSearchEmail] = useState('');
  const [previousRequests, setPreviousRequests] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // When email changes, update the search email field as well
    if (name === 'email') {
      setSearchEmail(value);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully! We will get back to you soon.'
        });
        
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          requestType: 'General Question',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleFetchRequests = async (e) => {
    e.preventDefault();
    
    if (!searchEmail.trim() || !searchEmail.includes('@')) {
      setSearchError('Please enter a valid email address');
      return;
    }
    
    setIsSearching(true);
    setSearchError(null);
    
    try {
      const res = await fetch(`/api/contact?email=${encodeURIComponent(searchEmail)}`);
      const data = await res.json();
      
      if (data.success) {
        setPreviousRequests(data.data);
        setShowPreviousRequests(true);
      } else {
        setSearchError(data.error || 'Failed to fetch requests');
        setPreviousRequests([]);
      }
    } catch (error) {
      setSearchError('An error occurred while fetching your requests');
      setPreviousRequests([]);
    } finally {
      setIsSearching(false);
    }
  };
  
  // Format date string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Contact Support</h1>
          <p className="text-xl">Have questions or need assistance? We're here to help!</p>
        </div>
      </div>
      
      {/* Toggle between New Request and View Requests */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setShowPreviousRequests(false)}
            className={`px-6 py-2 rounded-lg font-medium ${
              !showPreviousRequests 
                ? 'bg-red-700 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            New Request
          </button>
          <button
            onClick={() => setShowPreviousRequests(true)}
            className={`px-6 py-2 rounded-lg font-medium ${
              showPreviousRequests 
                ? 'bg-red-700 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            View My Requests
          </button>
        </div>
      </div>
      
      {/* Contact Form */}
      {!showPreviousRequests ? (
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {submitStatus && (
              <div className={`mb-8 p-4 rounded-lg ${
                submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Details */}
                <div>
                  <h2 className={`text-2xl font-bold mb-4 text-red-700 ${dancing.className}`}>Your Details</h2>
                  
                  <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                {/* Request Details */}
                <div>
                  <h2 className={`text-2xl font-bold mb-4 text-red-700 ${dancing.className}`}>Request Details</h2>
                  
                  <div className="mb-4">
                    <label htmlFor="requestType" className="block text-gray-700 mb-2">Type of Request *</label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 bg-white"
                    >
                      {requestTypes.map(type => (
                        <option key={type} value={type} className="text-gray-800">{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                      placeholder="Please describe your question or issue in detail..."
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-red-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-800 transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* View Previous Requests */
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className={`text-2xl font-bold mb-6 text-red-700 ${dancing.className}`}>View Your Previous Requests</h2>
            
            <div className="mb-6">
              <form onSubmit={handleFetchRequests} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <label htmlFor="searchEmail" className="block text-gray-700 mb-2">Your Email Address</label>
                  <input
                    type="email"
                    id="searchEmail"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    placeholder="Enter the email used for your requests"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    disabled={isSearching}
                    className={`bg-red-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-800 transition-colors ${
                      isSearching ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSearching ? 'Searching...' : 'Search'}
                  </button>
                </div>
              </form>
              
              {searchError && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg">
                  {searchError}
                </div>
              )}
            </div>
            
            {previousRequests.length > 0 ? (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Your Request History</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left text-gray-700">Date</th>
                        <th className="py-3 px-4 text-left text-gray-700">Type</th>
                        <th className="py-3 px-4 text-left text-gray-700">Message</th>
                        <th className="py-3 px-4 text-left text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {previousRequests.map((request) => (
                        <tr key={request._id}>
                          <td className="py-3 px-4 text-gray-800">
                            {formatDate(request.createdAt)}
                          </td>
                          <td className="py-3 px-4 text-gray-800">
                            {request.requestType}
                          </td>
                          <td className="py-3 px-4 text-gray-800">
                            <div className="max-w-xs truncate">
                              {request.message}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[request.status]}`}>
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : previousRequests.length === 0 && !searchError && !isSearching ? (
              <div className="text-center py-8 text-gray-600">
                <p>No requests found with this email address.</p>
                <p className="mt-2">Please make sure you're using the same email you used when submitting requests.</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow border border-gray-200">
          <h3 className={`text-xl font-bold mb-3 text-red-700 ${dancing.className}`}>Other Ways to Contact Us</h3>
          <p className="text-gray-700 mb-2">Email: itzhaidzz@gmail.com</p>
          <p className="text-gray-700">Phone: +44 7474085709</p>
        </div>
      </div>
    </div>
  );
}