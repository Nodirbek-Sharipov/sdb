import React from "react";
import spinner from "../../assets/images/spinner2.gif"

function FullPageLoader() {
    return (
        <div className="loader-wrap">
            <div className="loading-content">
                <div className="loader-item"></div>
                <div className="loader-item"></div>
                <div className="loader-item"></div>
                <div className="loader-item"></div>
            </div>
        </div>
)
}

export default FullPageLoader
