import React from "react";
import contact from "./contact.module.css";
import Header from "../header";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className={contact.container}>
            <Header/>
            <div className={contact.contact}>
                <div className={contact.contactus}>

                <div className={contact.title}>
                    <h1>Contact Us</h1>
                </div>

                <div className={contact.address}>
                    <h3>Address</h3>
                    <p>1880 John Adams Pkwy<br/> Idaho Falls, ID <br/> 83401</p>
                </div>

                <div className={contact.phoneNumber}>
                    <h3>Phone Number</h3>
                    <p>(208)-524-6633<br/>Mon-Fri<br/>8 AM - 12 PM<br/> 1 PM - 5 PM</p>
                </div>

                <div className={contact.disclaimer}>
                    <p>Baker Family Practice is a closed practice meaning that they are not accepting any new patients with the exception of new family members. However, some <Link to='/services'>services</Link> are still provided to all people, regardless of patient status. If the status of the practice ever changes it will be displayed here.</p>
                </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;