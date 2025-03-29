
import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS service, template and user ID
      // Você precisará criar uma conta no EmailJS e configurar estes parâmetros
      const serviceID = 'service_default'; // Substitua pelo seu service ID
      const templateID = 'template_default'; // Substitua pelo seu template ID
      const userID = 'user_xxxxxxxxxxxxx'; // Substitua pelo seu user ID
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Lucca Miranda',
        reply_to: formData.email,
      };
      
      await emailjs.send(serviceID, templateID, templateParams, userID);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei o mais breve possível.",
      });
      
      // Reset após 3 segundos
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-portfolio-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Tem alguma pergunta ou está interessado em trabalhar comigo? 
            Entre em contato e vamos conversar sobre seu projeto!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800">Vamos Conversar</h3>
            <p className="text-gray-600">
              Estou disponível para novos projetos. Você pode me contatar através 
              dos canais abaixo ou preenchendo o formulário.
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
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <CheckCircle size={48} className="text-green-500 mb-4 animate-scale-in" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600">
                      Obrigado pelo contato. Responderei o mais breve possível.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu.email@exemplo.com"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Conte-me sobre seu projeto..."
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-portfolio-600 hover:bg-portfolio-700 text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
