import { CheckCircle, Target, Clock, Trophy, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Entrego soluções que realmente impactam seu negócio, priorizando eficiência e ROI.'
    },
    {
      icon: Clock,
      title: 'Agilidade na Entrega',
      description: 'Cumpro prazos rigorosamente e mantenho comunicação transparente durante todo o projeto.'
    },
    {
      icon: Lightbulb,
      title: 'Soluções Inovadoras',
      description: 'Utilizo as tecnologias mais modernas para criar experiências digitais únicas e funcionais.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada projeto é único. Adapto minhas soluções às suas necessidades específicas.'
    },
    {
      icon: Trophy,
      title: 'Qualidade Garantida',
      description: 'Código limpo, performático e seguindo as melhores práticas do mercado.'
    },
    {
      icon: CheckCircle,
      title: 'Suporte Contínuo',
      description: 'Não abandono o projeto após a entrega. Ofereço suporte e atualizações quando necessário.'
    }
  ];

  return (
    <section id="why-choose-me" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Por que me escolher?
          </h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Não sou apenas mais um desenvolvedor. Sou seu parceiro estratégico para transformar 
            ideias em soluções digitais que realmente funcionam e geram valor.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <reason.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-portfolio-50 to-portfolio-100 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Pronto para transformar sua ideia em realidade?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Não perca tempo com profissionais que prometem e não entregam. Trabalhe com quem tem 
            compromisso real com o seu sucesso e experiência comprovada no mercado.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-portfolio-600 hover:bg-portfolio-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-semibold"
          >
            Vamos conversar sobre seu projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;