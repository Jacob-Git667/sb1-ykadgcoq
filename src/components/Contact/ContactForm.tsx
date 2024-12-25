import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export function ContactForm() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
      <div className="flex items-center space-x-3 mb-8">
        <a href="mailto:contact@storvo.com" className="flex items-center space-x-2 text-gray-600 hover:text-[#070945] transition-colors">
          <Mail className="h-5 w-5" />
          <span>contact@storvo.com</span>
        </a>
        <span className="text-gray-300">|</span>
        <a href="tel:+15551234567" className="flex items-center space-x-2 text-gray-600 hover:text-[#070945] transition-colors">
          <Phone className="h-5 w-5" />
          <span>+1 (555) 123-4567</span>
        </a>
      </div>
      
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#070945]/20 focus:border-[#070945] transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#070945]/20 focus:border-[#070945] transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#070945]/20 focus:border-[#070945] transition-colors"
            placeholder="How can we help?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#070945]/20 focus:border-[#070945] transition-colors"
            placeholder="Your message..."
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#070945] text-white px-6 py-3 rounded-lg hover:bg-[#0a0c5e] transition-colors flex items-center justify-center space-x-2"
        >
          <span>Send Message</span>
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}