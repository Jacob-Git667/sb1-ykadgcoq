import React from 'react';
import { Mail } from 'lucide-react';
import { fadeInUp, scaleIn } from '../../utils/animations';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-8 ${fadeInUp}`} style={{ animationDelay: '1000ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Demander une Démo
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez comment Storvo peut transformer vos opérations d'entrepôt
          </p>
        </div>
        
        <div className={`bg-white rounded-2xl shadow-xl p-8 ${scaleIn}`} style={{ animationDelay: '1200ms' }}>
          <form 
            className="space-y-6"
            action="mailto:contact@storvo.ma"
            method="post"
            encType="text/plain"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Professionnel</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#070945]/20 focus:border-[#070945] transition-all"
                placeholder="vous@entreprise.com"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#070945] text-white px-6 py-3 rounded-lg hover:bg-[#0a0c5e] transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Demander une Démo</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}