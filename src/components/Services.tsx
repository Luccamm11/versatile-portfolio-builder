
import { Code, Database, Bot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento MERN Stack',
      description: 'Desenvolvo aplicações web completas usando MongoDB, Express.js, React e Node.js para soluções robustas e escaláveis.',
      details: [
        'Aplicações web full stack completas',
        'APIs RESTful com Express.js e Node.js',
        'Interfaces modernas com React',
        'Bancos de dados MongoDB otimizados',
        'Autenticação e segurança avançada'
      ],
      icon: Code
    },
    {
      title: 'Automações Python',
      description: 'Crio scripts e automações em Python para otimizar processos, extrair dados e aumentar a produtividade.',
      details: [
        'Scripts de automação de tarefas',
        'Web scraping e extração de dados',
        'Processamento e análise de dados',
        'Integração com APIs e sistemas',
        'Bots e assistentes automatizados'
      ],
      icon: Database
    },
    {
      title: 'Integrações com IA',
      description: 'Implemento soluções de inteligência artificial em aplicações, incluindo chatbots, análise de dados e processamento de linguagem natural.',
      details: [
        'Chatbots inteligentes com GPT',
        'Análise de sentimentos e texto',
        'Processamento de imagens com IA',
        'Integração com APIs de IA (OpenAI, Google AI)',
        'Sistemas de recomendação personalizados'
      ],
      icon: Bot
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meus Serviços</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Ofereço soluções tecnológicas completas, desde desenvolvimento full stack 
            até automações inteligentes e integração com IA para impulsionar seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:border-portfolio-300 hover:shadow-md transition-all animate-fade-in animate-on-scroll portfolio-item"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-lg flex items-center justify-center mb-4 floating-icon">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-600 flex items-start hover-scale" style={{animationDelay: `${(index * 150) + (detailIndex * 100)}ms`}}>
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
            Precisa de uma solução tecnológica personalizada? Vamos conversar sobre o seu projeto!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-portfolio-600 hover:bg-portfolio-700 text-white font-medium py-3 px-8 rounded-lg transition-colors hover-scale btn-highlight"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
