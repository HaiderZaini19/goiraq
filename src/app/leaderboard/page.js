'use client';
import { useState, useEffect } from 'react';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

export default function LeaderboardPage() {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/scores');
      if (!res.ok) {
        throw new Error('Failed to fetch scores');
      }
      const data = await res.json();
      
      if (data.success) {
        setScores(data.data);
      } else {
        console.error('Error in scores response:', data.error);
      }
    } catch (error) {
      console.error('Error fetching scores:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get unique categories from scores
  const categories = ['all', ...new Set(scores.map(score => score.category))];

  // Filter scores based on selected category
  const filteredScores = filter === 'all' 
    ? scores 
    : scores.filter(score => score.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Leaderboard</h1>
          <p className="text-xl">See who knows the most about Iraqi culture and history</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className={`text-3xl font-bold mb-8 text-center text-red-700 ${dancing.className}`}>
            Top Scores
          </h2>
          
          {/* Category Filter */}
          {scores.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-center flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-lg ${
                      filter === category 
                        ? 'bg-red-700 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {isLoading ? (
            <div className="text-center py-8">Loading scores...</div>
          ) : filteredScores.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No scores recorded yet!</p>
              <Link href="/quiz" className="text-red-700 font-semibold hover:text-red-800">
                Take a quiz to be the first on the leaderboard →
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-6 text-left text-gray-700">Rank</th>
                    <th className="py-3 px-6 text-left text-gray-700">Name</th>
                    <th className="py-3 px-6 text-left text-gray-700">Category</th>
                    <th className="py-3 px-6 text-left text-gray-700">Level</th>
                    <th className="py-3 px-6 text-left text-gray-700">Score</th>
                    <th className="py-3 px-6 text-left text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredScores.map((score, index) => (
                    <tr key={score._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="py-3 px-6 text-gray-800">{index + 1}</td>
                      <td className="py-3 px-6 font-medium text-gray-800">{score.username}</td>
                      <td className="py-3 px-6 text-gray-800">{score.category}</td>
                      <td className="py-3 px-6 text-gray-800">{score.level}</td>
                      <td className="py-3 px-6 font-medium text-gray-800">{score.score}/{score.maxScore}</td>
                      <td className="py-3 px-6 text-gray-800">{new Date(score.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Link 
              href="/quiz" 
              className="bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-800 transition-colors inline-block"
            >
              Try Another Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}