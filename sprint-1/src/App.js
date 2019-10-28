import React from 'react';
//import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ComponentOne from './components/ComponentOne';

function App() {
  return [
    <Header/>,
    <ComponentOne/>,
    <Footer/>,
  ]
}

export default App;
