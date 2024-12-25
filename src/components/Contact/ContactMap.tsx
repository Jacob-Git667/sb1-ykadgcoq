import React from 'react';
import { MapPin } from 'lucide-react';

export function ContactMap() {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&q=80&w=1200"
          alt="Map location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#070945]/10" />
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6">
          <div className="flex items-start space-x-3">
            <MapPin className="h-6 w-6 text-[#070945] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Storvo Headquarters</h4>
              <p className="text-gray-600">123 Warehouse Street</p>
              <p className="text-gray-600">San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}