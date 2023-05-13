import React from "react"

function ProjectItem({logo, image, description}) {
    return (
        <div className={"box"} style={{backgroundImage: `url(${image})`}}>
            <img className={"projectImage"} src={logo}/>
            <p className={"text"}>{description}</p>
        </div>
    )
}

export default ProjectItem
