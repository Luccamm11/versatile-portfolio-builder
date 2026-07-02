
import { Code, Database, Bot } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'Node.js / Express', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'n8n Automações', level: 95 },
    { name: 'IA & LLMs', level: 90 },
    { name: 'Python', level: 80 },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Aprimoramento Contínuo',
      description: 'Aprimorando habilidades e iniciando novos projetos inovadores'
    },
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
    <section id="about" className="section-padding bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Trabalho criando soluções digitais completas para quem precisa modernizar o próprio negócio,
            atrair mais clientes através da internet ou economizar horas de trabalho através de automações inteligentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Minha Jornada</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ajudo empresas, profissionais liberais (como clínicas, advogados e esteticistas) e empreendedores a criarem uma presença forte na internet. Desenvolvo desde páginas de vendas (landing pages) de alta conversão até sistemas web personalizados e fáceis de usar.
            </p>
            <p className="text-gray-600 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Além de programar sites, sou especialista em criar robôs que automatizam tarefas repetitivas do dia a dia (como organizar informações, enviar mensagens automáticas e sincronizar sistemas) e em integrar Inteligência Artificial para otimizar seu tempo e reduzir seus custos operacionais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Card className="border border-portfolio-100 dark:border-slate-800 dark:bg-slate-900/50 hover:shadow-md transition-shadow hover:border-portfolio-300 dark:hover:border-portfolio-500 hover-scale">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-portfolio-100 dark:bg-portfolio-900/30 text-portfolio-600 dark:text-portfolio-400 rounded-full flex items-center justify-center mb-4">
                    <Code size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Sites e Sistemas</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Páginas de vendas, sites institucionais, lojas virtuais e sistemas web sob medida.</p>
                </CardContent>
              </Card>

              <Card className="border border-portfolio-100 dark:border-slate-800 dark:bg-slate-900/50 hover:shadow-md transition-shadow hover:border-portfolio-300 dark:hover:border-portfolio-500 hover-scale" style={{ animationDelay: '100ms' }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-portfolio-100 dark:bg-portfolio-900/30 text-portfolio-600 dark:text-portfolio-400 rounded-full flex items-center justify-center mb-4">
                    <Database size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Automação de Processos</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Robôs e fluxos de automação para que seu negócio rode no automático.</p>
                </CardContent>
              </Card>

              <Card className="border border-portfolio-100 dark:border-slate-800 dark:bg-slate-900/50 hover:shadow-md transition-shadow hover:border-portfolio-300 dark:hover:border-portfolio-500 hover-scale" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-portfolio-100 dark:bg-portfolio-900/30 text-portfolio-600 dark:text-portfolio-400 rounded-full flex items-center justify-center mb-4">
                    <Bot size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Inteligência Artificial</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Chatbots e sistemas com IA para atuar no atendimento ou análise inteligente.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Minhas Habilidades</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-white">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-portfolio-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 200}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-10">Timeline</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-portfolio-100 dark:before:bg-slate-800 before:left-3 before:ml-0.5">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-10 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="absolute left-0 top-1.5 w-7 h-7 bg-portfolio-500 text-white rounded-full flex items-center justify-center hover:bg-portfolio-700 transition-colors hover-scale">
                    <span className="text-xs font-bold">{item.year.substring(2)}</span>
                  </div>
                  <div className="border-l-4 border-portfolio-500 pl-4 py-1">
                    <h4 className="font-bold text-gray-800 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.year} — {item.description}</p>
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
