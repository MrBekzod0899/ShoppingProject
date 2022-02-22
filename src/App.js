import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import React from 'react';
import ContextProvider from './context';

function App() {
  return (
    <div className="App">
        <Header />
          <ContextProvider>
            <Main/>
          </ContextProvider>
        <Footer/>
    </div>
  );
}

export default App;
