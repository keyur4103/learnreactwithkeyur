import React, { useState, useLayoutEffect } from "react";

function UseLayoutEffectInfo() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  // useLayoutEffect runs synchronously after DOM mutations but before the browser updates the screen
  useLayoutEffect(() => {
    // Change background color after rendering
    setBackgroundColor("lightblue");
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // Function to handle button click and change background color
  const handleClick = () => {
    setBackgroundColor("lightgreen");
  };
  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React, { useState, useLayoutEffect } from "react";

function UseLayoutEffectInfo() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  // useLayoutEffect runs synchronously after DOM mutations but before the browser updates the screen
  useLayoutEffect(() => {
    // Change background color after rendering
    setBackgroundColor("lightblue");
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // Function to handle button click and change background color
  const handleClick = () => {
    setBackgroundColor("lightgreen");
  };

  return (
    <div style={{ minHeight: "200px", backgroundColor }}>
      <h2>useLayoutEffect</h2>
      <p>
        The useLayoutEffect hook is similar to useEffect, but it fires synchronously after all DOM mutations.
        It is useful for tasks that require DOM measurement or need to perform changes before browser repaint.
      </p>
      <button onClick={handleClick}>Change Background</button>
    </div>
  );
}

export default UseLayoutEffectInfo;
`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Code copied to clipboard!");
  };
  return (
    <div style={{ minHeight: "200px", backgroundColor }}>
      <h2>useLayoutEffect</h2>
      <p>
        The useLayoutEffect hook is similar to useEffect, but it fires
        synchronously after all DOM mutations. It is useful for tasks that
        require DOM measurement or need to perform changes before browser
        repaint.
      </p>
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Change Background
      </button>
      <br />
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={copyCode}
      >
        Copy Code
      </button>
    </div>
  );
}

export default UseLayoutEffectInfo;
