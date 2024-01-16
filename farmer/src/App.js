import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome";
import Home from "./component/home"

function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/HOME" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}
export default app;