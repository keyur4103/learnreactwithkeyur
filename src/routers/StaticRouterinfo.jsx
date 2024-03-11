import React from "react";

function StaticRouterinfo() {
  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React from "react";
import { StaticRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router location="/about" context={context}>
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
      <h2 className="text-lg font-bold mb-2">What is StaticRouter?</h2>
      <div>
        <p>
          In React, <code>&lt;StaticRouter&gt;</code> is a type of router
          component provided by the React Router library. It's used for
          server-side rendering and other non-browser environments where the
          router needs to match a location to a set of routes without rendering.
        </p>
        <br />
        <p>
          The StaticRouter component is primarily used in server-rendered React
          applications, such as those built with frameworks like Next.js. It
          allows you to specify the initial URL path and context for rendering
          on the server.
        </p>
        <br />
        <p>
          When you use <code>&lt;StaticRouter&gt;</code> in your application,
          you're essentially providing a static route matching mechanism that
          doesn't rely on the browser's URL. Instead, it matches the specified
          location to a set of routes and renders the appropriate components
          based on the match.
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
import { StaticRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router location="/about" context={context}>
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

export default StaticRouterinfo;
