import React from "react"

function ServiceItem({ image, name, contact}) {
    return (
        <div className="serviceItem">
            <div style={{backgroundImage: `url(${image})`}}> </div>
            <h1> {name} </h1>
            <p> {contact}</p>
        </div>
    )

}

export default ServiceItem
