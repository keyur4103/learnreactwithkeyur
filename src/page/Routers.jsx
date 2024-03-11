import { useEffect, useState } from "react";
import Routerinfo from "../routers/Routerinfo";
import BrowserRouterinfo from "../routers/BrowserRouterinfo";
import HashRouterinfo from "../routers/HashRouterinfo";
import MemoryRouterinfo from "../routers/MemoryRouterinfo";
import NativeRouterinfo from "../routers/NativeRouterinfo";
import StaticRouterinfo from "../routers/StaticRouterinfo";

function Routers() {
  const [isOpen, setIsOpen] = useState(false);
  const routers = [
    "Router",
    "BrowserRouter",
    "HashRouter",
    "MemoryRouter",
    "NativeRouter",
    "StaticRouter",
  ];

  const [selectedrouters, setSelectedrouters] = useState(() => {
    // Get the selected hook from localStorage if available
    const storedrouters = localStorage.getItem("selectedrouters");
    return storedrouters || routers[0]; // Default to the first hook if not stored
  });

  useEffect(() => {
    localStorage.setItem("selectedrouters", selectedrouters);
  }, [selectedrouters]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle click event on hook button
  const handleClick = (routersName) => {
    setSelectedrouters(routersName);
    setCurrentIndex(routers.indexOf(routersName));
  };

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % routers.length);
    setSelectedrouters(routers[(currentIndex + 1) % routers.length]);
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? routers.length - 1 : prevIndex - 1
    );
    setSelectedrouters(
      routers[currentIndex === 0 ? routers.length - 1 : currentIndex - 1]
    );
  };
  return (
    <>
      <div id="test" className=" w-full relative">
        {!isOpen && (
          <button
            className="text-white bg-blue-500 h-7 w-7 "
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
                List of React Router &nbsp;
                <button
                  className="text-white bg-red-500 h-7 w-7"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </h2>
              <ul>
                {routers.map((routers, index) => (
                  <li key={index} className="mb-1">
                    <button
                      className={`text-blue-600 hover:underline ${
                        selectedrouters === routers ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        handleClick(routers);
                        setIsOpen(false);
                      }}
                    >
                      {routers}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          </div>
        )}

        <div className="w-full p-4" style={{ overflowY: "auto" }}>
          {selectedrouters === "Router" && <Routerinfo />}
          {selectedrouters === "BrowserRouter" && <BrowserRouterinfo />}
          {selectedrouters === "HashRouter" && <HashRouterinfo />}
          {selectedrouters === "MemoryRouter" && <MemoryRouterinfo />}
          {selectedrouters === "NativeRouter" && <NativeRouterinfo />}
          {selectedrouters === "StaticRouter" && <StaticRouterinfo />}
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

export default Routers;
