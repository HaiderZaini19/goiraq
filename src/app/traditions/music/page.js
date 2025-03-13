'use client';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

// Sample music data
const traditionalMusic = [
  {
    id: 1,
    name: 'Maqam',
    description: 'A system of melodic modes used in traditional Iraqi music, considered the classical music of Iraq.',
    image: '/images/tradition/maqam.jpg',
    instruments: ['Oud', 'Santur', 'Joza', 'Tabla', 'Nay'],
    history: 'Iraqi Maqam has roots dating back to the Abbasid Caliphate and is recognized by UNESCO as an Intangible Cultural Heritage.'
  },
  {
    id: 2,
    name: 'Chobi',
    description: 'A folk dance music style with distinctive rhythms that accompany group line dances.',
    image: '/images/tradition/chobi.jpg',
    instruments: ['Tabla', 'Daf', 'Zurna', 'Nay'],
    history: 'Chobi is particularly popular in rural areas and has been performed at celebrations for generations.'
  },
  {
    id: 3,
    name: 'Pesteh',
    description: 'A form of improvised singing that often includes social commentary or romantic themes.',
    image: '/images/tradition/pesteh.jpg',
    instruments: ['Voice', 'Oud', 'Percussion'],
    history: 'Pesteh developed in urban areas of Iraq and often reflects everyday life experiences and social values.'
  }
];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Iraqi Music & Dance</h1>
          <p className="text-xl">Explore the rhythms and movements that define Iraqi cultural expression</p>
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
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>About Iraqi Music</h2>
          <p className="text-gray-700 mb-4">
            Iraqi music represents one of the world's oldest musical traditions, with evidence of musical instruments dating back to ancient Mesopotamian civilizations over 5,000 years ago.
          </p>
          <p className="text-gray-700 mb-4">
            The music of Iraq features rich melodies, complex rhythms, and passionate vocal techniques. It varies by region, with distinct styles in the north, central, and southern parts of the country.
          </p>
          <p className="text-gray-700">
            Music and dance are integral parts of Iraqi social life, accompanying weddings, celebrations, religious ceremonies, and everyday gatherings.
          </p>
        </div>
      </div>

      {/* Featured Music Styles */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-10 text-center text-red-700 ${dancing.className}`}>Traditional Iraqi Music</h2>
          
          <div className="space-y-12">
            {traditionalMusic.map((style) => (
              <div key={style.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={style.image} 
                      alt={style.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className={`text-2xl font-bold mb-3 text-red-700 ${dancing.className}`}>{style.name}</h3>
                    <p className="text-gray-700 mb-4">{style.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Instruments:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {style.instruments.map((instrument, index) => (
                          <li key={index}>{instrument}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">History:</h4>
                      <p className="text-gray-700 italic">{style.history}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traditional Dance */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>Traditional Dance</h2>
          <p className="text-gray-700 mb-4">
            Iraqi dance represents collective expressions of joy, celebration, and cultural identity. Most traditional dances are performed in groups and feature precise footwork and rhythmic movements.
          </p>
          <p className="text-gray-700 mb-4">
            The dabke, a line dance performed at celebrations, and the chobi, with its distinctive shoulder movements, are among the most popular forms of traditional Iraqi dance.
          </p>
          <p className="text-gray-700">
            Dance in Iraq is often gender-specific, with men and women performing different styles, although some modern interpretations break from these traditions.
          </p>
        </div>
      </div>
    </div>
  );
}