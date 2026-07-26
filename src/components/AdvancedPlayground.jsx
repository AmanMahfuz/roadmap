import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  HelpCircle, 
  Eye, 
  EyeOff
} from 'lucide-react';

export default function AdvancedPlayground({ 
  starterCode = '', 
  expectedKeywords = [], 
  hintText = '', 
  solutionCode = '', 
  onTaskComplete 
}) {
  const [code, setCode] = useState(starterCode);
  const [outputHtml, setOutputHtml] = useState('');
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [activePaneTab, setActivePaneTab] = useState('preview');
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    setCode(starterCode);
    runCode(starterCode);
  }, [starterCode]);

  const runCode = (currentCode) => {
    setConsoleLogs([]);

    let fullDoc = currentCode;
    if (!currentCode.includes('<!DOCTYPE') && !currentCode.includes('<html') && !currentCode.includes('<style')) {
      fullDoc = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 16px; margin: 0; }
            </style>
          </head>
          <body>
            <div id="root"></div>
            <script>
              const logsArr = [];
              const originalLog = console.log;
              const originalErr = console.error;
              
              console.log = function(...args) {
                originalLog(...args);
                window.parent.postMessage({ type: 'CONSOLE_LOG', data: '> ' + args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ') }, '*');
              };

              console.error = function(...args) {
                originalErr(...args);
                window.parent.postMessage({ type: 'CONSOLE_LOG', data: '❌ ' + args.join(' ') }, '*');
              };

              try {
                ${currentCode}
              } catch(err) {
                console.error('Runtime Error: ' + err.message);
              }
            </script>
          </body>
        </html>
      `;
    }

    setOutputHtml(fullDoc);

    if (expectedKeywords && expectedKeywords.length > 0) {
      const missing = expectedKeywords.filter(kw => !currentCode.toLowerCase().includes(kw.toLowerCase()));
      if (missing.length === 0) {
        setFeedback({ type: 'success', text: 'Great job! All required syntax keywords are present! 🎉' });
        if (onTaskComplete) onTaskComplete();
      } else {
        setFeedback({ type: 'warning', text: `Missing syntax keywords: ${missing.join(', ')}` });
      }
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'CONSOLE_LOG') {
        setConsoleLogs(prev => [...prev, event.data.data]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="adv-playground-wrapper">
      {/* Editor Top Bar */}
      <div className="adv-toolbar">
        <div className="toolbar-left">
          <div className="mac-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="editor-title">DevQuik Interactive IDE</span>
        </div>

        <div className="toolbar-right">
          <button onClick={() => setShowHint(!showHint)} className="btn-hint">
            <HelpCircle size={14} /> {showHint ? 'Hide Hint' : 'Hint'}
          </button>

          {solutionCode && (
            <button onClick={() => setShowSolution(!showSolution)} className="btn-solution">
              {showSolution ? <EyeOff size={14} /> : <Eye size={14} />} {showSolution ? 'Hide Solution' : 'Solution'}
            </button>
          )}

          <button onClick={() => setCode(starterCode)} className="btn-secondary-sm">
            <RotateCcw size={14} /> Reset
          </button>

          <button onClick={() => runCode(code)} className="btn-primary-sm">
            <Play size={14} /> Run Code
          </button>
        </div>
      </div>

      {/* Hints & Solution Drawers */}
      {showHint && (
        <div className="drawer-box hint-drawer">
          💡 <strong>Hint:</strong> {hintText || 'Check HTML tags and syntax carefully.'}
        </div>
      )}

      {showSolution && solutionCode && (
        <div className="drawer-box solution-drawer">
          🔑 <strong>Reference Solution:</strong>
          <pre><code>{solutionCode}</code></pre>
        </div>
      )}

      {/* Main Split Grid */}
      <div className="adv-workspace-grid">
        {/* Editor Side */}
        <div className="adv-editor-pane">
          <div className="pane-title-bar">📝 Code Editor</div>
          <textarea
            className="adv-textarea"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              runCode(e.target.value);
            }}
            placeholder="Type your code here..."
            spellCheck="false"
          />
        </div>

        {/* Output & Console Side */}
        <div className="adv-output-pane">
          <div className="output-pane-tabs">
            <button 
              className={`pane-tab ${activePaneTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActivePaneTab('preview')}
            >
              🖥️ Live Output
            </button>
            <button 
              className={`pane-tab ${activePaneTab === 'console' ? 'active' : ''}`}
              onClick={() => setActivePaneTab('console')}
            >
              <Terminal size={14} /> Console {consoleLogs.length > 0 ? `(${consoleLogs.length})` : ''}
            </button>
          </div>

          <div className="pane-content-view">
            {activePaneTab === 'preview' ? (
              <iframe
                title="live-output-preview"
                className="adv-preview-iframe"
                srcDoc={outputHtml}
                sandbox="allow-scripts"
              />
            ) : (
              <div className="console-output-box">
                {consoleLogs.length === 0 ? (
                  <div className="console-empty">No console log output yet...</div>
                ) : (
                  consoleLogs.map((logLine, idx) => (
                    <div key={idx} className="console-line">{logLine}</div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Validation Feedback Bar */}
      {feedback && (
        <div className={`adv-feedback-bar ${feedback.type}`}>
          {feedback.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{feedback.text}</span>
        </div>
      )}
    </div>
  );
}
