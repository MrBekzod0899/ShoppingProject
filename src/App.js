import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import React from 'react';
import ContextProvider from './context';
import MainContextProvider from './MainContext';

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Header />
            <ContextProvider>
              <Main/>
            </ContextProvider>
          <Footer/>
      </MainContextProvider>
       
    </div>
  );
}

export default App;
