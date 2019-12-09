import React from 'react';
import GameHandler from '../../containers/GameHandler';
import ErrorBoundary from '../ErrorBoundary';
import MainArea from '../../containers/MainArea';

const App = () => {
  return (
    <ErrorBoundary>
      <MainArea>
        <GameHandler />
      </MainArea>
    </ErrorBoundary>
  );
};

export default App;
