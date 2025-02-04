import React from 'react';
import { Mail, Clock, Calendar, PiggyBank, BookOpen, Zap, Brain } from 'lucide-react';
import ProductNav from '../components/ProductNav';

const benefits = [
  {
    icon: Mail,
    title: 'Automatische E-mailverwerking',
    description: 'Intelligente verwerking van binnenkomende e-mails met directe koppeling aan uw mailbox.',
  },
  {
    icon: Clock,
    title: '24/7 Beschikbaarheid',
    description: 'Continue monitoring en beantwoording van e-mails, ook buiten kantooruren.',
  },
  {
    icon: Brain,
    title: 'Slimme Antwoorden',
    description: 'Contextbewuste antwoorden gebaseerd op uw eigen kennisbank en bedrijfsrichtlijnen.',
  },
  {
    icon: Calendar,
    title: 'Afspraken Inplannen',
    description: 'Automatisch afspraken inplannen en beheren via e-mail communicatie.',
  },
  {
    icon: BookOpen,
    title: 'Kennisbank Integratie',
    description: 'Naadloze koppeling met uw bestaande kennisbank voor accurate antwoorden.',
  },
  {
    icon: Zap,
    title: 'Snelle Verwerking',
    description: 'Directe reactie op e-mails zonder wachttijden of vertragingen.',
  },
];

export default function EmailAssistant() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProductNav />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Email Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Revolutioneer uw e-mailcommunicatie met onze AI Email Assistant. 
                Ons systeem leest en analyseert inkomende e-mails, zoekt relevante 
                antwoorden in uw kennisbank en stuurt automatisch professionele 
                reacties naar uw klanten - 24 uur per dag, 7 dagen per week.
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
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=800"
                alt="Modern Email Management System"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <Mail className="h-6 w-6" />
                  <span className="font-semibold">Intelligente E-mail Verwerking</span>
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
            Voordelen van onze AI Email Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek hoe onze AI Email Assistant uw e-mailcommunicatie transformeert
            met geavanceerde automatisering en intelligente verwerking.
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