import React from "react";
// *===== Linked React Router DOM =========================
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Login, Detail } from "./components";

import {Home} from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
