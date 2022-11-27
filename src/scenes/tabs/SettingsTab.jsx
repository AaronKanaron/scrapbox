/*- Imports -*/
import React from "react";
import Switch from "../../components/atoms/objects/Switch";
import Tooltip from "../../components/molecules/Tooltip";
import "../../styles/index.scss"
import "../../styles/joinroom.scss";

/*- Main body -*/
export default class SettingsTab extends React.PureComponent {

    /*- Render to DOM -*/
    render() {
        return (
            <div className="settings-tab">
                <h1 className="title">Game Settings</h1>
                <div className="settings">
                    <Setting label="Self Vote">
                        <Switch />
                    </Setting>
                </div>
            </div>
        )
    }
}


class Setting extends React.PureComponent {
    constructor (props) {
        super(props);
    }
    render() {
        return(
            <div className="setting">
                <h2 className="setting-name">
                    {this.props.label}
                    <Tooltip>
                        <span>?</span>
                    </Tooltip>
                </h2>
                <div className="setting-value">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
