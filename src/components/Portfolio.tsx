import { ExternalLink, Github, Construction } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: 'Site Portfólio Pessoal',
      description: 'Meu site pessoal desenvolvido com React, TypeScript e Tailwind CSS, incluindo chatbot integrado com n8n para interação automatizada com visitantes.',
      image: '/images/logo-nova.jpeg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'n8n'],
      githubUrl: '#',
      liveUrl: window.location.origin,
      status: 'Concluído'
    },
    {
      title: 'Jéssica Miranda Beauty',
      description: 'Landing page premium para espaço de estética, com agendamento integrado via WhatsApp, SEO local avançado, animações interativas e alta fidelidade visual.',
      image: '/images/jessicamm-beauty.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsivo'],
      githubUrl: '#',
      liveUrl: 'https://jessicamm-beauty.vercel.app',
      status: 'Concluído'
    },
    {
      title: 'Excelentíssimo',
      description: 'Uma plataforma de e-commerce moderna e elegante voltada para moda unissex, com design premium e experiência de compra fluida.',
      image: '/images/excelentissimo.jpg',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      githubUrl: '#',
      liveUrl: 'https://exmo-site.vercel.app/',
      status: 'Concluído'
    },
    {
      title: 'AuditoriaPro',
      description: 'Sistema profissional de gestão de auditorias, focado em simplificar processos e aumentar a eficiência operacional de equipes.',
      image: '/images/auditoriapro.jpg',
      technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: 'https://auditoriapro.vercel.app/',
      status: 'Concluído'
    },
    {
      title: 'Produto 48h',
      description: 'Landing page otimizada para lançamentos rápidos e alta conversão, com design moderno e foco total em performance de vendas.',
      image: '/images/produto48h.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
      githubUrl: '#',
      liveUrl: 'https://produto48h.vercel.app/',
      status: 'Concluído'
    },
    {
      title: 'DashCore',
      description: 'Dashboard administrativo robusto com visualizações de dados avançadas, gestão de métricas em tempo real e interface personalizável.',
      image: '/images/dashcore.png',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Lucide React'],
      githubUrl: '#',
      liveUrl: 'https://dashcore.lovable.app/',
      status: 'Concluído'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50 dark:bg-slate-900 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Meu Portfólio</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Aqui você poderá ver meus projetos e trabalhos conforme eles forem desenvolvidos.
            Estou sempre buscando novos desafios para aprimorar minhas habilidades.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 dark:border-slate-800 dark:bg-slate-950 hover:shadow-lg transition-shadow animate-fade-in portfolio-item flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
                    {project.status}
                  </Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-portfolio-100 dark:bg-portfolio-900/30 text-portfolio-700 dark:text-portfolio-300 hover:bg-portfolio-200 dark:hover:bg-portfolio-800/40">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    size="sm"
                    className="bg-portfolio-600 hover:bg-portfolio-700 text-white flex items-center gap-2 w-full"
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
