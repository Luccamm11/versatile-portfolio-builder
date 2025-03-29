
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Detecta scroll para mudar o estilo da navbar
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Detecta a seção ativa
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/95 shadow-md backdrop-blur-sm' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold text-portfolio-700 font-montserrat hover-scale">
          Lucca Miranda
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors relative story-link ${
                activeSection === link.href.substring(1) 
                  ? 'text-portfolio-600' 
                  : 'text-gray-600 hover:text-portfolio-600'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-portfolio-600 transition-transform" />
              )}
            </a>
          ))}
          <Button className="bg-portfolio-600 hover:bg-portfolio-700 text-white hover-scale">
            <a href="#contact">Entre em Contato</a>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-portfolio-600 focus:outline-none"
          >
            {isOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} className="animate-fade-in" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors animate-fade-in ${
                  activeSection === link.href.substring(1) 
                    ? 'text-portfolio-600' 
                    : 'text-gray-600 hover:text-portfolio-600'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-portfolio-600 hover:bg-portfolio-700 text-white w-full animate-fade-in" style={{ animationDelay: '250ms' }}>
              <a href="#contact" onClick={() => setIsOpen(false)}>Entre em Contato</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
