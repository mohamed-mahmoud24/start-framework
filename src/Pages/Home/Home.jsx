import { useEffect } from "react";
import image from "../../images/avataaars.svg";
export default function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <>
            <div className="home">
                <div className="container text-center text-white">
                    <img src={image} className="w-25" alt="" />
                    <h1>START FRAMEWORK</h1>
                    <div className="after"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="before"></div>
                    <p className="mt-3">
                        Graphic Artist - Web Designer - Illustrator
                    </p>
                </div>
            </div>
        </>
    );
}
