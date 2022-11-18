/*- Imports -*/
import React from "react";
import "../../styles/index.scss"
import "../../styles/joinroom.scss";

/*- Main body -*/
export default class SettingsTab extends React.PureComponent {
	constructor(props) {
		super(props);

        /*- Changeable -*/
		this.state = {};

        /*- Function bindings -*/

        /*- Vars -*/

        /*- Use Refs -*/
	}

    /*- Initialize -*/
    componentDidMount() {
    }

    /*- Unmount -*/
    componentWillUnmount() {
    }

    /*- Render to DOM -*/
    render() {
        return (
            <div className="settings-tab">
                <p>Settings</p>
            </div>
        )
    }
}
