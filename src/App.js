import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <ParticlesBackground/>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/services' exact element={<Services/>}/>
                    <Route path='/about' exact element={<About/>}/>
                    <Route path='/contact' exact element={<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
