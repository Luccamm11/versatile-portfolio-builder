
import { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo seu contato. Responderei em breve.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@joaosilva.com',
      link: 'mailto:contato@joaosilva.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 98765-4321',
      link: 'tel:+5511987654321'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'São Paulo, Brasil',
      link: 'https://maps.google.com/?q=São+Paulo,+Brasil'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      link: 'https://linkedin.com/'
    },
    {
      icon: Github,
      title: 'GitHub',
      link: 'https://github.com/'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      link: 'https://instagram.com/'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Tem um projeto em mente? Vamos conversar! Preencha o formulário abaixo e
            entrarei em contato o mais breve possível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start hover:text-portfolio-600 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-portfolio-100 text-portfolio-600 flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-4">Me siga nas redes</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-10 h-10 rounded-full bg-portfolio-600 text-white hover:bg-portfolio-700 flex items-center justify-center transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.title}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-portfolio-600 text-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Vamos trabalhar juntos!</h3>
              <p className="mb-4">
                Estou disponível para projetos freelance, colaborações e oportunidades de trabalho.
              </p>
              <p>
                Ficarei feliz em discutir como posso ajudar a transformar suas ideias em realidade.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700 font-medium">Nome</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="border-gray-300 focus:border-portfolio-500 focus:ring-portfolio-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="border-gray-300 focus:border-portfolio-500 focus:ring-portfolio-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-gray-700 font-medium">Assunto</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  required
                  className="border-gray-300 focus:border-portfolio-500 focus:ring-portfolio-500"
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-gray-700 font-medium">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem aqui..."
                  rows={6}
                  required
                  className="border-gray-300 focus:border-portfolio-500 focus:ring-portfolio-500"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-600 hover:bg-portfolio-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
