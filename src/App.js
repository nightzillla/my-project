import React from "react";
// import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Bootcamp from "./Pages/Bootcamp/Bootcamp";
import Projects from "./Pages/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App () {
    return (
             <>
             <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/aboutme" element={<AboutMe/>}/>
                    <Route path="/bootcamp" element={<Bootcamp/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
             </Router>
            </>
    );
}

export default App;
