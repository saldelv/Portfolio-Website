import React from 'react'
import profilePicture from '../assets/pfp.PNG'
import '../styles/Contact.css';
import pdf from '../assets/Salvatore_Del_Vecchio_Resume.pdf';

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_WEB3FORMS_API_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Successfully Submitted to Salvatore");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="left">
                <div style={{ backgroundImage: `url(${profilePicture})`}}></div>
            </div>
            <div className="right">
                <div className = "heading">
                    <h1> Contact Me </h1>
                    <a href={pdf} target='_blank' rel='noopener noreferrer'>
                        <button className="resumeButton"> See My Resume </button>
                    </a>
                </div>
                <div className = "formContainer">
                    <div className = "title">Contact Form</div>
                    <form id="contact-form" method="POST" onSubmit={onSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input name="name" placeholder="Enter full name" type="text" required/>
                        <label htmlFor="email">Email:</label>
                        <input name="email" placeholder="Enter email" type="email" required/>
                        <label htmlFor="message">Message:</label>
                        <textarea rows="6" placeholder="Enter message" name="message" required></textarea>
                        <button type="submit"> Send Message </button>
                    </form>
                </div>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact