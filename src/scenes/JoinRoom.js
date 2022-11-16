/*- Imports -*/
import React from "react";
import Navbar from "../components/molecules/Navbar";
import "../styles/index.scss"
import Cookies from "js-cookie";
import Globals from "../functional/Globals";
import "../styles/joinroom.scss";

/*- Constants -*/
const MAX_WEBSOCKET_CONNECTION_RETRIES = 5;

/*- Main body -*/
export default class JoinRoom extends React.PureComponent {
	constructor(props) {
		super(props);

        /*- Changeable -*/
		this.state = {
            isMounted: false,
        };

        /*- Function bindings -*/
		this.mountWebsocket     = this.mountWebsocket.bind(this);

        /*- Vars -*/
        this.websocket = null;
        this.websocketConnectionRetries = 0;
        this.jwtToken = Cookies.get("token");

        /*- Use Refs -*/
        this.scrollIntoViewElement = React.createRef()
	}

    /*- Initialize websocket connection -*/
	mountWebsocket() {
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
			destination: "join-room",
			data: JSON.stringify({
				jwt: this.jwtToken,
                room_id: "47595",
			}),
		};

        /*- Websocket did mount -*/
		this.websocket.onopen = () => {
            if (!this.state.isMounted) { return; };

			/*- Send join room request -*/
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
        /*- Fetch create-room endpoint -*/
        this.setState({ isMounted: true }, () => {
            this.mountWebsocket();
        })
    }

    /*- Unmount -*/
    componentWillUnmount() {
        this.setState({ isMounted: true })
    }

    /*- Render to DOM -*/
    render() {
        return (
            <main className="joinRoom">

                <div className="player-container">
                    <div className="background">
                        <img src="/assets/board.svg" className="background__image" />
                    </div>
                    <div className="logo-container">
                        <img src="/logo/scrapbox-bordered.svg" alt="logo" className="logo"/>
                    </div>

                    <div className="players">
                        <div className="player">
                            
                            {/* <img src="/assets/profiles/Knight.svg" alt="player"/> */}
                        </div>    
                    </div>
                </div>

                <div className="room-container">
                    <div className="tabs">
                        <div className="tab">
                            <h1>Game</h1>
                        </div>
                        <div className="tab">
                            <h1>Chat</h1>
                        </div>
                    </div>

                    <div className="room-content">
                    
                    </div>
                </div>
            </main>
        )
    }
}
