import React, { useEffect } from "react";
import imagOne from "../../images/poert1.png";
import imagTwo from "../../images/port2.png";
import imagThree from "../../images/port3.png";
export default function Portfolio() {
    useEffect(() => {
        document.title = "Portfolio";
    }, []);
    return (
        <>
            <div className="portfolio">
                <div className="container text-center">
                    <h1>PORTFOLIO COMPONENT</h1>
                    <div className="after"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="before"></div>
                    <div className="row g-4 mt-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative overflow-hidden portfolio-content cursor rounded-3">
                                <img
                                    src={imagOne}
                                    className="w-100 rounded-3"
                                    alt="photo of portfoloi"
                                />
                                <div className="layer d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative overflow-hidden portfolio-content cursor rounded-3">
                                <img
                                    src={imagTwo}
                                    className="w-100 rounded-3"
                                    alt="photo of portfoloi"
                                />
                                <div className="layer d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative overflow-hidden portfolio-content cursor rounded-3">
                                <img
                                    src={imagThree}
                                    className="w-100 rounded-3"
                                    alt="photo of portfoloi"
                                />
                                <div className="layer d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative overflow-hidden portfolio-content cursor rounded-3">
                                <img
                                    src={imagOne}
                                    className="w-100 rounded-3"
                                    alt="photo of portfoloi"
                                />
                                <div className="layer d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative overflow-hidden portfolio-content cursor rounded-3">
                                <img
                                    src={imagTwo}
                                    className="w-100 rounded-3"
                                    alt="photo of portfoloi"
                                />
                                <div className="layer d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative overflow-hidden portfolio-content cursor rounded-3">
                                <img
                                    src={imagThree}
                                    className="w-100 rounded-3"
                                    alt="photo of portfoloi"
                                />
                                <div className="layer d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-plus text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
