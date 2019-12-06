import React from 'react';
import BoardHandler from '../../containers/BoardHandler';
import ErrorBoundary from '../ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <BoardHandler />
    </ErrorBoundary>
  );
};

export default App;
