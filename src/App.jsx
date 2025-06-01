
import React, { useState } from 'react';
import StartScreen from './components/StartScreen';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [config, setConfig] = useState({});

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!quizStarted ? (
        <StartScreen onStart={(cfg) => { setConfig(cfg); setQuizStarted(true); }} />
      ) : (
        <div>QUIZ INIZIATO con {config.count} domande</div>
      )}
    </div>
  );
}

export default App;
