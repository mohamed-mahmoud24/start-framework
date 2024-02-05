import React, { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <>
            <div className="contact">
                <div className="container text-center">
                    <h1>CONTACT SECTION</h1>
                    <div className="after"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="before"></div>
                    <form className="pt-5 mt-5">
                        <input
                            type="text"
                            placeholder="userName"
                            className="form-control w-50 mx-auto"
                        />
                        <input
                            type="number"
                            placeholder="userAge"
                            className="form-control w-50 mx-auto my-4"
                        />
                        <input
                            type="email"
                            placeholder="userEmail"
                            className="form-control w-50 mx-auto"
                        />
                        <input
                            type="password"
                            placeholder="userPassword"
                            className="form-control w-50 mx-auto my-4"
                        />
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
}
