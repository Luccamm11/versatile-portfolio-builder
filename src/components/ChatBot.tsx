'use client';

import React, { useState, useRef, useEffect } from 'react';

// Define a estrutura de uma única mensagem
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: React.FC = () => {
  // Estado para armazenar o histórico de mensagens
  const [messages, setMessages] = useState<Message[]>([]);
  // Estado para armazenar o que o usuário está digitando
  const [input, setInput] = useState('');
  // Estado para controlar o indicador de "carregando"
  const [isLoading, setIsLoading] = useState(false);
  // Referência para o final da lista de mensagens, para rolar automaticamente
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Efeito para adicionar a mensagem inicial do bot quando o componente é montado
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: 'Olá! Sou o assistente virtual do Lucca Miranda. Posso responder perguntas sobre suas habilidades, experiência e projetos. O que você gostaria de saber?',
      },
    ]);
  }, []);

  // Efeito para rolar para a mensagem mais recente
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ====================================================================================
  //  FUNÇÃO MODIFICADA PARA CONECTAR COM O N8N
  // ====================================================================================
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Não envia se o input estiver vazio
    if (!input.trim()) return;

    // Adiciona a mensagem do usuário à lista de mensagens na tela
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Limpa o campo de input e ativa o indicador de "carregando"
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    // ================== PONTO CHAVE DA INTEGRAÇÃO ==================
    //  Troque esta URL pela sua URL de PRODUÇÃO quando o workflow estiver ativado
    const n8nWebhookUrl = 'https://primary-production-37034.up.railway.app/webhook-test/chatbot-portfolio';
    // ==============================================================

    try {
      // Faz a requisição POST para o seu webhook do n8n
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Envia a mensagem do usuário no corpo da requisição
        // O n8n receberá um JSON assim: { "message": "texto do usuário" }
        body: JSON.stringify({ message: currentInput }),
      });

      if (!response.ok) {
        throw new Error(`A requisição falhou: ${response.statusText}`);
      }

      // Espera a resposta do n8n (que virá do nó "Respond to Webhook")
      const data = await response.json();

      // Assume que o n8n vai retornar um JSON como: { "reply": "resposta do bot" }
      const botMessage: Message = { role: 'assistant', content: data.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error('Falha ao conectar com o assistente n8n:', error);
      // Em caso de erro, exibe uma mensagem padrão
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Desculpe, estou com problemas de conexão no momento. Por favor, tente novamente ou entre em contato diretamente: luccammiranda@gmail.com',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      // Desativa o indicador de "carregando"
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-xl max-w-md w-full flex flex-col h-[500px]">
      <div className="bg-gray-900 p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Assistente Virtual</h2>
        <p className="text-sm text-gray-400">Pergunte sobre Lucca Miranda</p>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end gap-2 ${
                msg.role === 'user' ? 'justify-end' : ''
              }`}
            >
              <div
                className={`rounded-lg p-3 max-w-xs ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-700 text-gray-300 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2">
              <div className="rounded-lg p-3 max-w-xs bg-gray-700 text-gray-300 rounded-bl-none">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua pergunta..."
            className="flex-1 bg-gray-700 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-blue-600 rounded-full p-3 text-white hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
