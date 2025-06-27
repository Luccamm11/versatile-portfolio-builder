
import { useState, useRef, useEffect } from 'react';
import { Send, Gem, User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToN8n = async (userMessage: string): Promise<string> => {
    const webhookUrl = 'https://luccamm1.app.n8n.cloud/webhook/e5da9c7f-c4a2-4c1a-a476-3dad1d8fb3e9';
    
    try {
      console.log('Enviando pergunta para n8n:', userMessage);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: userMessage,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log('Resposta do n8n:', data);
      
      // Usar o campo 'output' da resposta do n8n
      return data.output || 'Desculpe, não consegui processar sua pergunta no momento.';
      
    } catch (error) {
      console.error('Erro ao conectar com n8n:', error);
      
      toast({
        title: "Erro de Conexão",
        description: "Não foi possível conectar com o assistente. Tente novamente.",
        variant: "destructive",
      });
      
      // Fallback para resposta local em caso de erro
      return 'Desculpe, estou com problemas de conexão no momento. Por favor, tente novamente ou entre em contato diretamente: luccammiranda@gmail.com';
    }
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
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      const botResponseText = await sendToN8n(currentMessage);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Erro ao processar resposta:', error);
    } finally {
      setIsTyping(false);
    }
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
            <Gem size={20} />
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
                    <Gem size={16} className="mt-0.5 flex-shrink-0" />
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
                  <Gem size={16} />
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
            disabled={isTyping}
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
