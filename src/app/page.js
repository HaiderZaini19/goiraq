'use client';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { Playfair_Display, Dancing_Script } from 'next/font/google';

const dancing = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className={`text-6xl font-bold mb-6 ${dancing.className}`}>Discover Iraq's Rich Heritage</h1>
            <p className={`text-2xl mb-8 ${dancing.className}`}>Journey through the cradle of civilization</p>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center mb-12 text-emerald-800 ${dancing.className}`}>
              Featured Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Explore Map Card */}
              <Link href="/explore" className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src="/images/Iraq.jpg"
                      alt="Ancient Iraq Map"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 text-amber-700 ${dancing.className}`}>Explore Map</h3>
                    <p className="text-gray-600 mb-4">Discover ancient landmarks and historical sites across Iraq.</p>
                    <button className="text-red-700 font-semibold hover:text-red-800">Explore Map →</button>
                  </div>
                </div>
              </Link>

              {/* Cultural Traditions Card */}
              <Link href="/traditions" className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src="/images/culture.jpg"
                      alt="Iraqi Cultural Traditions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 text-teal-700 ${dancing.className}`}>Iraqi Traditions</h3>
                    <p className="text-gray-600 mb-4">Discover the rich cultural heritage of Iraq.</p>
                    <button className="text-red-700 font-semibold hover:text-red-800">Learn More →</button>
                  </div>
                </div>
              </Link>

              {/* Interactive Learning Card */}
              <Link href="/quiz" className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src="/images/quizez.jpg"
                      alt="Interactive Quizzes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 text-indigo-700 ${dancing.className}`}>Interactive Quizzes</h3>
                    <p className="text-gray-600 mb-4">Test your knowledge about Iraqi history.</p>
                    <button className="text-red-700 font-semibold hover:text-red-800">Start Quiz →</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${dancing.className}`}>Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className={`text-xl font-semibold mb-3 ${dancing.className}`}>What is GoIraq?</h3>
                <p className="text-gray-300">GoIraq is an educational platform dedicated to sharing and preserving Iraqi cultural heritage. Our mission is to make Iraq's rich history and traditions accessible to everyone through interactive learning experiences.</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className={`text-xl font-semibold mb-3 ${dancing.className}`}>Why was this website created?</h3>
                <p className="text-gray-300">This website was created to address the growing disconnect between younger generations and their Iraqi cultural heritage. We aim to provide a modern, engaging platform that makes learning about Iraqi history and culture both accessible and enjoyable.</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className={`text-xl font-semibold mb-3 ${dancing.className}`}>What can I learn on GoIraq?</h3>
                <p className="text-gray-300">On GoIraq, you can explore ancient historical sites, learn about traditional customs and celebrations, discover Iraqi art and architecture, and test your knowledge through interactive quizzes. Our content is carefully curated to provide accurate and engaging information about Iraq's cultural heritage.</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className={`text-xl font-semibold mb-3 ${dancing.className}`}>How is the content organized?</h3>
                <p className="text-gray-300">Our content is organized into different categories including historical sites, cultural traditions, and interactive learning modules. Each section is designed to provide comprehensive information while remaining engaging and easy to navigate.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className={dancing.className}>© 2025 GoIraq. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}