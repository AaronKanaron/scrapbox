/*- Imports -*/
import React from "react";
import OutlineButton from "../components/atoms/OutlineButton";
import Navbar from "../components/molecules/Navbar";
import Leaderboard from "../components/molecules/Leaderboard";
import "../styles/index.scss"
import Globals from "../functional/Globals";
import { EnterIcon } from "../components/molecules/Icons";

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
        this.joinRoom           = this.joinRoom.bind(this);

        /*- Vars -*/
        this.websocket = null;
        this.websocketConnectionRetries = 0;
        this.joinRoomErrorAnimation = [
            {
                transform: "translateX(-50px)",
                //change color to red
                color: "#FF0000"
            },
            {
                transform: "translateX(50px)",

            },
            {
                transform: "translateX(0)",

            }
        ]

        /*- Use Refs -*/
        this.scrollIntoViewElement = React.createRef();
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
            // this.mountWebsocket(); //! UNCOMMENT TO ENABLE WEBSOCKET
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
    
    joinRoom(e) {
        console.log("click: " + e.target.value)
        if (e.target.value.length === 5 ){
            // e.target.animate(this.joinRoomErrorAnimation, {duration: 200, iterations: 1});
            e.target.style.animate = "errorBounce 0.2s linear 1";
            console.log("animating " + e.target.style.animate)
        } 
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
                        <img alt="logo" className="logo" src="./logo/logo-big.svg"/>
                    </div>

                    <div className="container">
                        <div className="content">
                            <div className="buttons">
                                <form className="joinbutton button one" action="join">
                                <input type="text" id="join" placeholder=" " onChange={this.joinRoom} maxLength={5} className=""></input>
                                    <label htmlFor="join">
                                        <EnterIcon/>
                                        Join
                                    </label>
                                </form>
                                <OutlineButton iconSrc="./icons/create.svg" buttonText="Create" additionalClass="two" href="room" />
                                <OutlineButton iconSrc="./icons/browse.svg" className="large" buttonText="Browse Lobbies" additionalClass="three" href="browse" />
                                <OutlineButton iconSrc="./icons/user.svg" buttonText="Sign up" additionalClass="four" href="sign-up" />
                            </div>
                        </div>

                        {/* <div className="side-buttons">
                            <img src="./gear-solid.svg"/>
                            <img src="./triangle.svg"/>
                            <img src="./gear-solid.svg"/>
                        </div> */}
                    </div>
                    
                    <img className="chevron" alt="Down" src="./icons/down.svg" onClick={this.scroll}/>
                </section>
                <div ref={this.scrollIntoViewElement}>
                    <Leaderboard />
                </div>
            </main>
        )
    }
}
