import { ExternalLink, Github, Construction } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const emptyState = {
    title: 'Em Breve',
    description: 'Ainda não tenho projetos para mostrar, mas estou trabalhando em novos conteúdos que serão adicionados em breve. Fique atento às atualizações!',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  };

  return (
    <section id="portfolio" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meu Portfólio</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Aqui você poderá ver meus projetos e trabalhos conforme eles forem desenvolvidos.
            Estou sempre buscando novos desafios para aprimorar minhas habilidades.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Card className="w-full max-w-3xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow animate-fade-in portfolio-item">
            <div className="h-64 overflow-hidden">
              <img 
                src={emptyState.image} 
                alt="Em construção" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mx-auto mb-6 floating-icon">
                <Construction size={40} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{emptyState.title}</h3>
              <p className="text-gray-600 mb-6">{emptyState.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                <Badge variant="secondary" className="bg-portfolio-100 text-portfolio-700 hover:bg-portfolio-200">
                  HTML
                </Badge>
                <Badge variant="secondary" className="bg-portfolio-100 text-portfolio-700 hover:bg-portfolio-200">
                  CSS
                </Badge>
                <Badge variant="secondary" className="bg-portfolio-100 text-portfolio-700 hover:bg-portfolio-200">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="bg-portfolio-100 text-portfolio-700 hover:bg-portfolio-200">
                  React
                </Badge>
              </div>
              
              <Button className="bg-portfolio-600 hover:bg-portfolio-700 text-white mx-auto">
                Volte em breve
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
