import React from 'react';


export default class Switch extends React.PureComponent {
    constructor(props) {
        super(props);

        /*- Changeable -*/
        this.state = {
            checked: false
        };

        /*- Function bindings -*/
        this.toggle = this.toggle.bind(this);

        /*- Vars -*/

        /*- Use Refs -*/
    }

    /*- Render to DOM -*/
    render() {
        return (
            <div className="switch setting-value">
                <input type="checkbox" id="switch" checked={this.state.checked} onChange={this.toggle} />
                <label htmlFor="switch">{this.props.label}</label>
            </div>
        )
    }

    /*- Functions -*/
    toggle() {
        this.setState({ checked: !this.state.checked });
    }
}