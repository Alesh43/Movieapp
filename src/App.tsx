import React from "react";
import Home from "./component/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Layout/side-bar";
import HomePage from "./Pages/Home/homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
