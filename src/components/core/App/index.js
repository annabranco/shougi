import React from 'react';
import BoardHandler from '../../containers/BoardHandler';
import ErrorBoundary from '../ErrorBoundary';
import MainArea from '../../containers/MainArea';

const App = () => {
  return (
    <ErrorBoundary>
      <MainArea>
        <BoardHandler />
      </MainArea>
    </ErrorBoundary>
  );
};

export default App;
