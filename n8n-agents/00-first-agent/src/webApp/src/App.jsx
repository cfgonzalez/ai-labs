import React from 'react'
import HelloWorld from './components/HelloWorld'
import './App.css'
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';


const App = () => {

	useEffect(() => {
		createChat({
			webhookUrl: 'http://localhost:5678/webhook/e4808945-3828-486c-a47b-b6056b91a8cd/chat'
		});

    

	}, []);

	return (
    <div className="App">
      <HelloWorld />
    </div>);
};



export default App