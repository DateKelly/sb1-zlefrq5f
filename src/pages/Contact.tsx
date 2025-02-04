import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Office Space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 -mt-32 relative z-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Neem Contact Op</h1>
            <p className="text-lg text-gray-600 mb-8">
              Heeft u vragen over onze AI-oplossingen? Neem contact met ons op en we helpen u graag verder.
            </p>
            
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-orange-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">E-mail</h3>
                  <p className="text-gray-600">info@hollandai.nl</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-orange-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Telefoon</h3>
                  <p className="text-gray-600">+31 (0)20 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-orange-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Adres</h3>
                  <p className="text-gray-600">Den Haag, Nederland</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Naam</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Bericht</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Verstuur Bericht
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}