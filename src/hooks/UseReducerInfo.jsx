import React, { useReducer } from "react";

// Define initial state and reducer function
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unsupported action");
  }
}

const copyCode = () => {
  const el = document.createElement("textarea");
  el.value = `import React, { useReducer } from 'react';

// Define initial state and reducer function
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unsupported action');
  }
}

// Component using useReducer
function UseReducerInfo() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer Hook Example</h2>
      <p>
        The <code>useReducer</code> hook is used to manage state in functional components with complex logic.
      </p>
      <p>
        In this example, we have a simple counter that demonstrates the use of <code>useReducer</code>.
        The initial state is an object with a <code>count</code> property set to <code>0</code>.
        We define a <code>reducer</code> function that receives the current state and an action,
        and returns the new state based on the action type.
      </p>
      <p>
        The component renders the current count and provides buttons to increment, decrement, and reset the count.
        Each button click dispatches an action to the reducer, which updates the state accordingly.
      </p>
      <div>
        <h3>Count: {state.count}</h3>
        {/* Dispatch actions to update state */}
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
}

export default UseReducerInfo;
`;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("Code copied to clipboard!");
};

// Component using useReducer
function UseReducerInfo() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer Hook Example :</h2>
      <p>
        The <code>useReducer</code> hook is used to manage state in functional
        components with complex logic.
      </p>
      <br />
      <p>
        In this example, we have a simple counter that demonstrates the use of
        <code>useReducer</code>. The initial state is an object with a
        <code>count</code> property set to <code>0</code>. We define a
        <code>reducer</code> function that receives the current state and an
        action, and returns the new state based on the action type.
      </p>
      <br />
      <p>
        The component renders the current count and provides buttons to
        increment, decrement, and reset the count. Each button click dispatches
        an action to the reducer, which updates the state accordingly.
      </p>
      <br />
      <div>
        <h3>Count: {state.count}</h3>
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        &nbsp;
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        &nbsp;
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      <br />
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
          {`import React, { useReducer } from 'react';

// Define initial state and reducer function
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unsupported action');
  }
}

// Component using useReducer
function UseReducerInfo() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer Hook Example</h2>
      <p>
        The <code>useReducer</code> hook is used to manage state in functional components with complex logic.
      </p>
      <p>
        In this example, we have a simple counter that demonstrates the use of <code>useReducer</code>.
        The initial state is an object with a <code>count</code> property set to <code>0</code>.
        We define a <code>reducer</code> function that receives the current state and an action,
        and returns the new state based on the action type.
      </p>
      <p>
        The component renders the current count and provides buttons to increment, decrement, and reset the count.
        Each button click dispatches an action to the reducer, which updates the state accordingly.
      </p>
      <div>
        <h3>Count: {state.count}</h3>
        {/* Dispatch actions to update state */}
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
}

export default UseReducerInfo;
`}
        </code>
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

export default UseReducerInfo;
