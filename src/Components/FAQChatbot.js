import React, { useState, useEffect, useRef } from 'react';

const FAQChatbot = ({ faqsPath, apiKey }) => {
  const [faqs, setFaqs] = useState([]);
  const [chatLog, setChatLog] = useState([]); // { sender: 'user'|'bot', text }
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const minScore = 0.6;

  // Scroll chat to bottom when chatLog changes
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatLog]);

  useEffect(() => {
    // Load FAQs JSON on mount
    fetch(faqsPath)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch FAQs');
        return res.json();
      })
      .then(setFaqs)
      .catch((err) => {
        console.error('Failed to load FAQs:', err);
        setFaqs([]);
      });
  }, [faqsPath]);

  const normalize = (text) =>
    text.toLowerCase().replace(/[^\w\s]/g, '').trim();

  const similarity = (a, b) => {
    const aWords = new Set(normalize(a).split(/\s+/));
    const bWords = new Set(normalize(b).split(/\s+/));
    const common = [...aWords].filter((w) => bWords.has(w)).length;
    if (common === 0) return 0;
    return common / ((aWords.size + bWords.size) / 2);
  };

  const findMatchingAnswer = (question) => {
    let bestScore = 0;
    let bestAnswer = null;
    for (const { question: q, answer } of faqs) {
      const score = similarity(question, q);
      if (score > bestScore) {
        bestScore = score;
        bestAnswer = answer;
      }
    }
    return bestScore >= minScore ? bestAnswer : null;
  };

  const queryPerplexity = async (question) => {
    try {
      const res = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          model: 'mistral-7b-instruct',
          messages: [{ role: 'user', content: question }],
        }),
      });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      return data?.choices?.[0]?.message?.content || "Sorry, I don't have an answer.";
    } catch (e) {
      console.error('Perplexity API error:', e);
      return "I'm having trouble answering that right now.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setChatLog((log) => [...log, { sender: 'user', text: trimmed }]);
    setInput('');
    setIsLoading(true);

    let answer = findMatchingAnswer(trimmed);
    if (!answer) {
      setChatLog((log) => [...log, { sender: 'bot', text: 'Let me check that...' }]);
      answer = await queryPerplexity(trimmed);
      // Replace the "Let me check that..." message with answer
      setChatLog((log) =>
        log.map((msg) =>
          msg.text === 'Let me check that...' && msg.sender === 'bot' ? { sender: 'bot', text: answer } : msg
        )
      );
    } else {
      setChatLog((log) => [...log, { sender: 'bot', text: answer }]);
    }

    setIsLoading(false);
  };

  return (
    <>
      <style>{`
        .chatbot-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 350px;
          max-width: 90vw;
          height: 400px;
          background: #ffffff;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          font-family: 'Playfair Display', serif;
          color: #222;
          z-index: 99999;
        }
        .chatbot-header {
          padding: 16px;
          background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
          color: white;
          font-size: 20px;
          font-weight: 700;
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
          user-select: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .chatbot-log {
          flex-grow: 1;
          padding: 16px;
          overflow-y: auto;
          background: #f5f7fa;
          scrollbar-width: thin;
          scrollbar-color: #bbb transparent;
          display: flex;
          flex-direction: column;
        }
        .chatbot-log::-webkit-scrollbar {
          width: 8px;
        }
        .chatbot-log::-webkit-scrollbar-thumb {
          background-color: #bbb;
          border-radius: 4px;
        }
        .msg {
          margin-bottom: 14px;
          max-width: 75%;
          padding: 12px 16px;
          border-radius: 20px;
          white-space: pre-wrap;
          line-height: 1.4;
          font-size: 15px;
          word-wrap: break-word;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .msg.user {
          background: #007bff;
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }
        .msg.bot {
          background: #e1e4ea;
          color: #222;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }
        .input-container {
          display: flex;
          padding: 12px 16px;
          border-top: 1px solid #e0e0e0;
          background: white;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
        .input-container input[type="text"] {
          flex-grow: 1;
          font-size: 16px;
          padding: 12px 16px;
          border: 2px solid #ddd;
          border-radius: 24px;
          outline-offset: 2px;
          transition: border-color 0.3s ease;
        }
        .input-container input[type="text"]:focus {
          border-color: #007bff;
        }
        .input-container button {
          margin-left: 12px;
          background-color: #007bff;
          border: none;
          padding: 12px 20px;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          border-radius: 24px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select: none;
        }
        .input-container button:disabled {
          opacity: 0.5;
          cursor: default;
        }
        .input-container button:hover:not(:disabled) {
          background-color: #0056b3;
        }
      `}</style>

      <div className="chatbot-container" role="region" aria-label="Homestay FAQ Chatbot">
        <header className="chatbot-header">Homestay FAQ Bot</header>
        <main className="chatbot-log" aria-live="polite" aria-atomic="false" tabIndex={-1}>
          {chatLog.map(({ sender, text }, i) => (
            <div key={i} className={`msg ${sender}`}>{text}</div>
          ))}
          <div ref={chatEndRef}></div>
        </main>
        <form className="input-container" onSubmit={handleSubmit} aria-label="Ask a question form">
          <input
            type="text"
            placeholder="Ask a question..."
            aria-label="Ask a question"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            required
            autoComplete="off"
          />
          <button type="submit" disabled={isLoading}>Send</button>
        </form>
      </div>
    </>
  );
};

export default FAQChatbot;
