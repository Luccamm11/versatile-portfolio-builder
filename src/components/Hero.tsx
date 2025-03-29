
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
                João Silva
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mt-2">
                Desenvolvedor Web | Criador de Conteúdo | Tradutor
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg max-w-xl">
              Sou um profissional versátil com habilidades em desenvolvimento web e criação de conteúdo, 
              oferecendo soluções criativas e eficazes para diversos projetos digitais.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-portfolio-600 hover:bg-portfolio-700 text-white">
                <a href="#portfolio" className="flex items-center">
                  Ver Portfólio <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="border-portfolio-500 text-portfolio-600 hover:bg-portfolio-50">
                <a href="#contact">Entre em Contato</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="João Silva" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-portfolio-600 text-white px-4 py-2 rounded-full shadow-lg">
                <p className="font-medium">5+ Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
