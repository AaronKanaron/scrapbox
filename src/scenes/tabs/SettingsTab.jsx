/*- Imports -*/
import React from "react";
import Switch from "../../components/atoms/objects/switch";
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
                <h1 class="title">Game Settings</h1>
                <div class="settings">
                    <div class="setting">
                        <h2 class="setting-name">Self-vote</h2>
                        <div className="setting-value">
                            <Switch label="canver">

                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
