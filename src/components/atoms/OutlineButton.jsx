import React from 'react';


const OutlineButton = ({ iconSrc = "", className = "", buttonText = "text", additionalClass = "", href = "./", long = false }) => (
    <a href={href} className={className}>
        <button className={`button ${additionalClass} ${long ? "border-long" : ""}`}>
            { iconSrc !== "" ? <img src={iconSrc} alt={buttonText}/> : null }
            <p>{buttonText}</p>
        </button>
    </a>
);

export default OutlineButton;
