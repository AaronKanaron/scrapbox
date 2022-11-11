import React from "react";

// import "../styles/home.scss"
// import "../styles/index.scss"


export default class Home extends React.PureComponent{
    render() {
        return (
            <main>
                <div className="wrapper">
                    <div className="content">
                        <img className="logo" src="./logo.svg"/>
                        <button className="button big">
                            <p>Join</p>
                        </button>
                        <button className="button big">
                            <p>Create</p>    
                        </button>
                        <div className="small-buttons">
                            <div>
                            </div>
                            <div>
                                Account
                            </div>
                            <div>
                                Report Bugs
                            </div>
                        </div>
                    </div>
                    <img className="logo-big" src="https://www.tinyboxcompany.co.uk/media/resized/catalog/product1000_1000/f/m/fmkrcu_final.png"></img>
                </div>

                <
            </main>
        )
    }
}