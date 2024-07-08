import React from 'react'
import BannerImage from '../assets/contact.PNG';
import '../styles/Contact.css'

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
    
    return (
        <div className="contact">
            <div className="left" style={{ backgroundImage: `url(${BannerImage})`}}></div>
            <div className="right">
                <h1> Contact Me </h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name" type="text" required/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email" type="email" required/>
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter message" name="message" required> </textarea>
                    <button type="submit"> Send Message </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact