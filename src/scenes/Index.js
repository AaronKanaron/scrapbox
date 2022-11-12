/*- Imports -*/
import React from "react";
import OutlineButton from "../components/atoms/OutlineButton";
import Navbar from "../components/molecules/Navbar";
import Leaderboard from "../components/molecules/Leaderboard";
import "../styles/index.scss"
import SortIcon from "../components/molecules/Icons";

/*- Main body -*/
export default class Index extends React.PureComponent {
	constructor(props) {
		super(props);

        /*- Changeable -*/
		this.state = {};

        /*- Function bindings -*/
		this.connectToWebsocket = this.connectToWebsocket.bind(this);
        this.scroll = this.scroll.bind(this);

        /*- Vars -*/
        this.websocket = new WebSocket("ws://127.0.0.1:8080");

        /*- Use Refs -*/
        this.scrollIntoViewElement = React.createRef()
	}

    /*- Initialize websocket connection -*/
	mountWebsocket() {
        console.log("Websocket mounted!");

        /*- Websocket data -*/
		const e = {
			destination: "create-room",
			data: JSON.stringify({
				jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFydHVyIiwidWlkIjoiNmM2NjBjOTItOGM2My00ZWFiLWIxMzktNDFiNGNkMDZmYzBjIiwic3VpZCI6IjU0NDZmMjg4NGZjZDRkNWM5YWZiNGYyMjhkNzZhOTA5IiwiZXhwIjoxNjcwNzk5Mjk0fQ.Is68LQDu2kP19EbuCydOlFLUYncFohOZpLi6ct9KkNY",
			}),
		};

        /*- Websocket did mount -*/
		this.websocket.onopen = () => {
			console.log("Connected to websocket");
			websocket.send(JSON.stringify(e));
		};

        /*- Websocket recieve from server -*/
		this.websocket.onmessage = (e) => {
			console.log("Message received from websocket");
			console.log(JSON.parse(e.data));
		};

        /*- Websocket did unmount -*/
		this.websocket.onclose = (e) => {
			console.log("Websocket closed");
			console.log(e);
		};
	}

    /*- Initialize -*/
    componentDidMount() {
        mountWebsocket();
    }

    /*- Functions -*/
    scroll() {
        this.scrollIntoViewElement.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
    
    /*- Render to DOM -*/
    render() {
        return (
            <main>
                <Navbar page="home" />
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
                    <fieldset className="container">
                        <legend>leaderboard</legend>
                        <div className="sorttabs-container">
                            <div className="sorttabs large">
                                <h1>Rating</h1>
                            </div>
                            <div className="sorttabs">
                                <div className="sorttab">
                                    <SortIcon color="white"/>
                                    <h2>Pmounts</h2>
                                </div>
                                <div className="sorttab">
                                    <SortIcon color="white"/>
                                    <h2>Words</h2>
                                </div>
                                <div className="sorttab active">
                                    <SortIcon color="white"/>
                                    <h2>Points</h2>
                                </div>
                            </div>
                        </div>
                        
                        <Leaderboard />
                    </fieldset>
                </section>
            </main>
        )
    }
}