import React from 'react';
import { LucideIcon } from 'lucide-react';
import { scaleIn } from '../utils/animations';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function Feature({ icon: Icon, title, description, delay = 0 }: FeatureProps) {
  return (
    <div 
      className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 ${scaleIn}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-[#070945]/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-[#070945]" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}