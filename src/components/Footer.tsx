import { Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Lucca Miranda</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Desenvolvedor Full Stack especializado no stack MERN, automações Python 
              e integrações com inteligência artificial para soluções inovadoras.
            </p>
            <p className="text-gray-400">
              © {currentYear} Lucca Miranda. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Especialidades</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Desenvolvimento MERN</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Automações Python</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Integrações IA</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">Este site foi criado usando React e Tailwind CSS</p>
          
          <div className="flex space-x-6">
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Entre em Contato</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;