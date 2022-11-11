import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

//outline button html looks like this
/*
<a href="./">
    <button className="button [custom class here]">
            <img src="./enter.svg"/>
            <p>Join Game</p>
    </button>    
</a>
*/

const OutlineButton = ({ iconSrc = "", className="", buttonText = "text", additionalClass = "", href = "./" }) => (
    <a href={href} className={className}>
        <button className={`button ${additionalClass}`}>
            <img src={iconSrc} alt={buttonText}/>
            <p>{buttonText}</p>
        </button>
    </a>
);

export default OutlineButton;
