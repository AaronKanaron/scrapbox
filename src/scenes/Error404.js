import React from 'react';

import OutlineButton from "../components/atoms/OutlineButton";

import "../styles/index.scss"

export default class Error404 extends React.PureComponent{
    render() {
        return (
            <main>
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
                            <h1>404</h1>
                            <p>Page not found</p>
                        </div>

                        {/* <div className="side-buttons">
                            <img src="./gear-solid.svg"/>
                            <img src="./triangle.svg"/>
                            <img src="./gear-solid.svg"/>
                        </div> */}
                    </div>
                </section>
            </main>
        );
    }
}