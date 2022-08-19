import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Main } from "./pages/Main/Main";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/register-card"}/>}/>

          <Route path="/register-card" element={[<Main key={"main"}/>]} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
