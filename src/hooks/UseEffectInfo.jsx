import React, { useState, useEffect } from "react";

const UseEffectInfo = () => {
  // State to store the count
  const [count, setCount] = useState(0);

  // useEffect example
  useEffect(() => {
    // Update the document title with the current count
    document.title = `Count: ${count}`;
    // Cleanup function
    return () => {
      document.title = "React App"; // Reset the title when component unmounts
    };
  }, [count]); // Run the effect only when count changes

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">useEffect Hook</h2>
      <p>
        The useEffect hook is used to perform side effects in functional
        components.
      </p>
      <p>Example:</p>
      <p>Count: {count}</p>
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default UseEffectInfo;
