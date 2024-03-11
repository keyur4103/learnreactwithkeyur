import React from "react";

function MemoryRouterinfo() {
  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Code copied to clipboard!");
  };
  return (
    <>
      <h2 className="text-lg font-bold mb-2">What is MemoryRouter?</h2>
      <div>
        <p>
          In React, <code>&lt;MemoryRouter&gt;</code> is a type of router
          component provided by the React Router library. It's used for
          in-memory navigation, primarily for testing and non-browser
          environments.
        </p>
        <br />
        <p>
          The MemoryRouter component doesn't interact with the browser's URL
          directly. Instead, it stores the location and navigation history in
          memory, making it ideal for scenarios where you don't need to
          synchronize the UI with the browser's address bar.
        </p>
        <br />
        <p>
          When you use <code>&lt;MemoryRouter&gt;</code> in your application,
          you're essentially creating a router instance that manages navigation
          within the memory of your application, allowing you to simulate
          navigation and test routing logic without affecting the browser's URL.
        </p>
        <br />
        <div
          className="code"
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px",
            marginBottom: "20px",
          }}
        >{`
import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
`}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={copyCode}
        >
          Copy Code
        </button>
      </div>
    </>
  );
}

export default MemoryRouterinfo;
