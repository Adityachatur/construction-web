import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Mainheading = (props) => {
    const backgroundStyle = {
        backgroundImage: `url(${props.img})`,
    };

    return (
        <div>
            <div
                className="relative flex items-center justify-center bg-cover bg-center h-96"
                style={backgroundStyle}
            >
                <div className="absolute inset-0 bg-black opacity-35"></div>

                <div className="text-center text-white relative z-10 border-x-4   lg:w-5/12 md:w-7/12 sm:w-9/12 w-full  lg:mx-auto  mx-2">

                    <h1 className="lg:text-4xl md:text-2xl text-xl uppercase font-bold mb-4 font-Oswald ">
                        {props.title}
                    </h1>

                    {/* Breadcrumb Navigation */}
                    <p className="text-xl text-white uppercase flex space-x-3 justify-center font-Montserrat">
                        <Link to={"/"}>Home</Link>
                        <span>
                            <FontAwesomeIcon icon={faGreaterThan} />
                        </span>
                        <span className="text-yellow-500 font-bold  font-Montserrat">{props.ThisPage}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mainheading;
