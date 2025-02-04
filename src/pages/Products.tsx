import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Mic, Mail, PenTool } from 'lucide-react';

const useProductNavigation = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    if (path === 'AI Voice Assistent') {
      navigate('/voice-assistant');
    } else if (path === 'AI Email Assistant') {
      navigate('/email-assistant');
    } else if (path === 'AI Chatbot') {
      navigate('/chatbot');
    } else if (path === 'AI Blog Writing') {
      navigate('/blog-writing');
    }
  };
  
  return handleNavigation;
};

const whyChooseUs = [
  'Nederlands bedrijf met focus op lokale markt',
  'Meertalige AI-oplossingen specifiek voor Nederlandse bedrijven',
  'Privacy-bewust en AVG-compliant',
  'Persoonlijke ondersteuning in het Nederlands',
];

const products = [
  {
    title: 'AI Voice Assistent',
    description: 'Natuurlijke spraakinteractie in het Nederlands voor uw klanten en medewerkers.',
    icon: Mic,
    features: ['Nederlandse spraakherkenning', 'Natuurlijke stemkwaliteit', 'Integratie met bestaande systemen'],
  },
  {
    title: 'AI Chatbot',
    description: 'Intelligente chatbot die uw klanten 24/7 in het Nederlands te woord staat.',
    icon: Bot,
    features: ['24/7 beschikbaar', 'Meertalige ondersteuning', 'Plan direct afspraken in'],
  },
  {
    title: 'AI Email Assistant',
    description: 'Automatiseer uw e-mailcommunicatie met Nederlandse taalverwerking.',
    icon: Mail,
    features: ['Automatische e-mailverwerking', 'Slimme antwoordsuggesties', 'Koppel uw eigen Kennisbank'],
  },
  {
    title: 'AI Blog Writing',
    description: 'Genereer hoogwaardige Nederlandse content voor uw website en blog.',
    icon: PenTool,
    features: ['SEO-geoptimaliseerde teksten', 'Consistente schrijfstijl', 'Snelle contentcreatie'],
  },
];

export default function Products() {
  const handleNavigation = useProductNavigation();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why Choose HollandAI Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Waarom Kiezen voor HollandAI?</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-white mb-8">
              Als Nederlands AI-bedrijf begrijpen wij als geen ander de specifieke behoeften van Nederlandse organisaties.
              Onze oplossingen zijn ontwikkeld met oog voor de Nederlandse taal, cultuur en zakelijke omgeving.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUs.map((reason) => (
                <li key={reason} className="flex items-center bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md border border-orange-400 hover:bg-white transition-all duration-200">
                  <svg className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Products Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {products.map((product) => (
            <button
              key={product.title}
              onClick={() => handleNavigation(product.title)}
              className="bg-orange-500 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl text-white hover:bg-orange-600 hover:scale-105 transition-all duration-300 flex items-center space-x-3 font-medium"
            >
              <product.icon className="h-5 w-5" />
              <span>{product.title}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              id={product.title}
              key={product.title}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-gray-100"
            >
              <div className="bg-orange-500 rounded-lg p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.title}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}