import React, { useState, useEffect } from 'react';
 
const useErrorBoundary = () => {
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const handleError = (event) => {
      setError(event.error);
    };
 
    window.addEventListener('error', handleError);
 
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);
  return error;
};
 
const ErrorBoundary = ({ children }) => {
  const error = useErrorBoundary();
 
  if (error) {
    return <h1>Something went wrong.</h1>;
  }
  return children;
};
 
export default ErrorBoundary;
 
 