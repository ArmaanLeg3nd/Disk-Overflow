import React, { useState } from 'react';
import './tta.css'; // Assuming you have a CSS file named "App.css" for styling
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://large-text-to-speech.p.rapidapi.com/tts',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '3d41d2d805mshee4402a6e328606p15fd97jsn84093fcea113',
    'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com'
  },
  data: {
    text: ''
  }
};

const convertTextToAudio = async (text) => {
    options.data.text = text;
    try {
      const response = await fetch(options.url, {
        method: options.method,
        headers: options.headers,
        body: JSON.stringify(options.data)
      });
      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        throw new Error('Audio conversion failed');
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };
   

const Tta = () => {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleConvertToAudio = async () => {
    const convertedAudioUrl = await convertTextToAudio(text);
    setAudioUrl(convertedAudioUrl);
  };

  return (
    <div className="app-container">
      <div className="text-input-container">
        <textarea
          className="text-input"
          placeholder="Enter text to convert into audio..."
          value={text}
          onChange={handleTextChange}
        />
        <button className="convert-btn" onClick={handleConvertToAudio}>
          Convert to Audio
        </button>
      </div>
      {audioUrl && (
        <div className="audio-container">
          <audio controls src={audioUrl} />
        </div>
      )}
    </div>
  );
};

export default Tta;
