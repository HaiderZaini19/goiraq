'use client';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

// Sample festivals and celebrations data
const traditionalFestivals = [
  {
    id: 1,
    name: 'Eid al-Fitr',
    description: 'A major religious holiday celebrating the end of Ramadan, the Islamic holy month of fasting.',
    image: '/images/tradition/eid.jpg',
    practices: ['Special prayers at mosques', 'Family gatherings and meals', 'Gift-giving, especially to children', 'Charitable donations to the poor'],
    significance: 'Eid al-Fitr is one of the most important celebrations in Islamic culture. It marks the successful completion of the month of fasting and is a time of gratitude, forgiveness, and renewal of community bonds.'
  },
  {
    id: 2,
    name: 'Nowruz',
    description: 'The Persian New Year celebration marking the first day of spring, observed by Kurds and other communities in Iraq.',
    image: '/images/tradition/nowruz.jpg',
    practices: ['Preparing a special table with symbolic items', 'Spring cleaning of homes', 'Outdoor celebrations with music and dance', 'Visiting relatives and friends'],
    significance: 'Nowruz (meaning "new day") celebrates renewal and rebirth with the arrival of spring. Dating back over 3,000 years to Zoroastrian traditions, it connects Iraqi Kurds to their cultural heritage and to wider regional traditions.'
  },
  {
    id: 3,
    name: 'Ashura',
    description: 'A solemn religious commemoration observed primarily by Shia Muslims remembering the martyrdom of Imam Hussein.',
    image: '/images/tradition/ashura.avif',
    practices: ['Religious processions', 'Passion plays (Ta\'ziyeh) reenacting historical events', 'Distribution of food and drinks to mourners', 'Visits to shrines and holy sites'],
    significance: 'Ashura holds deep religious and historical significance for Shia Muslims. The commemoration of Imam Hussein\'s sacrifice at Karbala represents principles of justice, resistance to oppression, and moral integrity.'
  }
];

export default function FestivalsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Iraqi Festivals & Celebrations</h1>
          <p className="text-xl">Discover the vibrant ceremonies and gatherings that mark significant moments in Iraqi life</p>
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
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>About Iraqi Celebrations</h2>
          <p className="text-gray-700 mb-4">
            Iraqi festivals and celebrations reflect the country's rich religious diversity, historical depth, and cultural vibrancy. These occasions bring communities together, strengthen social bonds, and transmit cultural values across generations.
          </p>
          <p className="text-gray-700 mb-4">
            Many Iraqi celebrations follow the Islamic calendar, while others are tied to seasonal changes or commemorate historical events. Each festival has its own unique customs, foods, and traditions that have evolved over centuries.
          </p>
          <p className="text-gray-700">
            Whether religious or secular, public or private, these celebrations provide insight into Iraqi values, beliefs, and social structures while offering moments of joy, reflection, and community cohesion.
          </p>
        </div>
      </div>

      {/* Featured Festivals */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-10 text-center text-red-700 ${dancing.className}`}>Traditional Iraqi Festivals</h2>
          
          <div className="space-y-12">
            {traditionalFestivals.map((festival) => (
              <div key={festival.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={festival.image} 
                      alt={festival.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className={`text-2xl font-bold mb-3 text-red-700 ${dancing.className}`}>{festival.name}</h3>
                    <p className="text-gray-700 mb-4">{festival.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Practices:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {festival.practices.map((practice, index) => (
                          <li key={index}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cultural Significance:</h4>
                      <p className="text-gray-700 italic">{festival.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Life Cycle Celebrations */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>Life Cycle Celebrations</h2>
          <p className="text-gray-700 mb-4">
            In addition to religious and seasonal festivals, Iraqis celebrate important life milestones with distinctive traditions. Births, marriages, and even funerals involve elaborate customs that reflect cultural values and religious beliefs.
          </p>
          <p className="text-gray-700 mb-4">
            Wedding celebrations are particularly important in Iraqi culture, often lasting for days and involving multiple ceremonies, special clothes, music, dancing, and feasting. These celebrations strengthen family alliances and community bonds.
          </p>
          <p className="text-gray-700">
            While modernization has altered some aspects of these celebrations, many traditional elements remain important, especially in rural areas and among families who value cultural continuity.
          </p>
        </div>
      </div>
    </div>
  );
}