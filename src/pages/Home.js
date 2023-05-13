import React from "react";
import {Link} from "react-router-dom"
import MountainImage from '../assets/images/mountain.jpg'
import "../styles/Home.css"
import {ProjectList} from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";

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
                <h2><i>RUNNING PROJECTS</i></h2>
                <div className={"projectList"}>
                    {ProjectList.map((projectItem, key) =>{
                        return(<ProjectItem
                            image={projectItem.image}
                            logo={projectItem.logo}
                            description={projectItem.description}/>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
