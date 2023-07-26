import React from "react";
import "./background.css";

const ContactBackground: React.FC = () => {
    return (
        <div>
            <video className="contact" autoPlay loop muted playsInline preload="auto">
                <source src="/contact.webm" type="video/webm" />
            </video>
            <div className="contact-bg" />
        </div>
    );
};

export default ContactBackground;
