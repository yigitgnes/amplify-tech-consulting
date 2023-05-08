import React, {useState} from "react";
import MountainImage from "../assets/images/mountain.jpg";
import axios from "axios";
import '../styles/Contact.css'

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/v1/customer/create", {
                name,
                email,
                message,
            })
            .then((response) => {
                console.log(response);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to send message.");
            });
    };

    return (
        <div className="contact">
            <div
                className="leftSide"
                style={{backgroundImage: `url(${MountainImage})`}}
            ></div>
            <div className="rightSide">
                <h1> Contact Us</h1>

                <form id="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        name="name"
                        placeholder="Enter full name..."
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        placeholder="Enter email..."
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact
