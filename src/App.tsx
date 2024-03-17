import React from 'react';
import { NavBar } from "./components/NavBar";
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.scss'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
