import React from 'react';


const OutlineButton = ({ iconSrc = "", className="", buttonText = "text", additionalClass = "", href = "./" }) => (
    <a href={href} className={className}>
        <button className={`button ${additionalClass}`}>
            <img src={iconSrc} alt={buttonText}/>
            <p>{buttonText}</p>
        </button>
    </a>
);

export default OutlineButton;
