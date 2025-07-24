
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-portfolio-600 font-medium">Olá, eu sou</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                Lucca Miranda
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mt-2">
                Desenvolvedor Full Stack | Automações Python | Integrações IA
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg max-w-xl">
              Desenvolvedor especializado no stack MERN, criação de automações Python 
              e implementação de soluções com inteligência artificial para projetos inovadores.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-portfolio-600 hover:bg-portfolio-700 text-white animate-pulse">
                <a href="#portfolio" className="flex items-center">
                  Ver Portfólio <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="border-portfolio-500 text-portfolio-600 hover:bg-portfolio-50 hover-scale">
                <a href="#contact">Entre em Contato</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl hover:border-portfolio-400 transition-all duration-300">
                <img 
                  src="/public/images/logo-lucca.png" 
                  alt="Lucca Miranda" 
                  className="w-full h-full object-contain bg-gray-100"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-portfolio-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                <p className="font-medium">Disponível para Projetos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
