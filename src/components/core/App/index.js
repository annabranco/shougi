import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import MainArea from '../../containers/MainArea';

const App = () => {
  return (
    <ErrorBoundary>
      <MainArea />
    </ErrorBoundary>
  );
};

export default App;
