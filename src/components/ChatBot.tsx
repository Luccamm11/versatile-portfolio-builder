// src/components/ChatBot.tsx

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
  }, [messages, isTyping]);

  // --- LÓGICA CORRIGIDA E FUNCIONAL ---
  const sendToN8n = async (userMessage: string): Promise<string> => {
    // IMPORTANTE: Coloque a URL correta do seu webhook n8n aqui
    const webhookUrl = 'https://primary-production-37034.up.railway.app/webhook-test/chatbot-portfolio';
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // O corpo da requisição que o seu n8n funcional espera
        body: JSON.stringify({
          question: userMessage
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      
      // *** A MUDANÇA CRUCIAL ESTÁ AQUI ***
      // Lendo a resposta do campo "reply" que configuramos no n8n, em vez de "output"
      return data.reply || 'Desculpe, não consegui processar sua pergunta no momento.';
      
    } catch (error) {
      console.error('Erro ao conectar com n8n:', error);
      
      toast({
        title: "Erro de Conexão",
        description: "Não foi possível conectar com o assistente. Tente novamente.",
        variant: "destructive",
      });
      
      return 'Desculpe, estou com problemas de conexão no momento. Por favor, tente novamente ou entre em contato diretamente: luccammiranda@gmail.com';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

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

  // --- O RESTANTE DO CÓDIGO É O SEU CÓDIGO COM A UI BONITA ---
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
        
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              {!message.isBot && <div className="w-8 h-8 rounded-full bg-portfolio-600 flex items-center justify-center flex-shrink-0 text-white"><User size={16} /></div>}
              {message.isBot && <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-gray-600"><Gem size={16} /></div>}
              
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-portfolio-600 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
             <div className="flex items-start gap-3 justify-start">
               <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-gray-600"><Gem size={16} /></div>
               <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[80%]">
                 <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
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
