import React, { useState, useEffect } from 'react';

const ExampleCounter = () => {
  const [count, setCount] = useState(0);

  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('componentDidMount componentDidUpdate');
    
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  );
};

export default ExampleCounter;
