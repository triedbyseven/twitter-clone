import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screens from './components/screens';
import Providers from './contexts';

const App = (): React.ReactElement => {
  const HomeScreenElement: React.ReactElement = (
    <Providers.ReplyOverlay>
        <Providers.Tweets>
          <Screens.Home />
      </Providers.Tweets> 
    </Providers.ReplyOverlay> 
  )

  const DetailScreenElement: React.ReactElement = (
    <Providers.ReplyOverlay>
      <Providers.Tweets>
        <Screens.Detail />
      </Providers.Tweets>
    </Providers.ReplyOverlay> 
  );

  return (
    <Router>
      <Routes>
        <Route 
          path='/home'
          element={HomeScreenElement} 
        />
        <Route
          path='/home/detail/:id'
          element={DetailScreenElement}
        />
      </Routes>
    </Router>
  );
};

export default App;
