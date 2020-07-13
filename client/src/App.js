import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Main from './components/main';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Main />
    </React.Fragment>
  );
}

export default App;
