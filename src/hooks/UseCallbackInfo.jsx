import React, { useState, useCallback } from "react";

// Component using useCallback
function UseCallbackInfo() {
  // State to store a count
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // useCallback to memoize the increment function
  const memoizedIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means the function doesn't depend on any external values
const copyCode = () => {

    const el = document.createElement("textarea");
    el.value = `import React, { useState, useCallback } from 'react';

// Component using useCallback
function UseCallbackInfo() {
  // State to store a count
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // useCallback to memoize the increment function
  const memoizedIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means the function doesn't depend on any external values

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>
        {/* Button to increment count */}
        <button onClick={increment}>Increment (Not memoized)</button>
      </p>
      <p>
        {/* Button to increment count using memoized function */}
        <button onClick={memoizedIncrement}>Increment (Memoized)</button>
      </p>
      <div>
        <h3>Information about useCallback:</h3>
        <p>
          <strong>Purpose:</strong> The useCallback hook is used to memoize functions so that they are not recreated on every render, especially useful for optimizing performance in React.
        </p>
        <p>
          <strong>Advantages:</strong> Improves performance by preventing unnecessary re-renders caused by recreating functions. Useful for optimizing performance in scenarios where functions are passed as props to child components.
        </p>
        <p>
          <strong>Considerations:</strong> Only use useCallback if performance optimizations are needed, as it adds complexity to the code. Be cautious with dependencies in the dependency array to prevent unintentional bugs.
        </p>
      </div>
    </div>
  );
}

export default UseCallbackInfo;
`;
document.body.appendChild(el);
el.select();
document.execCommand("copy");
document.body.removeChild(el);
alert("Code copied to clipboard!");
}
  return (
    <div>
      <h2>Count: {count}</h2>
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={increment}
      >
        Increment (Not memoized)
      </button>
      <br />
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={memoizedIncrement}
      >
        Increment (Memoized)
      </button>
      <div>
        <h3>Information about useCallback:</h3>
        <p>
          <strong>Purpose:</strong> The useCallback hook is used to memoize
          functions so that they are not recreated on every render, especially
          useful for optimizing performance in React.
        </p>
        <p>
          <strong>Advantages:</strong> Improves performance by preventing
          unnecessary re-renders caused by recreating functions. Useful for
          optimizing performance in scenarios where functions are passed as
          props to child components.
        </p>
        <p>
          <strong>Considerations:</strong> Only use useCallback if performance
          optimizations are needed, as it adds complexity to the code. Be
          cautious with dependencies in the dependency array to prevent
          unintentional bugs.
        </p>
      </div>
      <div
        className="code "
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <code>
          {`import React, { useState, useCallback } from 'react';

// Component using useCallback
function UseCallbackInfo() {
  // State to store a count
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // useCallback to memoize the increment function
  const memoizedIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means the function doesn't depend on any external values

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>
        {/* Button to increment count */}
        <button onClick={increment}>Increment (Not memoized)</button>
      </p>
      <p>
        {/* Button to increment count using memoized function */}
        <button onClick={memoizedIncrement}>Increment (Memoized)</button>
      </p>
      <div>
        <h3>Information about useCallback:</h3>
        <p>
          <strong>Purpose:</strong> The useCallback hook is used to memoize functions so that they are not recreated on every render, especially useful for optimizing performance in React.
        </p>
        <p>
          <strong>Advantages:</strong> Improves performance by preventing unnecessary re-renders caused by recreating functions. Useful for optimizing performance in scenarios where functions are passed as props to child components.
        </p>
        <p>
          <strong>Considerations:</strong> Only use useCallback if performance optimizations are needed, as it adds complexity to the code. Be cautious with dependencies in the dependency array to prevent unintentional bugs.
        </p>
      </div>
    </div>
  );
}

export default UseCallbackInfo;
`}
        </code>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={copyCode}
      >
        Copy Code
      </button>
    </div>
  );
}

export default UseCallbackInfo;
