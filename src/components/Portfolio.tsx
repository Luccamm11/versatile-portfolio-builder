import { ExternalLink, Github, Construction } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: 'Site Portfólio Pessoal',
      description: 'Meu site pessoal desenvolvido com React, TypeScript e Tailwind CSS, incluindo chatbot integrado com n8n para interação automatizada com visitantes.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'n8n'],
      githubUrl: '#',
      liveUrl: window.location.origin,
      status: 'Concluído'
    }
  ];

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
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow animate-fade-in portfolio-item">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/logo-lucca.png" 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-portfolio-100 text-portfolio-700 hover:bg-portfolio-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} />
                    GitHub
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-portfolio-600 hover:bg-portfolio-700 text-white flex items-center gap-2"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Ver Site
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
