import React from 'react';
import { PenTool, Clock, Globe, Search, BookOpen, Zap, Target } from 'lucide-react';
import ProductNav from '../components/ProductNav';

const benefits = [
  {
    icon: Search,
    title: 'Uitgebreid Onderzoek',
    description: 'Automatisch scannen en analyseren van nieuws en trends uit betrouwbare bronnen.',
  },
  {
    icon: PenTool,
    title: 'Menselijke Schrijfstijl',
    description: 'Natuurlijke en boeiende artikelen die niet van menselijke content te onderscheiden zijn.',
  },
  {
    icon: Clock,
    title: '24/7 Content Creatie',
    description: 'Continue monitoring van nieuws en automatische creatie van relevante artikelen.',
  },
  {
    icon: Target,
    title: 'SEO Optimalisatie',
    description: 'Artikelen worden automatisch geoptimaliseerd voor zoekmachines en doelgroepen.',
  },
  {
    icon: Globe,
    title: 'Breed Bronnennetwerk',
    description: 'Toegang tot een uitgebreid netwerk van online nieuwsbronnen en databases.',
  },
  {
    icon: Zap,
    title: 'Snelle Publicatie',
    description: 'Automatische publicatie van artikelen op uw blog of contentplatform.',
  },
];

export default function BlogWriting() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProductNav />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Blog Writing
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transformeer uw contentcreatie met onze AI Blog Writing oplossing. 
                Ons systeem scant continu het internet voor relevante onderwerpen, 
                verzamelt informatie uit betrouwbare bronnen en genereert 
                hoogwaardige artikelen die automatisch op uw blog worden gepubliceerd.
              </p>
              <div className="flex space-x-4">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Demo Aanvragen
                </button>
                <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                  Meer Informatie
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800"
                alt="Modern Content Creation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <PenTool className="h-6 w-6" />
                  <span className="font-semibold">Automatische Content Creatie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Voordelen van onze AI Blog Writing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek hoe onze AI Blog Writing uw contentcreatie automatiseert
            met geavanceerde AI-technologie en intelligente research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-orange-500 transition-colors duration-200">
              <div className="bg-orange-500 rounded-lg p-4 inline-block mb-6">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}