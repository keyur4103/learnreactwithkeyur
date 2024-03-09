import React, { useState, useEffect } from "react";
import UseStateInfo from "../hooks/UseStateInfo"; // Import the useState hook component
import UseEffectInfo from "../hooks/UseEffectInfo";
import UseContextInfo from "../hooks/UseContextInfo";
import UseReducerInfo from "../hooks/UseReducerInfo";
import UseCallbackInfo from "../hooks/UseCallbackInfo";
import UseMemoInfo from "../hooks/UseMemoInfo";
import UseRefInfo from "../hooks/UseRefInfo";
import UseImperativeHandleInfo from "../hooks/UseImperativeHandleInfo";
import UseLayoutEffectInfo from "../hooks/UseLayoutEffectInfo";
import UseDebugValueInfo from "../hooks/UseDebugValueInfo";
import MyComponent from "../hooks/MyComponent";

function Hooks() {
  const [isOpen, setIsOpen] = useState(false);
  const hooks = [
    "useState",
    "useEffect",
    "useContext",
    "useReducer",
    "useCallback",
    "useMemo",
    "useRef",
    "useImperativeHandle",
    "useLayoutEffect",
    "useDebugValue",
    "useAsync",

    // Add more hooks as needed
  ];

  const [selectedHook, setSelectedHook] = useState(() => {
    // Get the selected hook from localStorage if available
    const storedHook = localStorage.getItem("selectedHook");
    return storedHook || hooks[0]; // Default to the first hook if not stored
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle click event on hook button
  const handleClick = (hookName) => {
    setSelectedHook(hookName);
    setCurrentIndex(hooks.indexOf(hookName));
  };

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hooks.length);
    setSelectedHook(hooks[(currentIndex + 1) % hooks.length]);
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? hooks.length - 1 : prevIndex - 1
    );
    setSelectedHook(
      hooks[currentIndex === 0 ? hooks.length - 1 : currentIndex - 1]
    );
  };

  // Effect to store selected hook in localStorage
  useEffect(() => {
    localStorage.setItem("selectedHook", selectedHook);
  }, [selectedHook]);

  return (
    <>
      <div className=" w-full relative">
        {!isOpen && (
          <button
            className="text-white bg-blue-500 h-7 w-7"
            onClick={() => setIsOpen(true)}
          >
            ➪
          </button>
        )}
        {isOpen && (
          <div
            className="sm:w-auto  absolute p-4 bg-gray-200"
            style={{ height: "100vh", overflowY: "auto" }}
          >
            <>
              <h2 className="text-lg font-bold mb-2">
                List of React Hooks &nbsp;
                <button
                  className="text-white bg-red-500 h-7 w-7"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </h2>
              <ul>
                {hooks.map((hook, index) => (
                  <li key={index} className="mb-1">
                    <button
                      className={`text-blue-600 hover:underline ${
                        selectedHook === hook ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        handleClick(hook);
                        setIsOpen(false);
                      }}
                    >
                      {hook}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          </div>
        )}

        <div className="w-full p-4" style={{ overflowY: "auto" }}>
          {selectedHook === "useState" && <UseStateInfo />}
          {selectedHook === "useEffect" && <UseEffectInfo />}
          {selectedHook === "useContext" && <UseContextInfo />}
          {selectedHook === "useReducer" && <UseReducerInfo />}
          {selectedHook === "useCallback" && <UseCallbackInfo />}
          {selectedHook === "useMemo" && <UseMemoInfo />}
          {selectedHook === "useRef" && <UseRefInfo />}
          {selectedHook === "useImperativeHandle" && (
            <UseImperativeHandleInfo />
          )}
          {selectedHook === "useLayoutEffect" && <UseLayoutEffectInfo />}
          {selectedHook === "useDebugValue" && <UseDebugValueInfo />}
          {selectedHook === "useAsync" && <MyComponent />}
        </div>
        <div className="flex justify-between p-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Hooks;
