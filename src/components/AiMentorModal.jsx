import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, HelpCircle, MessageSquare } from 'lucide-react';

export default function AiMentorModal({ onClose }) {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'ai',
      text: "👋 Hi! I'm your DevQuik AI Mentor. Ask me anything about HTML, CSS, JavaScript, or debugging errors!"
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const quickPrompts = [
    "Why use let instead of var?",
    "Explain CSS Flexbox like I'm 10",
    "What is the Event Loop?",
    "Difference between == and ==="
  ];

  const handleSend = (textToSend) => {
    const messageText = textToSend || query;
    if (!messageText.trim()) return;

    // Add user message
    const updatedHistory = [...chatHistory, { sender: 'user', text: messageText }];
    setChatHistory(updatedHistory);
    setQuery('');
    setIsThinking(true);

    // Generate intelligent AI response
    setTimeout(() => {
      let aiReply = "Great question! ";
      const lower = messageText.toLowerCase();

      if (lower.includes('let') || lower.includes('var')) {
        aiReply += "`let` is block-scoped `{}` and prevents accidental window variable overwrites, whereas `var` is function-scoped and hoisted with `undefined`. Always prefer `const` by default and `let` when values reassign!";
      } else if (lower.includes('flexbox')) {
        aiReply += "Think of Flexbox like arranging boxes on a row shelf! `display: flex` turns on the shelf, `justify-content: center` centers items horizontally, and `align-items: center` aligns them vertically!";
      } else if (lower.includes('event loop')) {
        aiReply += "JavaScript is single-threaded. The Event Loop continuously checks if the Call Stack is empty. When empty, it pushes completed Async Callbacks/Promises from the Event Queue to the stack!";
      } else if (lower.includes('==')) {
        aiReply += "`==` checks value equality with automatic type coercion (e.g. `5 == '5'` is true). `===` checks strict equality requiring matching value AND datatype!";
      } else {
        aiReply += `To master "${messageText}", break the concept down into small experiments. Practice writing a code snippet in the Live Code Playground to test its behavior directly!`;
      }

      setChatHistory([...updatedHistory, { sender: 'ai', text: aiReply }]);
      setIsThinking(false);
    }, 600);
  };

  return (
    <div className="day-modal-overlay" onClick={onClose}>
      <div 
        className="day-modal-container max-w-xl h-[80vh] p-0 bg-white border border-indigo-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 p-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
              <Bot className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-base flex items-center">
                <span>DevQuik AI Mentor</span>
                <Sparkles className="w-3.5 h-3.5 ml-1.5 text-amber-400" />
              </h3>
              <span className="text-[10px] text-indigo-300 font-semibold block">Online • Instant Concept Explanations</span>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed font-medium ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 p-3 rounded-2xl text-xs text-slate-500 flex items-center space-x-2">
                <Bot className="w-4 h-4 text-indigo-500 animate-spin" />
                <span>AI Mentor is crafting response...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        <div className="p-2.5 bg-white border-t border-slate-200 flex gap-1.5 overflow-x-auto">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[10px] font-bold whitespace-nowrap shrink-0 border border-slate-200"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="p-3 bg-white border-t border-slate-200 flex gap-2"
        >
          <input
            type="text"
            placeholder="Ask your AI Mentor anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={!query.trim()}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
