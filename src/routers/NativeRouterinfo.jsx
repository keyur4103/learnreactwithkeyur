import React from "react";

function NativeRouterinfo() {
  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React from "react";
import { NativeRouter as Router, Route, Switch } from "react-router-native";

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
      <h2 className="text-lg font-bold mb-2">What is NativeRouter?</h2>
      <div>
        <p>
          In React Native, <code>&lt;NativeRouter&gt;</code> is a type of router
          component provided by the React Router Native library. It's
          specifically designed for use in React Native applications.
        </p>
        <br />
        <p>
          The NativeRouter component is similar to the BrowserRouter component
          in web applications but is tailored to work with React Native's
          navigation system. It enables you to define routes and handle
          navigation within your React Native app.
        </p>
        <br />
        <p>
          When you use <code>&lt;NativeRouter&gt;</code> in your application,
          you're essentially setting up the routing infrastructure for your
          React Native app, allowing you to navigate between different screens
          and components seamlessly.
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
import { NativeRouter as Router, Route, Switch } from "react-router-native";

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

export default NativeRouterinfo;
