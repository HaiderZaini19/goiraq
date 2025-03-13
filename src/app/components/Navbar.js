'use client';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';

const dancing = Dancing_Script({ subsets: ['latin'] });

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className={`text-3xl font-bold text-red-700 hover:text-red-800 transition-colors ${dancing.className}`}>
              GoIraq
            </span>
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="/" className="hover:text-red-700">Home</Link>
          <Link href="/explore" className="hover:text-red-700">Explore</Link>
          <Link href="/traditions" className="hover:text-red-700">Traditions</Link>
          <Link href="/quiz" className="hover:text-red-700">Quizzes</Link>
          <Link href="/leaderboard" className="hover:text-red-700">Leaderboard</Link>
        </div>
      </div>
    </nav>
  );
}