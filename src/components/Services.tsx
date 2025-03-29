
import { Code, FileText, Languages } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Crio sites modernos, responsivos e funcionais utilizando as melhores práticas de HTML e CSS.',
      details: [
        'Desenvolvimento de sites responsivos',
        'Landing pages otimizadas para conversão',
        'Portfólios profissionais e criativos',
        'Sites institucionais e corporativos',
        'Manutenção e atualizações de sites'
      ],
      icon: Code
    },
    {
      title: 'Criação de Conteúdo',
      description: 'Produzo conteúdo de qualidade, otimizado para SEO e focado em engajar e converter sua audiência.',
      details: [
        'Artigos para blogs e sites',
        'Conteúdo para redes sociais',
        'E-books e materiais educativos',
        'Descrições de produtos e serviços',
        'Revisão e otimização de textos existentes'
      ],
      icon: FileText
    },
    {
      title: 'Tradução para o Inglês',
      description: 'Ofereço serviços de tradução precisa e contextualizada do português para o inglês americano.',
      details: [
        'Tradução de sites e materiais de marketing',
        'Documentos técnicos e manuais',
        'Artigos científicos e acadêmicos',
        'Legendas para vídeos e podcasts',
        'Localização e adaptação cultural'
      ],
      icon: Languages
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meus Serviços</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Ofereço soluções completas e personalizadas para atender às necessidades 
            específicas de cada cliente, com foco em qualidade e resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:border-portfolio-300 hover:shadow-md transition-all animate-fade-in"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-600 flex items-start">
                      <span className="text-portfolio-600 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-xl text-gray-700 mb-6">
            Precisa de um serviço personalizado? Vamos conversar sobre o seu projeto!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-portfolio-600 hover:bg-portfolio-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
