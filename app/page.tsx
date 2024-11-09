'use client';

import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { EmotionGrid } from '../components/EmotionCard';
import { EmotionDetail } from '../components/EmotionDetail';
import { getAllEmotions, searchEmotions } from '../lib/emotions';
import { Emotion } from '../lib/types';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [emotions, setEmotions] = useState<Emotion[]>([]);

  useEffect(() => {
    if (searchTerm.trim()) {
      setEmotions(searchEmotions(searchTerm));
    } else {
      setEmotions(getAllEmotions());
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Atlas Emocji dla Aktorów</h1>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:block space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4 mb-6`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Szukaj emocji..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {emotions.length > 0 ? (
          <EmotionGrid emotions={emotions} />
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <p>Nie znaleziono emocji spełniających kryteria wyszukiwania.</p>
          </div>
        )}
      </div>
    </div>
  );
}
