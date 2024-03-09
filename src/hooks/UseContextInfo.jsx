import React, { useContext } from "react";

const UseContextInfo = () => {
  // Create a context
  const ThemeContext = React.createContext("light");

  // useContext example
  const theme = useContext(ThemeContext);

  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React, { useContext } from "react";

const UseContextInfo = () => {
  // Create a context
  const ThemeContext = React.createContext("light");

  // useContext example
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 className="text-lg font-bold mb-2">useContext Hook</h2>
        <p>
          The useContext hook is used to consume context within a functional
          component.
        </p>
        <p>Example:</p>
        <p>Theme: {theme}</p>
      </div>
      <br />
      <div className="code"></div>
    </>
  );
};

export default UseContextInfo;`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Code copied to clipboard!");
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 className="text-lg font-bold mb-2">useContext Hook</h2>
        <p>
          The useContext hook is used to consume context within a functional
          component.
        </p>
        <p>Example:</p>
        <p>Theme: {theme}</p>
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
          {`import React, { useContext } from "react";

const UseContextInfo = () => {
  // Create a context
  const ThemeContext = React.createContext("light");

  // useContext example
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 className="text-lg font-bold mb-2">useContext Hook</h2>
        <p>
          The useContext hook is used to consume context within a functional
          component.
        </p>
        <p>Example:</p>
        <p>Theme: {theme}</p>
      </div>
      <br />
      <div className="code"></div>
    </>
  );
};

export default UseContextInfo;`}
        </code>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={copyCode}
      >
        Copy Code
      </button>
    </>
  );
};

export default UseContextInfo;
