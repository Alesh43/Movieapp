import React from "react";
import Home from "./component/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Layout/side-bar";
import HomePage from "./component/Movies/All-Movies";
import Header from "./Layout/header";
import Defaultlayout from "./Layout/Default-Layout/Defaultlayout";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Defaultlayout/>}>
            <Route path="/" element={<HomePage />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
