import React from 'react';
 
const BuggyComponent = () => {
  // throw new Error('I crashed!');
  return <div>This will not be displayed.</div>;
};
 
export default BuggyComponent;