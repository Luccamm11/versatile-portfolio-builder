
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: 'Site Responsivo para Restaurante',
      description: 'Desenvolvimento completo de um site responsivo para um restaurante local com cardápio online e sistema de reservas.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
      github: '#'
    },
    {
      title: 'Blog de Tecnologia',
      description: 'Criação de conteúdo especializado sobre tecnologia e inovação para um blog de alta autoridade na área.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      tags: ['Redação', 'SEO', 'WordPress'],
      link: '#',
      github: null
    },
    {
      title: 'Tradução de Manual Técnico',
      description: 'Tradução de um manual técnico completo de software para o inglês americano, incluindo termos específicos da área.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80',
      tags: ['Tradução', 'Inglês', 'Técnico'],
      link: '#',
      github: null
    },
    {
      title: 'Portfólio para Fotógrafo',
      description: 'Desenvolvimento de um site portfólio elegante e responsivo para um fotógrafo profissional exibir seus trabalhos.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      tags: ['HTML', 'CSS', 'Responsivo'],
      link: '#',
      github: '#'
    },
    {
      title: 'Artigos sobre Sustentabilidade',
      description: 'Série de artigos informativos sobre práticas sustentáveis e responsabilidade ambiental para um site especializado.',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80',
      tags: ['Redação', 'Sustentabilidade', 'SEO'],
      link: '#',
      github: null
    },
    {
      title: 'Tradução de Artigos Científicos',
      description: 'Tradução de uma coleção de artigos científicos na área de saúde do português para o inglês para publicação internacional.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Tradução', 'Científico', 'Saúde'],
      link: '#',
      github: null
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meu Portfólio</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Aqui estão alguns dos projetos que desenvolvi, mostrando minhas habilidades
            em desenvolvimento web, criação de conteúdo e tradução.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-portfolio-100 text-portfolio-700 hover:bg-portfolio-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto pt-2">
                  <a 
                    href={project.link}
                    className="text-portfolio-600 hover:text-portfolio-700 flex items-center text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" /> Ver Projeto
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      className="text-gray-600 hover:text-gray-800 flex items-center text-sm font-medium"
                    >
                      <Github size={16} className="mr-1" /> Código
                    </a>
                  )}
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
