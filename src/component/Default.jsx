import React from "react";
import { Route, Routes } from "react-router-dom";
import Introduction from "../page/Introduction";
import Hooks from "../page/Hooks";
import Routers from "../page/Routers";

function Default() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Introduction />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/reactrouter" element={<Routers />} />
      </Routes>

    </>
  );
}

export default Default;
