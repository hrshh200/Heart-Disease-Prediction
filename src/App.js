import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Heartpred from "./Heartpred";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/heartpred" exact element={<Heartpred />} />
      </Routes>
    </Router>
  );
}
export default App;