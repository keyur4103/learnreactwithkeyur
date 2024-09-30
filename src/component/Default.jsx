import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "../page/Introduction";
import Hooks from "../page/Hooks";
import Routers from "../page/Routers";

function Default() {
  return (
    <>
<Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/reactrouter" element={<Routers />} />
      </Routes>
</Router>
    </>
  );
}

export default Default;
