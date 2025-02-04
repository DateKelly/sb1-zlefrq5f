import React from 'react';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">HollandAI</span>
            </div>
            <p className="text-gray-400">
              Vooruitstrevende AI-oplossingen voor Nederlandse bedrijven
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-2" />
                <span>info@hollandai.nl</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-2" />
                <span>+31 (0)20 123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                <span>Den Haag, Nederland</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HollandAI. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}