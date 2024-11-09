'use client';

import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Tymczasowa informacja */}
        <div className="text-center p-8 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Witaj w Atlasie Emocji</h2>
          <p>Aplikacja jest w trakcie konfiguracji. Wkrótce pojawią się tutaj wszystkie dane o emocjach.</p>
        </div>
      </div>
    </div>
  );
}
