import React from 'react';
import { Bot, Clock, Calendar, PiggyBank, MessageSquare, BookOpen, Globe } from 'lucide-react';
import ProductNav from '../components/ProductNav';

const benefits = [
  {
    icon: Clock,
    title: '24/7 Beschikbaarheid',
    description: 'Onze AI Chatbot staat dag en nacht klaar om uw website bezoekers direct te helpen.',
  },
  {
    icon: MessageSquare,
    title: 'Slimme Antwoorden',
    description: 'Intelligente gespreksvoering met contextbewust begrip van klantvragen.',
  },
  {
    icon: Calendar,
    title: 'Afspraken Plannen',
    description: 'Automatisch afspraken inplannen en beheren in uw agenda systeem.',
  },
  {
    icon: PiggyBank,
    title: 'Kostenefficiënt',
    description: 'Verminder de werkdruk op uw klantenservice team tegen lage kosten.',
  },
  {
    icon: Globe,
    title: 'Meertalig',
    description: 'Ondersteuning in het Nederlands, Engels en andere gewenste talen.',
  },
  {
    icon: BookOpen,
    title: 'Kennisbank Integratie',
    description: 'Directe toegang tot uw kennisbank voor accurate antwoorden.',
  },
];

export default function Chatbot() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProductNav />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Chatbot
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Verbeter uw online klantenservice met onze geavanceerde AI Chatbot. 
                Direct antwoord op klantvragen, 24/7 beschikbaarheid en naadloze 
                integratie met uw website. Bespaar tijd en kosten terwijl u uw 
                klanttevredenheid verhoogt.
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
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=800"
                alt="Modern Customer Service Chat Interface"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <Bot className="h-6 w-6" />
                  <span className="font-semibold">Intelligente Chat Assistent</span>
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
            Voordelen van onze AI Chatbot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek hoe onze AI Chatbot uw online klantenservice transformeert
            met geavanceerde functionaliteit en natuurlijke communicatie.
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