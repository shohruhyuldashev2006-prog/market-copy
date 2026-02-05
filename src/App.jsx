import React from 'react';
import Header from './layout/header/header';
import Page1 from './layout/main/Page1';
import './App.css';
import Page2 from './layout/main/Page2';
import Card from './layout/main/card';
import Card2 from './layout/main/card2';
import Footer from './layout/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Page1 />

      <div>
        <Page2 />
      </div>
    </div>
  );
}

export default App;
