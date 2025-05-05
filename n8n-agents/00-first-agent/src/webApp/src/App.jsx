import React from 'react'
import HelloWorld from './components/HelloWorld'
import './App.css'
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';


const App = () => {

	useEffect(() => {
		createChat({
			webhookUrl: 'http://localhost:5678/webhook/8e7ebd71-061b-44a8-95f9-91e792b6a764/chat'
		});

    

	}, []);

	return (
    <div className="App">
      <HelloWorld />
    </div>);
};



export default App