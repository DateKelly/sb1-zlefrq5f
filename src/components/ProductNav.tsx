import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, Bot, Mail, PenTool } from 'lucide-react';

export default function ProductNav() {
  const navigate = useNavigate();
  
  const products = [
    {
      title: 'AI Voice Assistent',
      icon: Mic,
      path: '/voice-assistant'
    },
    {
      title: 'AI Chatbot',
      icon: Bot,
      path: '/chatbot'
    },
    {
      title: 'AI Email Assistant',
      icon: Mail,
      path: '/email-assistant'
    },
    {
      title: 'AI Blog Writing',
      icon: PenTool,
      path: '/blog-writing'
    }
  ];

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product) => (
            <button
              key={product.path}
              onClick={() => navigate(product.path)}
              className="bg-orange-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl text-white hover:bg-orange-600 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <product.icon className="h-5 w-5" />
              <span>{product.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}