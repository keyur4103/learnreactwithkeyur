import React, { useState, useMemo } from "react";

// Component using useMemo
function UseMemoInfo() {
  // State to store a count
  const [count, setCount] = useState(0);

  // Function to calculate the square of the count
  const calculateSquare = (value) => {
    console.log("Calculating square...");
    return value * value;
  };

  // Memoized result of calculating square
  const memoizedSquare = useMemo(() => {
    return calculateSquare(count);
  }, [count]); // Recalculate only when count changes

  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React, { useState, useMemo } from 'react';

// Component using useMemo
function UseMemoInfo() {
  // State to store a count
  const [count, setCount] = useState(0);

  // Function to calculate the square of the count
  const calculateSquare = (value) => {
    console.log('Calculating square...');
    return value * value;
  };

  // Memoized result of calculating square
  const memoizedSquare = useMemo(() => {
    return calculateSquare(count);
  }, [count]); // Recalculate only when count changes

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>
        {/* Button to increment count */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </p>
      <p>
        {/* Display the square */}
        <strong>Square:</strong> {memoizedSquare}
      </p>
      <div>
        <h3>Information about useMemo:</h3>
        <p>
          <strong>Purpose:</strong> The useMemo hook is used to memoize the result of a computation so that it's only recalculated when its dependencies change, optimizing performance in React.
        </p>
        <p>
          <strong>Advantages:</strong> Reduces unnecessary recalculations and improves performance by memoizing expensive computations. Useful for optimizing performance in scenarios where computation results are used in rendering.
        </p>
        <p>
          <strong>Considerations:</strong> Only use useMemo when performance optimizations are needed, as it adds complexity to the code. Be cautious with dependencies in the dependency array to prevent unintentional bugs.
        </p>
      </div>
    </div>
  );
}

export default UseMemoInfo;
`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Code copied to clipboard!");
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <p>
        <strong>Square:</strong> {memoizedSquare}
      </p>
      <div>
        <h3>Information about useMemo:</h3>
        <p>
          <strong>Purpose:</strong> The useMemo hook is used to memoize the
          result of a computation so that it's only recalculated when its
          dependencies change, optimizing performance in React.
        </p>
        <p>
          <strong>Advantages:</strong> Reduces unnecessary recalculations and
          improves performance by memoizing expensive computations. Useful for
          optimizing performance in scenarios where computation results are used
          in rendering.
        </p>
        <p>
          <strong>Considerations:</strong> Only use useMemo when performance
          optimizations are needed, as it adds complexity to the code. Be
          cautious with dependencies in the dependency array to prevent
          unintentional bugs.
        </p>
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

export default UseMemoInfo;
