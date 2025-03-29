
import { Code, FileText, Languages } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Redação', level: 95 },
    { name: 'Tradução', level: 90 },
    { name: 'SEO', level: 80 },
  ];
  
  const timeline = [
    {
      year: '2023',
      title: 'Início da Jornada',
      description: 'Começando a desenvolver meu portfólio e habilidades'
    },
    {
      year: '2022',
      title: 'Aprendizado de Idiomas',
      description: 'Aprofundamento nos estudos de tradução e inglês'
    },
    {
      year: '2021',
      title: 'Formação em Desenvolvimento',
      description: 'Estudo de tecnologias para desenvolvimento web'
    },
    {
      year: '2020',
      title: 'Especialização em Conteúdo',
      description: 'Foco em técnicas de criação de conteúdo digital'
    },
  ];
  
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Sou um profissional com habilidades em desenvolvimento web e criação de conteúdo, 
            buscando sempre soluções criativas e eficazes para cada projeto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800">Minha Jornada</h3>
            <p className="text-gray-600">
              Sou um profissional com habilidades em desenvolvimento web e criação de conteúdo. 
              Tenho experiência em HTML e CSS, o que me permite construir e personalizar páginas web 
              com designs funcionais e estilizados. Sou especializado em redação de artigos e produção 
              de conteúdo envolvente, criando textos claros, bem estruturados e otimizados para diferentes públicos.
            </p>
            <p className="text-gray-600 animate-fade-in" style={{animationDelay: '200ms'}}>
              Além disso, possuo experiência em tradução para o inglês (EUA), adaptando conteúdos para 
              alcance global. Meu objetivo é sempre aprimorar minhas habilidades e oferecer soluções 
              criativas e eficazes para todos os meus clientes e projetos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Card className="border border-portfolio-100 hover:shadow-md transition-shadow hover:border-portfolio-300 hover-scale">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mb-4">
                    <Code size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Desenvolvimento Web</h4>
                  <p className="text-gray-600 text-sm">Sites responsivos e funcionais com HTML e CSS</p>
                </CardContent>
              </Card>
              
              <Card className="border border-portfolio-100 hover:shadow-md transition-shadow hover:border-portfolio-300 hover-scale" style={{animationDelay: '100ms'}}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mb-4">
                    <FileText size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Criação de Conteúdo</h4>
                  <p className="text-gray-600 text-sm">Artigos envolventes e otimizados para SEO</p>
                </CardContent>
              </Card>
              
              <Card className="border border-portfolio-100 hover:shadow-md transition-shadow hover:border-portfolio-300 hover-scale" style={{animationDelay: '200ms'}}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mb-4">
                    <Languages size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Tradução</h4>
                  <p className="text-gray-600 text-sm">Traduções precisas para o inglês (EUA)</p>
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
