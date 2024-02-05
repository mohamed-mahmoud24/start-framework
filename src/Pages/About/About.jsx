import { Fragment, useEffect } from "react";

export default function About() {
    useEffect(() => {
        document.title = "About";
    }, []);
    return (
        <Fragment>
            <div className="about ">
                <div className="container text-center text-white">
                    <h1>ABOUT COMPONENT</h1>
                    <div className="after"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="before"></div>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <p className="mt-1">
                                Freelancer is a free bootstrap theme created by
                                Route. The download includes the complete source
                                files including HTML, CSS, and JavaScript as
                                well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p className="mt-1">
                                Freelancer is a free bootstrap theme created by
                                Route. The download includes the complete source
                                files including HTML, CSS, and JavaScript as
                                well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
