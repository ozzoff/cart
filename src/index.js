import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Card } from "./pages/card/card";
import { ShowContextProvider } from "./context/shop-context";

function Main() {
  return (
    <div className="App">
      <ShowContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </Router>
      </ShowContextProvider>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
