import React from 'react';
import { Benefit } from './Benefit';
import { fadeInUp } from '../utils/animations';

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${fadeInUp} order-2 md:order-1`} style={{ animationDelay: '1000ms' }}>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Avantages Entrepôt"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 w-full"
            />
          </div>
          <div className="space-y-8 md:space-y-12 order-1 md:order-2">
            <Benefit
              statistic="99,9%"
              title="Taux de Précision"
              description="Atteignez une précision quasi parfaite des stocks avec notre système de suivi avancé."
              delay={1200}
            />
            <Benefit
              statistic="45%"
              title="Augmentation d'Efficacité"
              description="Nos clients rapportent une augmentation moyenne de 45% de l'efficacité opérationnelle."
              delay={1400}
            />
            <Benefit
              statistic="24/7"
              title="Surveillance en Temps Réel"
              description="Surveillance continue et alertes instantanées pour les opérations critiques."
              delay={1600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}