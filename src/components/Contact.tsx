
import { MapPin, Mail, Phone } from 'lucide-react';
import ChatBot from './ChatBot';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Tem alguma pergunta ou está interessado em trabalhar comigo? 
            Use o chatbot para saber mais sobre mim ou entre em contato diretamente!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800">Vamos Conversar</h3>
            <p className="text-gray-600">
              Estou disponível para novos projetos. Você pode me contatar através 
              dos canais abaixo ou usar o chatbot para fazer perguntas sobre minha experiência.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center hover-scale">
                <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Localização</h4>
                  <p className="text-gray-600">Minas Gerais, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center hover-scale">
                <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href="mailto:luccammiranda@gmail.com" className="text-portfolio-600 hover:underline">luccammiranda@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center hover-scale">
                <div className="w-12 h-12 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telefone</h4>
                  <a href="tel:+5537998084178" className="text-portfolio-600 hover:underline">(37) 99808-4178</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-gray-800 mb-4">Me encontre online</h4>
              <a 
                href="https://wa.me/qr/QJ5EUPTS3RVJH1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors hover-scale"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <ChatBot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
