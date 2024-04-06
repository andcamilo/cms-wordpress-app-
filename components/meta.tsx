"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react';


export default function Meta() {

  const [selectedLanguage, setSelectedLanguage] = useState('fr'); 

  const handleLanguageSelect = (lang) => {
    event.preventDefault();
    setSelectedLanguage(lang);

  }

  return (
    <motion.header
      initial={{ y: -100 }} // Start position above the screen
      animate={{ y: 0 }}    // End position
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation settings
      className="bg-black text-white p-4 fixed w-full"
    >
  <div className="container mx-auto flex justify-between items-center">

    {/* Logo */}
    <div>
      <a href="/" className="flex items-center">
        <img src="/image/logo.svg"alt="Logo" className="h-20"/>
      </a>
    </div>

    {/* Navigation and Contact Button */}
    <div className="flex items-center gap-4">
      <nav className="hidden md:flex gap-4">
        <a href="/" className="text-xs font-normal hover:text-[#E7E41E]">ACCUEIL</a>
        <a href="/enterprise" className="text-xs font-normal hover:text-[#E7E41E]">L'ENTREPRISE</a>
        <a href="/services" className="text-xs font-normal hover:text-[#E7E41E]">SERVICES</a>
        <a href="/produits" className="text-xs font-normal hover:text-[#E7E41E]">PRODUITS</a>
        <a href="/projets" className="text-xs font-normal hover:text-[#E7E41E]">PROJETS</a>
      </nav>
    
    </div>

    <div>
    <a href="/contact" className="bg-[#E7E41E] text-black px-4 py-2 rounded shadow hover:bg-yellow-300">CONTACTEZ NOUS</a>
    </div>
    <div>
      <a 
          href="?lang=fr" 
          onClick={() => handleLanguageSelect('fr')}
          className={`text-xs px-2 ${selectedLanguage === 'fr' ? 'text-gray-300' : 'hover:text-gray-400'}`}
        >
          FR
        </a>
        <span>|</span>
        <a 
          href="?lang=de" 
          onClick={() => handleLanguageSelect('de')}
          className={`text-xs px-2 ${selectedLanguage === 'de' ? 'text-gray-300' : 'hover:text-gray-400'}`}
        >
          DE
        </a>
    </div>
    
  </div>
</motion.header>

  );
}

