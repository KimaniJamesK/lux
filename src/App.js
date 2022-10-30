import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Code from './components/Code'

function App() {
  return (
    <div className="App">
      <Greet />
      <Code/>
    </div>
  );
}

export default App;
