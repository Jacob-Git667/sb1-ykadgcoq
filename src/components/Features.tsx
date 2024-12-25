import React from 'react';
import { Feature } from './Feature';
import { 
  BarChart3, 
  BoxesIcon, 
  Truck, 
  Users,
} from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 overflow-hidden px-4">
      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${fadeInUp}`} style={{ animationDelay: '1000ms' }}>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
            Fonctionnalités Puissantes pour les Entrepôts Modernes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Tout ce dont vous avez besoin pour gérer efficacement vos opérations d'entrepôt
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <Feature
            icon={BoxesIcon}
            title="Gestion des Stocks"
            description="Suivi en temps réel et surveillance automatisée des niveaux de stock pour un contrôle optimal."
            delay={1100}
          />
          <Feature
            icon={BarChart3}
            title="Analyses & Rapports"
            description="Analyses complètes et rapports personnalisables pour des décisions basées sur les données."
            delay={1200}
          />
          <Feature
            icon={Truck}
            title="Intégration Logistique"
            description="Intégration transparente avec les principaux transporteurs pour une logistique efficace."
            delay={1300}
          />
          <Feature
            icon={Users}
            title="Gestion d'Équipe"
            description="Gestion rationalisée de la main-d'œuvre et capacités d'attribution des tâches."
            delay={1400}
          />
        </div>
      </div>
    </section>
  );
}