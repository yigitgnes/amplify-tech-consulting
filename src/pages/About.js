import React from "react"
import Consulting from "../assets/images/consulting-quotes-for-inspiration.jpg";
import '../styles/About.css'

function About() {
    return (
        <div className={"about"}>
            <div className={"aboutTop"} style={{backgroundImage: `url(${Consulting})`}}></div>
            <div className={"aboutBottom"}>
                <h1> ABOUT US </h1>
                <p>Welcome to Amplify Tech Consulting, your trusted partner for all your technology needs. We are a team of expert IT consultants who specialize in providing top-notch services to businesses of all sizes.</p>

                <p>At Amplify Tech Consulting, we understand the critical role that technology plays in modern businesses. Our mission is to help our clients leverage the latest technological innovations to amplify their impact and achieve their business objectives.</p>

                <p>Our team of experienced IT professionals has the expertise and knowledge to tackle any tech challenge, from network infrastructure design and implementation to cybersecurity and data management. We work closely with our clients to understand their unique needs and develop customized solutions that meet their specific requirements.</p>

                <p>At Amplify Tech Consulting, we are committed to delivering exceptional results. We are passionate about technology and dedicated to providing our clients with the highest level of service and support. Whether you're looking to streamline your operations, improve your cybersecurity posture, or implement new technologies to drive growth, we have the skills and expertise to help you succeed.</p>

                <p>So if you're looking for a trusted partner to help you navigate the complex world of technology, look no further than Amplify Tech Consulting. Contact us today to learn more about how we can help amplify your impact and take your business to the next level.</p>

            </div>
        </div>
    )
}

export default About
