import React, { useRef, useImperativeHandle, forwardRef } from "react";

function UseImperativeHandleInfo() {
  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = `import React, { useRef, useImperativeHandle, forwardRef } from "react";

function UseImperativeHandleInfo() {
  // ChildComponent
  const ChildComponent = forwardRef((props, ref) => {
    const inputRef = useRef();

    // Define methods to be exposed to the parent component using useImperativeHandle
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      customMethod: () => {
        console.log('Custom method called');
      }
    }));

    return <input ref={inputRef} />;
  });

  // ParentComponent
  function ParentComponent() {
    const childRef = useRef();

    // Handler to call child methods
    const handleClick = () => {
      childRef.current.focus(); // Call the focus method of the child component
      childRef.current.customMethod(); // Call the custom method of the child component
    };

    return (
      <div>
        <ChildComponent ref={childRef} />
        <button onClick={handleClick}>Focus Child Input</button>
      </div>
    );
  }

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <p>
        The useImperativeHandle hook customizes the instance value that is
        exposed by a ref. It is used to control what is accessible from the
        parent component when using refs. This hook is often used in conjunction
        with forwardRef to allow child components to expose certain methods or
        properties to the parent component.
      </p>
      <p>Here's an example usage:</p>
      <ParentComponent /> {/* Render ParentComponent */}
    </div>
  );
}

export default UseImperativeHandleInfo;
`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Code copied to clipboard!");
  };
  // ChildComponent
  const ChildComponent = forwardRef((props, ref) => {
    const inputRef = useRef();

    // Define methods to be exposed to the parent component using useImperativeHandle
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      customMethod: () => {
        console.log("Custom method called");
      },
    }));

    return <input ref={inputRef} />;
  });

  // ParentComponent
  function ParentComponent() {
    const childRef = useRef();

    // Handler to call child methods
    const handleClick = () => {
      childRef.current.focus(); // Call the focus method of the child component
      childRef.current.customMethod(); // Call the custom method of the child component
    };

    return (
      <div>
        <ChildComponent ref={childRef} />
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Focus Child Input
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

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <p>
        The useImperativeHandle hook customizes the instance value that is
        exposed by a ref. It is used to control what is accessible from the
        parent component when using refs. This hook is often used in conjunction
        with forwardRef to allow child components to expose certain methods or
        properties to the parent component.
      </p>
      <p>Here's an example usage:</p>
      <ParentComponent />
    </div>
  );
}

export default UseImperativeHandleInfo;
