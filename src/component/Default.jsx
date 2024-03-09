import React from "react";
import { Route, Routes } from "react-router-dom";
import Introduction from "../page/Introduction";
import Hooks from "../page/Hooks";

function Default() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/hooks" element={<Hooks />} />
      </Routes>
    </>
  );
}

export default Default;


