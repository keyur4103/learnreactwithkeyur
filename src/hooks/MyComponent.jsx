import React from "react";
import useAsync from "./useAsync"; // Import the useAsync hook

// Example async function to simulate fetching data
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const copyCode = () => {
  const el = document.createElement("textarea");
  el.value = `import { useState, useEffect } from 'react';

function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (immediate) {
      execute();
    }

    async function execute() {
      setStatus('pending');
      setData(null);
      setError(null);
      try {
        const result = await asyncFunction();
        setData(result);
        setStatus('success');
      } catch (error) {
        setError(error);
        setStatus('error');
      }
    }
  }, [asyncFunction, immediate]);

  return { status, data, error };
}

export default useAsync;

//another file mycomponent.jsx

import React from 'react';
import useAsync from './useAsync'; // Import the useAsync hook

// Example async function to fetch posts
async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

function MyComponent() {
  const { status, data, error } = useAsync(fetchPosts);

  if (status === 'idle' || status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  if (status === 'success') {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyComponent;

`;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("Code copied to clipboard!");
};

function MyComponent() {
  const { status, data, error } = useAsync(fetchData);

  if (status === "idle" || status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  if (status === "success") {
    return (
      <>
        <div>Data: {JSON.stringify(data)}</div>;
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={copyCode}
        >
          Copy Code
        </button>
        ;
      </>
    );
  }
}

export default MyComponent;
