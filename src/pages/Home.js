import React from "react";
import {Link} from "react-router-dom"
import MountainImage from '../assets/images/mountain.jpg'
import "../styles/Home.css"

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${MountainImage})`}}>
            <div className="headerContainer">
                <h1>Amplify Tech Consulting</h1>
                <p>Amplify Your Impact</p>
                <Link to="/contact">
                    <button className="contactButton"> Contact Now</button>
                </Link>
            </div>

        </div>
    )
}

export default Home
