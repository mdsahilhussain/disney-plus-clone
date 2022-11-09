import React from "react";
// *===== Linked React Router DOM =========================
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Login } from "./components";

import {Home} from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
