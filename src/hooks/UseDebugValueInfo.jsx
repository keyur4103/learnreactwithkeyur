import React, { useDebugValue, useState } from "react";

// Custom hook to toggle boolean value
function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  // Use useDebugValue to display custom label in React DevTools
  useDebugValue(value ? "ON" : "OFF");

  const toggle = () => setValue(!value);

  return [value, toggle];
}

// Example component using the custom hook
function UseDebugValueInfo() {
  const [isOn, toggleIsOn] = useToggle(false);

  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React, { useDebugValue, useState } from 'react';

// Custom hook to toggle boolean value
function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  // Use useDebugValue to display custom label in React DevTools
  useDebugValue(value ? 'ON' : 'OFF');

  const toggle = () => setValue(!value);

  return [value, toggle];
}

// Example component using the custom hook
function UseDebugValueInfo() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div>
      <h2>useDebugValue</h2>
      <p>
        The useDebugValue hook is used to display custom labels for custom hooks in React DevTools.
      </p>
      <p>
        Click the button to toggle the value:
        <button onClick={toggleIsOn}>{isOn ? 'ON' : 'OFF'}</button>
      </p>
    </div>
  );
}

export default UseDebugValueInfo;
`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Code copied to clipboard!");
  };

  return (
    <div>
      <h2>useDebugValue</h2>
      <p>
        The useDebugValue hook is used to display custom labels for custom hooks
        in React DevTools.
      </p>
      <p>
        Click the button to toggle the value:
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleIsOn}
        >
          {isOn ? "ON" : "OFF"}
        </button>
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={copyCode}
      >
        Copy Code
      </button>
    </div>
  );
}

export default UseDebugValueInfo;
