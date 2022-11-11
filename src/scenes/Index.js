import React from "react";

import OutlineButton from "../components/atoms/OutlineButton";
import Navbar from "../components/molecules/Navbar";

import "../styles/index.scss"


export default class Index extends React.PureComponent{
    //onclick a button, scroll into view
    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
        this.scrollIntoViewElement = React.createRef()
    }

    scroll() {
        this.scrollIntoViewElement.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    
    render() {
        return (
            <main>
                <Navbar />
                <section className="hero">

                    <div className="logo">
                        <div className="stripes">
                            <div className="stripe" />
                            <div className="stripe" />
                            <div className="stripe" />
                            <div className="stripe" />
                        </div>
                        <img className="logo" src="./Untitled.svg"/>
                    </div>

                    <div className="container">
                        <div className="content">
                            <div className="buttons">
                                <OutlineButton iconSrc="./enter.svg" buttonText="Sign up" additionalClass="one" href="join" />
                                <OutlineButton iconSrc="./create.svg" buttonText="Create" additionalClass="two" href="create" />
                                <OutlineButton iconSrc="./browse.svg" className="large" buttonText="Browse" additionalClass="three" href="browse" />
                                <OutlineButton iconSrc="./user.svg" buttonText="Sign up" additionalClass="four" href="sign-up" />
                            </div>
                        </div>

                        {/* <div className="side-buttons">
                            <img src="./gear-solid.svg"/>
                            <img src="./triangle.svg"/>
                            <img src="./gear-solid.svg"/>
                        </div> */}
                    </div>
                    
                    <img className="chevron" src="./down.svg" onClick={this.scroll}/>
                </section>
                <section className="leaderboards" ref={this.scrollIntoViewElement}>
                    <div className="container">
                        <h1>Leader boards</h1>
                        <p>You are at last place dsad sadsad sa</p>
                        
                    </div>
                </section>
            </main>
        )
    }
}