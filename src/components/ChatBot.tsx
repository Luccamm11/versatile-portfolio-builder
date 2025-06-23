
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou o assistente virtual do Lucca Miranda. Posso responder perguntas sobre suas habilidades, experiência e projetos. O que você gostaria de saber?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('experiência') || message.includes('experiencia') || message.includes('tempo')) {
      return 'Lucca tem experiência sólida em desenvolvimento full stack, especializando-se no stack MERN desde 2023. Começou sua jornada em 2021 e vem evoluindo constantemente suas habilidades.';
    }
    
    if (message.includes('habilidades') || message.includes('tecnologias') || message.includes('stack')) {
      return 'As principais habilidades do Lucca incluem: HTML/CSS (100%), JavaScript (80%), MERN Stack (90%), Python para automações, integrações com IA/ML (85%) e n8n para automações (90%).';
    }
    
    if (message.includes('python') || message.includes('automação') || message.includes('automacao')) {
      return 'Lucca desenvolve automações em Python para otimizar processos empresariais, scripts personalizados e integrações com APIs diversas. Também utiliza n8n para criar fluxos de automação visual.';
    }
    
    if (message.includes('ia') || message.includes('inteligência artificial') || message.includes('inteligencia artificial') || message.includes('ai')) {
      return 'Lucca integra soluções de IA em projetos web, trabalhando com APIs de grandes modelos de linguagem, processamento de texto e criação de chatbots inteligentes.';
    }
    
    if (message.includes('mern') || message.includes('react') || message.includes('node') || message.includes('mongodb')) {
      return 'O stack MERN (MongoDB, Express.js, React, Node.js) é a especialidade principal do Lucca. Ele cria aplicações web completas, desde interfaces responsivas até APIs robustas e bancos de dados eficientes.';
    }
    
    if (message.includes('projetos') || message.includes('portfolio') || message.includes('trabalhos')) {
      return 'Lucca trabalha em diversos projetos envolvendo desenvolvimento web full stack, automações para empresas e integrações com IA. Você pode ver alguns exemplos na seção Portfolio deste site.';
    }
    
    if (message.includes('contato') || message.includes('email') || message.includes('whatsapp')) {
      return 'Você pode entrar em contato com Lucca por email: luccammiranda@gmail.com ou WhatsApp: (37) 99808-4178. Ele está sempre disponível para discutir novos projetos!';
    }
    
    if (message.includes('localização') || message.includes('localizacao') || message.includes('onde')) {
      return 'Lucca está localizado em Minas Gerais, Brasil, mas trabalha remotamente com clientes de todo o país.';
    }
    
    if (message.includes('preço') || message.includes('preco') || message.includes('valor') || message.includes('orçamento') || message.includes('orcamento')) {
      return 'Os valores dos projetos variam conforme a complexidade e escopo. Entre em contato para um orçamento personalizado baseado nas suas necessidades específicas.';
    }
    
    if (message.includes('prazo') || message.includes('tempo de entrega') || message.includes('quanto tempo')) {
      return 'O prazo de entrega depende da complexidade do projeto. Projetos simples podem ser entregues em 1-2 semanas, enquanto sistemas mais complexos podem levar de 4-8 semanas.';
    }
    
    // Respostas genéricas
    return 'Interessante! Para informações mais específicas sobre esse tópico, recomendo entrar em contato diretamente com Lucca. Você pode perguntar sobre suas habilidades, projetos, experiência ou como ele pode ajudar no seu projeto.';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular delay de digitação
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-[600px] flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
          <div className="w-10 h-10 bg-portfolio-100 text-portfolio-600 rounded-full flex items-center justify-center mr-3">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Assistente Virtual</h3>
            <p className="text-sm text-gray-600">Pergunte sobre Lucca Miranda</p>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-portfolio-600 text-white'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <Bot size={16} className="mt-0.5 flex-shrink-0" />
                  )}
                  {!message.isBot && (
                    <User size={16} className="mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[80%]">
                <div className="flex items-center space-x-2">
                  <Bot size={16} />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua pergunta..."
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-portfolio-600 hover:bg-portfolio-700 text-white"
            disabled={!inputMessage.trim() || isTyping}
          >
            <Send size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;
