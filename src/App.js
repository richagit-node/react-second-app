import React from 'react';
import ErrorBoundary from './components/BuggyComponent';
import BuggyComponent from './components/BuggyComponent';
 
const App = () => {
  return (
    <div>
      <h1>React Error Boundary Demo</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
};
 
export default App;
 
 