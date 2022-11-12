/*- Imports -*/
import React from "react";
import OutlineButton from "../components/atoms/OutlineButton";
import Navbar from "../components/molecules/Navbar";
import Leaderboard from "../components/molecules/Leaderboard";
import "../styles/index.scss"
import SortIcon from "../components/molecules/Icons";
import Globals from "../functional/Globals";

/*- Constants -*/
const MAX_WEBSOCKET_CONNECTION_RETRIES = 5;

/*- Main body -*/
export default class Index extends React.PureComponent {
	constructor(props) {
		super(props);

        /*- Changeable -*/
		this.state = {
            isMounted: false,
        };

        /*- Function bindings -*/
		this.mountWebsocket     = this.mountWebsocket.bind(this);
		this.scroll             = this.scroll.bind(this);

        /*- Vars -*/
        this.websocket = null;
        this.websocketConnectionRetries = 0;

        /*- Use Refs -*/
        this.scrollIntoViewElement = React.createRef()
	}

    /*- Initialize websocket connection -*/
	mountWebsocket() {
        console.log("im", this.state.isMounted)
        if (!this.state.isMounted) { return; };

        /*- Change vars -*/
        this.websocket = new WebSocket(Globals.websocketAddress);
        this.websocketConnectionRetries += 1;

        /*- Check websocket availability -*/
        if (this.websocketConnectionRetries > MAX_WEBSOCKET_CONNECTION_RETRIES) {
            console.warn("Connection problems to websocket after", MAX_WEBSOCKET_CONNECTION_RETRIES, "tries.");
            return;
        } else if (this.websocket == null) {
            return this.mountWebsocket();
        } else {
            console.log("Websocket mounted!");
        };

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
			this.websocket.send(JSON.stringify(e));
		};

        /*- Websocket recieve from server -*/
		this.websocket.onmessage = (e) => {
			console.log("MESSAGE: ", JSON.parse(e.data));
		};

        /*- Websocket did unmount -*/
		this.websocket.onclose = () => {
            console.log("Websocket closed");

            /*- Retry connect -*/
            if (this.state.isMounted) {
                return this.mountWebsocket();
            };
		};
	}

    /*- Initialize -*/
    componentDidMount() {
        this.setState({ isMounted: true }, () => {
            this.mountWebsocket();
        })
    }

    /*- Unmount -*/
    componentWillUnmount() {
        this.setState({ isMounted: true })
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
                        <img className="logo" src="./logo/untitled.svg"/>
                    </div>

                    <div className="container">
                        <div className="content">
                            <div className="buttons">
                                <OutlineButton iconSrc="./icons/enter.svg" buttonText="Sign up" additionalClass="one" href="join" />
                                <OutlineButton iconSrc="./icons/create.svg" buttonText="Create" additionalClass="two" href="create" />
                                <OutlineButton iconSrc="./icons/browse.svg" className="large" buttonText="Browse" additionalClass="three" href="browse" />
                                <OutlineButton iconSrc="./icons/user.svg" buttonText="Sign up" additionalClass="four" href="sign-up" />
                            </div>
                        </div>

                        {/* <div className="side-buttons">
                            <img src="./gear-solid.svg"/>
                            <img src="./triangle.svg"/>
                            <img src="./gear-solid.svg"/>
                        </div> */}
                    </div>
                    
                    <img className="chevron" src="./icons/down.svg" onClick={this.scroll}/>
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
