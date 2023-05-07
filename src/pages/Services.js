import React from "react"
import {ServiceList} from "../helpers/ServiceList"
import ServiceItem from "../components/ServiceItem"
import '../styles/Service.css'

function Services() {
    return (
        <div className={"services"}>
            <h1 className={"serviceTitle"}>Our Services</h1>
            <div className={"serviceList"}>
                {ServiceList.map((serviceItem, key) => {
                return (<ServiceItem
                    key={key}
                    image={serviceItem.image}
                    name={serviceItem.name}
                    contact={serviceItem.contact}/>
                );
            })}
            </div>
        </div>
    )
}

export default Services
