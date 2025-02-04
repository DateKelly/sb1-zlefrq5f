import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Chatbot from './pages/Chatbot';
import EmailAssistant from './pages/EmailAssistant';
import BlogWriting from './pages/BlogWriting';
import VoiceAssistant from './pages/VoiceAssistant';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/email-assistant" element={<EmailAssistant />} />
            <Route path="/blog-writing" element={<BlogWriting />} />
            <Route path="/voice-assistant" element={<VoiceAssistant />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
