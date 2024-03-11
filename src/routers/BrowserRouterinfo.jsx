import React from "react";

function BrowserRouterinfo() {
  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React from "react";
          import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <h2 className="text-lg font-bold mb-2">What is BrowserRouter?</h2>
      <div>
        <p>
          In React, <code>&lt;BrowserRouter&gt;</code> is a type of router
          component provided by the React Router library. It's commonly used in
          web applications to enable client-side routing.
        </p>
        <br />
        <p>
          The BrowserRouter component utilizes the HTML5 history API to keep the
          UI in sync with the URL in the browser address bar. This allows for a
          more fluid and responsive user experience by enabling navigation
          without full page reloads.
        </p>
        <br />
        <p>
          When you use <code>&lt;BrowserRouter&gt;</code> in your application,
          you're essentially creating a new router instance that listens for
          changes to the URL and renders the appropriate components based on the
          current URL path.
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
          import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

export default BrowserRouterinfo;
