import React from "react";
import {Link} from "react-router-dom"
import MountainImage from '../assets/images/mountain.jpg'
import "../styles/Home.css"
import Nestin from "../assets/images/house.jfif"

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

            <div className={"projects"}>

                <div className={"box"} style={{backgroundImage: `url(${Nestin})`}}>
                    <h2 className={"projectTitle"}>Nestin</h2>
                    <p className={"text"}>In this example, we're setting the .projectsContainer to be a flex container
                        with a column direction and centered alignment. We also set some margins to separate it from the
                        header.</p>
                </div>

                <div className={"box"}>
                    <h2 className={"projectTitle"}>Project 2</h2>
                    <p>In this example, we're setting the .projectsContainer to be a flex container with a column
                        direction and centered alignment. We also set some margins to separate it from the header.</p>
                </div>

                <div className={"box"}>
                    <h2 className={"projectTitle"}>Project 3</h2>
                    <p>In this example, we're setting the .projectsContainer to be a flex container with a column
                        direction and centered alignment. We also set some margins to separate it from the header.</p>
                </div>

                <div className={"box"}>
                    <h2 className={"projectTitle"}>Project 4</h2>
                    <p>In this example, we're setting the .projectsContainer to be a flex container with a column
                        direction and centered alignment. We also set some margins to separate it from the header.</p>
                </div>

            </div>
        </div>
    )
}

export default Home
