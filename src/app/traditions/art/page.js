'use client';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

// Sample arts and crafts data
const traditionalArts = [
  {
    id: 1,
    name: 'Calligraphy',
    description: 'The art of beautiful handwriting, particularly of the Arabic script, which has been practiced in Iraq for centuries.',
    image: '/images/tradition/cali.webp',
    techniques: ['Kufic script - angular and geometric', 'Diwani script - flowing and decorative', 'Naskh script - clear and legible', 'Integration with architectural decoration'],
    significance: 'Calligraphy represents the highest art form in Islamic culture, used to transcribe the Quran and create decorative elements. Iraqi calligraphers developed distinctive styles that influenced the entire Islamic world.'
  },
  {
    id: 2,
    name: 'Carpet Weaving',
    description: 'The creation of intricate carpets and kilims using traditional patterns and techniques passed down through generations.',
    image: '/images/tradition/carpet.jpg',
    techniques: ['Hand-knotting with wool and silk', 'Natural dyes from plants and minerals', 'Geometric and floral motifs', 'Regional pattern variations'],
    significance: 'Carpet weaving represents both artistic expression and practical necessity in Iraqi culture. Patterns often contain symbols reflecting tribal identity, protection, and fertility.'
  },
  {
    id: 3,
    name: 'Metalwork',
    description: 'The crafting of decorative and functional items from copper, brass, silver, and gold using traditional techniques.',
    image: '/images/tradition/metal.webp',
    techniques: ['Hammering and repoussé', 'Engraving and chasing', 'Filigree work', 'Inlaying with precious materials'],
    significance: 'Metalwork in Iraq dates back to ancient Mesopotamia. The craft flourished during the Islamic period, with Iraqi artisans creating intricate pieces that were traded throughout the region.'
  }
];

export default function ArtPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Iraqi Arts & Crafts</h1>
          <p className="text-xl">Explore the rich artistic traditions and craftsmanship of Iraqi culture</p>
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
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>About Iraqi Arts & Crafts</h2>
          <p className="text-gray-700 mb-4">
            Iraqi artistic traditions date back thousands of years to ancient Mesopotamian civilizations. From the intricate cylinder seals of Sumer to the monumental architecture of Babylon, Iraq's artistic heritage represents one of humanity's oldest creative traditions.
          </p>
          <p className="text-gray-700 mb-4">
            Throughout its history, Iraq has been a center for artistic innovation, with craftspeople developing techniques in metalwork, textiles, pottery, and calligraphy that spread throughout the region and beyond.
          </p>
          <p className="text-gray-700">
            Despite periods of conflict and political upheaval, Iraqi artisans have preserved traditional techniques while also developing new expressions that reflect the country's evolving cultural identity.
          </p>
        </div>
      </div>

      {/* Featured Arts & Crafts */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-10 text-center text-red-700 ${dancing.className}`}>Traditional Iraqi Arts</h2>
          
          <div className="space-y-12">
            {traditionalArts.map((art) => (
              <div key={art.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={art.image} 
                      alt={art.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className={`text-2xl font-bold mb-3 text-red-700 ${dancing.className}`}>{art.name}</h3>
                    <p className="text-gray-700 mb-4">{art.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Traditional Techniques:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {art.techniques.map((technique, index) => (
                          <li key={index}>{technique}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cultural Significance:</h4>
                      <p className="text-gray-700 italic">{art.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contemporary Artforms */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>Contemporary Iraqi Art</h2>
          <p className="text-gray-700 mb-4">
            Modern Iraqi artists and craftspeople continue to draw inspiration from their rich cultural heritage while also creating innovative works that address contemporary themes and experiences.
          </p>
          <p className="text-gray-700 mb-4">
            The Baghdad School of Modern Art, established in the mid-20th century, played a crucial role in developing a distinctive Iraqi artistic identity that balanced tradition with modernity.
          </p>
          <p className="text-gray-700">
            Despite the challenges of recent decades, Iraqi art continues to thrive both within the country and in diaspora communities around the world, serving as a powerful expression of cultural resilience and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}