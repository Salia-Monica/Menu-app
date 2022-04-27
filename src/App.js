import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Routes path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
