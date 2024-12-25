import React from 'react';
import { fadeInUp, fadeIn } from '../utils/animations';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-0">
      <div 
        className={`absolute inset-0 z-0 ${fadeIn}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animationDelay: '1000ms'
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-3xl md:text-5xl font-bold text-gray-900 mb-6 ${fadeInUp}`} style={{ animationDelay: '1200ms' }}>
            Optimisez vos opérations de stockage avec une solution 100% Cloud
          </h1>
          <p className={`text-lg md:text-xl text-gray-600 mb-8 ${fadeInUp}`} style={{ animationDelay: '1400ms' }}>
            Transformez la gestion de votre entrepôt avec notre solution logicielle intelligente. 
            Augmentez l'efficacité, réduisez les erreurs et boostez la productivité.
          </p>
          <div className={`flex justify-center ${fadeInUp}`} style={{ animationDelay: '1600ms' }}>
            <a 
              href="#contact"
              className="w-full sm:w-auto bg-[#070945] text-white px-8 py-3 rounded-full hover:bg-[#0a0c5e] transition-all hover:scale-105 text-center"
            >
              Demander une Démo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}