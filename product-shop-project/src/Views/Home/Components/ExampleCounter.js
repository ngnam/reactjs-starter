import React, { useState } from 'react';

const ExampleCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  );
};

export default ExampleCounter;
