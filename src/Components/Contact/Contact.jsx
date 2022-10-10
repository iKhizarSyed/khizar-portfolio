import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_xmz7xk7",
            "template_ey4248i",
            form.current,
            "KHptfdCMBTY8XBu2m",
        ).then((result) => {
            console.log(result.text);
            alert("Your Message has been successfully sent , I'll Contact you Soon :) ");
        }, (error) => {
            console.log(error.text);
            alert("FAILED...", error);
        });

        e.target.reset();
    };

    return (
        <div className="container-fluid contact-width" id='contact-form'>
            <div className='control-contact-width'>
                <div className="row">
                    <div className="col align-self-center">
                        <h1 className="text-center contact-h1">CONTACT ME</h1>
                        {/* <!-- contact form --> */}
                        <form ref={form} onSubmit={sendEmail}>
                            {/* <!-- name --> */}
                            <div className="form-group">
                                <label className="label-color" htmlFor="name">Name</label>
                                <input
                                    type="name"
                                    name="name"
                                    className="form-control mb-3"
                                    id="name"
                                    placeholder="Enter your full name" required
                                />
                            </div>

                            {/* <!-- email --> */}
                            <div className="form-group">
                                <label className="label-color" htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control mb-3"
                                    id="email"
                                    placeholder="Enter your email" required
                                />
                            </div>

                            {/* <!-- subject --> */}
                            <div className="form-group">
                                <label className="label-color" htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control mb-3"
                                    id="subject"
                                    placeholder="Enter email subject" required
                                />
                            </div>

                            <div className="form-group">
                                <label className="label-color" htmlFor="email_body">Message</label>
                                <textarea
                                    name='message'
                                    className="form-control mb-3"
                                    id="email_body"
                                    rows="5" required
                                ></textarea>
                            </div>

                            <button type="submit" value="send" className="btn btn-primary contact-btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};




