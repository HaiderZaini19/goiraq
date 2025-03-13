'use client';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

export default function TraditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Iraqi Traditions</h1>
          <p className="text-xl">Explore the rich cultural heritage of Iraq through its customs, food, music, and celebrations</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Traditional Customs */}
          <Link href="/traditions/customs" className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="/images/culture.jpg"
                  alt="Traditional Customs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-4 text-red-700 ${dancing.className}`}>Traditional Customs</h2>
                <p className="text-gray-600">Discover the ancient customs and social traditions that shape Iraqi culture.</p>
              </div>
            </div>
          </Link>

          {/* Food & Cuisine */}
          <Link href="/traditions/food" className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="/images/tradition/cuisine.jpg"
                  alt="Food & Cuisine" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-4 text-red-700 ${dancing.className}`}>Food & Cuisine</h2>
                <p className="text-gray-600">Explore the flavors and dishes that make Iraqi cuisine unique.</p>
              </div>
            </div>
          </Link>

          {/* Music & Dance */}
          <Link href="/traditions/music" className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="/images/tradition/music.jpg"
                  alt="Music & Dance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-4 text-red-700 ${dancing.className}`}>Music & Dance</h2>
                <p className="text-gray-600">Experience the rhythms and movements of traditional Iraqi music and dance.</p>
              </div>
            </div>
          </Link>

          {/* Art & Crafts */}
          <Link href="/traditions/art" className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="/images/tradition/arts.jpg"
                  alt="Art & Crafts" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-4 text-red-700 ${dancing.className}`}>Art & Crafts</h2>
                <p className="text-gray-600">Learn about traditional Iraqi artforms and handicrafts.</p>
              </div>
            </div>
          </Link>

          {/* Festivals & Celebrations */}
          <Link href="/traditions/festivals" className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="/images/tradition/festivals.jpg"
                  alt="Festivals & Celebrations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-4 text-red-700 ${dancing.className}`}>Festivals & Celebrations</h2>
                <p className="text-gray-600">Discover the vibrant festivals and celebrations of Iraqi culture.</p>
              </div>
            </div>
          </Link>

          {/* Traditional Clothing */}
          <Link href="/traditions/clothing" className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="/images/tradition/clothes.jpg"
                  alt="Traditional Clothing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-4 text-red-700 ${dancing.className}`}>Traditional Clothing</h2>
                <p className="text-gray-600">Explore the traditional attire and textiles of Iraq.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}