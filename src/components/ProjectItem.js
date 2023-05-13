import React from "react"

function ProjectItem({logo, image, description}) {
    return (
        <div className={"box"} style={{backgroundImage: `url(${image})`}}>
            <h2 className={"projectTitle"}>{logo}</h2>
            <p className={"text"}>{description}</p>
        </div>
    )
}

export default ProjectItem
