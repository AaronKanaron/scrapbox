import React from "react";

// import "../styles/home.scss"
// import "../styles/index.scss"


export default class Home extends React.PureComponent{
	constructor(props) {
		super(props);

		this.state = {
			mouse_x: 0,
			mouse_y: 0,
			websocket: null,
		};

		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.getRoomLinks = this.getRoomLinks.bind(this);
		this.connectToWebsocket = this.connectToWebsocket.bind(this);
	}

	connectToWebsocket() {
		const e = {
			destination: "create-room",
			data: JSON.stringify({
				jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFydHVyIiwidWlkIjoiNmM2NjBjOTItOGM2My00ZWFiLWIxMzktNDFiNGNkMDZmYzBjIiwic3VpZCI6IjU0NDZmMjg4NGZjZDRkNWM5YWZiNGYyMjhkNzZhOTA5IiwiZXhwIjoxNjcwNzk5Mjk0fQ.Is68LQDu2kP19EbuCydOlFLUYncFohOZpLi6ct9KkNY",
			}),
		};
		const websocket = new WebSocket("ws://127.0.0.1:8080");
		websocket.onopen = () => {
			console.log("Connected to websocket");
			websocket.send(JSON.stringify(e));
		};
		websocket.onmessage = (e) => {
			console.log("Message received from websocket");
			console.log(JSON.parse(e.data));
		};
		websocket.onclose = (e) => {
			console.log("Websocket closed");
			console.log(e);
		};
		this.setState({ websocket: websocket });
	}


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
            </main>
        )
    }
}