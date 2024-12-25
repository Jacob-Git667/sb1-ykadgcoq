import React from 'react';
import { slideInRight } from '../utils/animations';

interface BenefitProps {
  statistic: string;
  title: string;
  description: string;
  delay?: number;
}

export function Benefit({ statistic, title, description, delay = 0 }: BenefitProps) {
  return (
    <div 
      className={`flex flex-col ${slideInRight}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="text-4xl font-bold text-[#070945] mb-2">{statistic}</span>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}