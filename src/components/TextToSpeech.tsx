'use client';
import { useState } from 'react';
import axios from 'axios';

export default function TextToSpeech() {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const generateSpeech = async () => {
    const response = await axios.post('/api/tts', { text });
    setAudioUrl(response.data.audioUrl);
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full border rounded p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={generateSpeech} className="bg-purple-500 text-white p-2 mt-2">Generate</button>
      {audioUrl && <audio controls src={audioUrl} className="mt-4" />}
    </div>
  );
}
