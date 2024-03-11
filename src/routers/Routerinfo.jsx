import React from "react";

function Routerinfo() {
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
      <h2 className="text-lg font-bold mb-2">what is Router?</h2>
      <div>
        <p>
          In React, <code>&lt;Router&gt;</code> serves as a foundational
          building block for handling routing in web applications. It acts as a
          context provider, supplying routing information to other parts of the
          app.
        </p>
        <br />
        <p>
          Think of it as the central hub that manages all routing-related tasks.
          It doesn't deal directly with how routes are displayed or navigated;
          instead, it provides a common interface for other router components,
          like <code>&lt;BrowserRouter&gt;</code> for web applications or{" "}
          <code>&lt;StaticRouter&gt;</code> for server-rendered apps, to
          interact with.
        </p>
        <br />
        <p>
          So, when you use <code>&lt;Router&gt;</code> in your application,
          you're essentially setting up the infrastructure that allows your app
          to handle different routes and navigation. It's like laying down the
          groundwork that enables seamless movement between different pages or
          views within your React app.
        </p>
        <br />
        <div
          className="code "
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

export default Routerinfo;
