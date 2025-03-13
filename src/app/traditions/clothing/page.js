'use client';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

// Sample traditional clothing data
const traditionalClothing = [
  {
    id: 1,
    name: 'Dishdasha',
    description: 'A long, loose-fitting robe worn by men throughout Iraq, typically made of cotton or wool depending on the season.',
    image: '/images/tradition/dish.webp',
    features: ['Full-length garment with long sleeves', 'Usually white in summer, darker colors in winter', 'Often embroidered around the collar', 'Regional variations in cut and decoration'],
    significance: 'The dishdasha represents traditional values and has practical benefits in the hot climate. While modern Western clothing is common in cities, the dishdasha remains important for formal occasions, religious events, and daily wear in rural areas.'
  },
  {
    id: 2,
    name: 'Abaya',
    description: 'A loose, black cloak worn by women, covering the body from shoulders to feet, often paired with a headscarf or face veil.',
    image: '/images/tradition/abaya.webp',
    features: ['Black fabric flowing from shoulders', 'Various styles from plain to elaborately embroidered', 'Modern variations include colored fabrics and contemporary cuts', 'Often worn with hijab (headscarf) or niqab (face veil)'],
    significance: 'The abaya is both a religious garment and a cultural tradition. It represents modesty in dress for many Iraqi women, though wearing practices vary by region, religious interpretation, and personal choice.'
  },
  {
    id: 3,
    name: 'Kurdish Traditional Dress',
    description: 'Distinctive colorful clothing worn by the Kurdish community in northern Iraq, characterized by vibrant colors and elaborate embroidery.',
    image: '/images/tradition/kurd.webp',
    features: ['Women\'s dresses feature bright colors and extensive embroidery', 'Men wear baggy trousers (shalwar) with a tunic and cummerbund', 'Headdresses include turbans for men and decorative scarves for women', 'Jewelry and accessories are important components'],
    significance: 'Kurdish clothing serves as a symbol of ethnic identity and cultural pride. Different patterns and styles can indicate specific regions, tribal affiliations, or social status within Kurdish society.'
  }
];

export default function ClothingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Iraqi Traditional Clothing</h1>
          <p className="text-xl">Explore the diverse textiles, garments, and accessories that reflect Iraq's cultural heritage</p>
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
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>About Iraqi Traditional Clothing</h2>
          <p className="text-gray-700 mb-4">
            Iraqi traditional clothing reflects the country's diverse cultural heritage, religious influences, and adaptation to the local climate. Different regions, ethnic groups, and religious communities have developed distinct styles that have evolved over centuries.
          </p>
          <p className="text-gray-700 mb-4">
            Traditional garments in Iraq are more than just clothing—they represent cultural identity, religious values, social status, and practical adaptations to the environment. While modern Western clothing is increasingly common in urban areas, traditional dress remains important for special occasions, religious observances, and in rural communities.
          </p>
          <p className="text-gray-700">
            From the flowing dishdasha and abaya to the colorful Kurdish costumes, Iraqi traditional clothing showcases remarkable craftsmanship, including intricate embroidery, metalwork, and textile production techniques passed down through generations.
          </p>
        </div>
      </div>

      {/* Featured Clothing */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-10 text-center text-red-700 ${dancing.className}`}>Traditional Iraqi Garments</h2>
          
          <div className="space-y-12">
            {traditionalClothing.map((clothing) => (
              <div key={clothing.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={clothing.image} 
                      alt={clothing.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className={`text-2xl font-bold mb-3 text-red-700 ${dancing.className}`}>{clothing.name}</h3>
                    <p className="text-gray-700 mb-4">{clothing.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {clothing.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cultural Significance:</h4>
                      <p className="text-gray-700 italic">{clothing.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accessories and Jewelry */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>Traditional Accessories & Jewelry</h2>
          <p className="text-gray-700 mb-4">
            Traditional Iraqi attire is often complemented by distinctive accessories and jewelry that enhance both the aesthetic appeal and cultural significance of the clothing.
          </p>
          <p className="text-gray-700 mb-4">
            Headwear is particularly important, with various styles of keffiyeh (headdress) for men and intricate scarves or veils for women. These head coverings serve practical purposes in the hot, dry climate while also indicating regional identity and sometimes social status.
          </p>
          <p className="text-gray-700">
            Jewelry plays a significant role in traditional Iraqi dress, especially for women. Silver and gold pieces often feature intricate designs inspired by ancient Mesopotamian motifs, Islamic geometric patterns, or natural elements. These pieces not only beautify but also serve as portable wealth and symbols of family heritage.
          </p>
        </div>
      </div>
    </div>
  );
}