'use client';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

// Sample food data
const traditionalDishes = [
  {
    id: 1,
    name: 'Masgouf',
    description: 'Iraq\'s national dish, consisting of seasoned grilled carp, often cooked over an open fire.',
    image: '/images/tradition/masgouf.jpeg',
    ingredients: ['Carp fish', 'Olive oil', 'Rock salt', 'Tamarind', 'Turmeric', 'Tomatoes', 'Lemon'],
    history: 'Masgouf dates back thousands of years to ancient Mesopotamia. The dish was traditionally prepared by fishermen along the Tigris and Euphrates rivers.'
  },
  {
    id: 2,
    name: 'Dolma',
    description: 'Stuffed vegetables like grape leaves, onions, tomatoes, eggplants, and bell peppers filled with seasoned rice and sometimes meat.',
    image: '/images/tradition/dolma.jpg',
    ingredients: ['Grape leaves/vegetables', 'Rice', 'Minced meat', 'Onions', 'Tomato paste', 'Parsley', 'Mint', 'Spices'],
    history: 'Dolma has been a part of Middle Eastern cuisine for centuries, with variations found throughout the region. It reflects Iraq\'s agricultural heritage.'
  },
  {
    id: 3,
    name: 'Kubbah',
    description: 'Bulgur shell stuffed with spiced minced meat and nuts, which can be fried, baked, or cooked in a broth.',
    image: '/images/tradition/kubbah.jpg',
    ingredients: ['Bulgur wheat', 'Minced meat', 'Onions', 'Pine nuts', 'Spices'],
    history: 'Kubbah is believed to have originated in the Levant but has become a staple in Iraqi cuisine, with regional variations throughout the country.'
  }
];

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Iraqi Food & Cuisine</h1>
          <p className="text-xl">A culinary journey through Iraq's rich gastronomic traditions</p>
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
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>About Iraqi Cuisine</h2>
          <p className="text-gray-700 mb-4">
            Iraqi cuisine reflects the country's rich history as the cradle of civilization, with culinary traditions dating back over 10,000 years. The cuisine has been influenced by various cultures that inhabited Mesopotamia throughout history, including Sumerian, Babylonian, Assyrian, Persian, and Ottoman traditions.
          </p>
          <p className="text-gray-700 mb-4">
            Iraqi food is characterized by its aromatic spices, rich flavors, and generous use of herbs. Common ingredients include rice, wheat, barley, dates, nuts, lamb, beef, fish, and a variety of vegetables. The cuisine varies by region, with distinct specialties in northern, central, and southern Iraq.
          </p>
          <p className="text-gray-700">
            Meals in Iraq are typically communal affairs, with dishes served family-style. Hospitality is an important part of Iraqi culture, and food plays a central role in social gatherings and celebrations.
          </p>
        </div>
      </div>

      {/* Featured Dishes */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-10 text-center text-red-700 ${dancing.className}`}>Traditional Iraqi Dishes</h2>
          
          <div className="space-y-12">
            {traditionalDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className={`text-2xl font-bold mb-3 text-red-700 ${dancing.className}`}>{dish.name}</h3>
                    <p className="text-gray-700 mb-4">{dish.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {dish.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">History:</h4>
                      <p className="text-gray-700 italic">{dish.history}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cooking Traditions */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>Cooking Traditions</h2>
          <p className="text-gray-700 mb-4">
            Iraqi cooking methods have been passed down through generations, with recipes often kept within families for centuries. Traditional cooking involves slow cooking methods like stewing, grilling, and baking in clay ovens (called tannour).
          </p>
          <p className="text-gray-700 mb-4">
            The preparation of food is often a social activity, with family members gathering to cook together. Special dishes are prepared for different occasions, such as religious holidays, weddings, and other celebrations.
          </p>
          <p className="text-gray-700">
            Despite modernization, many Iraqi families still maintain traditional cooking practices and recipes, preserving this important aspect of their cultural heritage.
          </p>
        </div>
      </div>
    </div>
  );
}