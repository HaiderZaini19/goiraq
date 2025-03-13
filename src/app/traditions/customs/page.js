'use client';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

// Sample customs data
const traditionalCustoms = [
  {
    id: 1,
    name: 'Hospitality (Diyafa)',
    description: 'A cornerstone of Iraqi culture, hospitality is considered sacred. Guests are treated with the utmost respect and generosity.',
    image: '/images/tradition/hosp.webp',
    practices: ['Offering food and drink immediately to visitors', 'Insisting guests stay for meals', 'Standing when guests enter or leave', 'Presenting gifts to visitors'],
    significance: 'Hospitality reflects honor and social standing in Iraqi society. The practice dates back to ancient times when desert travelers depended on the generosity of others for survival.'
  },
  {
    id: 2,
    name: 'Traditional Greetings',
    description: 'Elaborate greetings that involve specific gestures and phrases, showing respect and establishing social connections.',
    image: '/images/tradition/greetings.jpg',
    practices: ['Right hand over heart after handshakes', 'Multiple kisses on cheeks between same gender', 'Inquiring about family and health', 'Using honorific titles'],
    significance: 'Greetings establish social hierarchy and demonstrate respect. They create bonds between individuals and facilitate social cohesion.'
  },
  {
    id: 3,
    name: 'Coffee Ceremony',
    description: 'The ritual preparation and serving of Arabic coffee (qahwa) is an important social custom that signifies welcome and friendship.',
    image: '/images/tradition/coffee.webp',
    practices: ['Grinding fresh coffee beans', 'Adding cardamom and sometimes saffron', 'Serving in small cups from a special pot (dallah)', 'Serving the eldest or most honored guest first'],
    significance: 'Coffee ceremonies have been part of Arab and Iraqi culture for centuries, symbolizing hospitality and creating space for conversation and connection.'
  }
];

export default function CustomsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Iraqi Traditional Customs</h1>
          <p className="text-xl">Discover the social practices and cultural traditions that define Iraqi society</p>
          <div className="mt-6">
            <Link href="/traditions" className="text-white bg-red-800 hover:bg-red-900 px-6 py-2 rounded-lg">
              Back to Traditions
            </Link>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>About Iraqi Customs</h2>
          <p className="text-gray-700 mb-4">
            Iraqi social customs and traditions have evolved over thousands of years, reflecting the country's ancient heritage as the cradle of civilization. These customs demonstrate the importance of community, respect, honor, and hospitality in Iraqi society.
          </p>
          <p className="text-gray-700 mb-4">
            Family is the cornerstone of Iraqi society, with extended family networks playing a vital role in daily life. Respect for elders, protection of family honor, and maintenance of social harmony are paramount values that shape social interactions.
          </p>
          <p className="text-gray-700">
            While some customs vary by region, religious affiliation, and urban versus rural settings, many core traditions are shared across Iraq's diverse population, creating a sense of national identity and cultural continuity.
          </p>
        </div>
      </div>

      {/* Featured Customs */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-10 text-center text-red-700 ${dancing.className}`}>Traditional Iraqi Customs</h2>
          
          <div className="space-y-12">
            {traditionalCustoms.map((custom) => (
              <div key={custom.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={custom.image} 
                      alt={custom.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className={`text-2xl font-bold mb-3 text-red-700 ${dancing.className}`}>{custom.name}</h3>
                    <p className="text-gray-700 mb-4">{custom.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Practices:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {custom.practices.map((practice, index) => (
                          <li key={index}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cultural Significance:</h4>
                      <p className="text-gray-700 italic">{custom.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Structure */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>Social Structure & Etiquette</h2>
          <p className="text-gray-700 mb-4">
            Iraqi society is traditionally organized around extended family units and tribal affiliations. Social interactions are governed by complex codes of conduct that emphasize respect, honor, and propriety.
          </p>
          <p className="text-gray-700 mb-4">
            Age and gender often determine social roles and expectations. Elders are highly respected and consulted for important decisions. Traditional gender roles are observed in many contexts, though these have evolved in modern urban settings.
          </p>
          <p className="text-gray-700">
            Understanding Iraqi etiquette is essential to appreciating the depth of its culture. From the proper way to enter a home, to the right hand being used for eating and greeting, to appropriate topics of conversation, these customs reflect values that have sustained Iraqi society through millennia.
          </p>
        </div>
      </div>
    </div>
  );
}