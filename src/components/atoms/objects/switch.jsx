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
            <label className="switch setting-value">
                <input type="checkbox" id="switch" checked={this.state.checked} onChange={this.toggle} />
                {/* <span htmlFor="switch">{this.props.label}</span> */}
                <span id="slider" className='slider'></span>
            </label>
        )
    }

    /*- Functions -*/
    toggle() {
        this.setState({ checked: !this.state.checked });
        console.log("toggled to state: " + this.state.checked + "");
        //animate pulse on slider
        if (this.state.checked) {
            document.getElementById("slider").style.animation = "switch-pulse-out 0.5s";
        } else {
            document.getElementById("slider").style.animation = "switch-pulse 0.5s";
        }
    }
}