
import { Code, Database, Bot } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Express.js', level: 85 },
    { name: 'IA/ML', level: 70 },
  ];
  
  const timeline = [
    {
      year: '2024',
      title: 'Especialização em IA',
      description: 'Desenvolvimento de integrações com APIs de IA e automações'
    },
    {
      year: '2023',
      title: 'Stack MERN',
      description: 'Domínio completo do stack MongoDB, Express, React e Node.js'
    },
    {
      year: '2022',
      title: 'Python & Automações',
      description: 'Desenvolvimento de scripts e automações em Python'
    },
    {
      year: '2021',
      title: 'Início Full Stack',
      description: 'Transição para desenvolvimento full stack'
    },
  ];
  
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Sou um desenvolvedor full stack especializado no stack MERN, automações Python 
            e integrações com inteligência artificial para soluções inovadoras.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800">Minha Jornada</h3>
            <p className="text-gray-600">
              Sou um desenvolvedor full stack com expertise no stack MERN (MongoDB, Express.js, React, Node.js). 
              Especializo-me em criar aplicações web completas, desde o frontend responsivo até APIs robustas 
              e bancos de dados eficientes.
            </p>
            <p className="text-gray-600 animate-fade-in" style={{animationDelay: '200ms'}}>
              Além disso, desenvolvo automações em Python para otimizar processos e integro soluções de 
              inteligência artificial em projetos, proporcionando funcionalidades avançadas e inovadoras. 
              Meu foco é entregar soluções tecnológicas completas e eficazes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Card className="border border-portfolio-100 hover:shadow-md transition-shadow hover:border-portfolio-300 hover-scale">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mb-4">
                    <Code size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Stack MERN</h4>
                  <p className="text-gray-600 text-sm">Aplicações full stack com MongoDB, Express, React e Node.js</p>
                </CardContent>
              </Card>
              
              <Card className="border border-portfolio-100 hover:shadow-md transition-shadow hover:border-portfolio-300 hover-scale" style={{animationDelay: '100ms'}}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mb-4">
                    <Database size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Automações Python</h4>
                  <p className="text-gray-600 text-sm">Scripts e automações para otimização de processos</p>
                </CardContent>
              </Card>
              
              <Card className="border border-portfolio-100 hover:shadow-md transition-shadow hover:border-portfolio-300 hover-scale" style={{animationDelay: '200ms'}}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mb-4">
                    <Bot size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Integrações IA</h4>
                  <p className="text-gray-600 text-sm">Implementação de soluções com inteligência artificial</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-800">Minhas Habilidades</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-portfolio-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 200}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-10">Timeline</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-portfolio-100 before:left-3 before:ml-0.5">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-10 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                  <div className="absolute left-0 top-1.5 w-7 h-7 bg-portfolio-500 text-white rounded-full flex items-center justify-center hover:bg-portfolio-700 transition-colors hover-scale">
                    <span className="text-xs font-bold">{item.year.substring(2)}</span>
                  </div>
                  <div className="border-l-4 border-portfolio-500 pl-4 py-1">
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.year} — {item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
