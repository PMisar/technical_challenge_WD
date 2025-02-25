// App.jsx

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PhonesPage from "./pages/PhonesPage";
import PhonePage from "./pages/PhonePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Welcome to the Home Page!</div>} />
        <Route exact path="/phones" element={<PhonesPage />} />
        <Route exact path="/phones/:id" element={<PhonePage />} />
      </Routes>
    </div>
  );
}
export default App;
