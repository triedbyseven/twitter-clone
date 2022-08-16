import React from 'react';
import './App.css';
import Containers from './components/containers';
import Cards from './components/cards';

const App = () => {
  return (
    <div className="App">
      <Containers.Home>
        <Containers.Feed>
          <Cards.Feed />
        </Containers.Feed>
      </Containers.Home>
    </div>
  );
};

export default App;
