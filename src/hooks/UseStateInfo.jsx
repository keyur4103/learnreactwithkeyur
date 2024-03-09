import React, { useState } from "react";

const UseStateInfo = () => {
  // useState example
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">useState Hook</h2>
      <p>
        The useState hook is a built-in hook in React used for adding state to
        functional components.
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

export default UseStateInfo;
