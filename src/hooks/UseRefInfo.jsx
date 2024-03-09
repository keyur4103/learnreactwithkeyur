import React, { useRef } from "react";

// Component using useRef
function UseRefInfo() {
  // Create a ref object
  const inputRef = useRef(null);

  // Function to focus the input element
  const focusInput = () => {
    inputRef.current.focus();
  };

  const copyCode = () => {
    const el = document.createElement("textarea");
el.value = `import React, { useRef } from 'react';

// Component using useRef
function UseRefInfo() {
  // Create a ref object
  const inputRef = useRef(null);

  // Function to focus the input element
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Input element with ref */}
      <input type="text" ref={inputRef} />
      <br />
      {/* Button to focus the input element */}
      <button onClick={focusInput}>Focus Input</button>
      <div>
        <h3>Information about useRef:</h3>
        <p>
          <strong>Purpose:</strong> The useRef hook is used to create a mutable ref object that can hold a reference to a DOM element or a value across renders.
        </p>
        <p>
          <strong>Usage:</strong> Use useRef to access DOM elements, manage focus, measure elements, or store mutable values.
        </p>
        <p>
          <strong>Advantages:</strong> useRef allows access to DOM nodes directly and persists values across renders without causing re-renders.
        </p>
        <p>
          <strong>Considerations:</strong> Be cautious when using useRef to modify state or trigger side effects, as it doesn't cause re-renders on its own.
        </p>
      </div>
    </div>
  );
}

export default UseRefInfo;
`; document.body.appendChild(el);
el.select();
document.execCommand("copy");
document.body.removeChild(el);
alert("Code copied to clipboard!");
}

  return (
    <div>
      {/* Input element with ref */}
      <input
        className="border border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        placeholder="Enter text..."
        type="text"
        ref={inputRef}
      />
      <br />
      {/* Button to focus the input element */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={focusInput}
      >
        Focus Input
      </button>
      <div>
        <h3>Information about useRef:</h3>
        <p>
          <strong>Purpose:</strong> The useRef hook is used to create a mutable
          ref object that can hold a reference to a DOM element or a value
          across renders.
        </p>
        <p>
          <strong>Usage:</strong> Use useRef to access DOM elements, manage
          focus, measure elements, or store mutable values.
        </p>
        <p>
          <strong>Advantages:</strong> useRef allows access to DOM nodes
          directly and persists values across renders without causing
          re-renders.
        </p>
        <p>
          <strong>Considerations:</strong> Be cautious when using useRef to
          modify state or trigger side effects, as it doesn't cause re-renders
          on its own.
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

export default UseRefInfo;
