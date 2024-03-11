import React from "react";

function HashRouterinfo() {
  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React from "react";
          import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
      <h2 className="text-lg font-bold mb-2">What is HashRouter?</h2>
      <div>
        <p>
          In React, <code>&lt;HashRouter&gt;</code> is a type of router
          component provided by the React Router library. It's commonly used in
          web applications to enable client-side routing with hash-based
          navigation.
        </p>
        <br />
        <p>
          The HashRouter component utilizes the hash portion of the URL
          (everything after the "#") to determine the route. This approach is
          often used in single-page applications (SPAs) and works well for
          applications that do not have server-side routing configured.
        </p>
        <br />
        <p>
          When you use <code>&lt;HashRouter&gt;</code> in your application,
          you're essentially creating a new router instance that listens for
          changes to the URL hash and renders the appropriate components based
          on the current hash value.
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
          import { HashRouter as Router, Route, Switch } from "react-router-dom";

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

export default HashRouterinfo;
