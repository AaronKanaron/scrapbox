//fixed tooltip to cursor
import React from 'react'

export default class Tooltip extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tooltip: null,
            tooltipText: null,
            tooltipVisible: false,
            tooltipX: 0,
            tooltipY: 0,
        }
        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
        this.updateTooltip = this.updateTooltip.bind(this);
    }

    showTooltip(e) {
        this.setState({
            tooltipVisible: true,
            tooltipX: e.clientX,
            tooltipY: e.clientY,
        });
    }

    hideTooltip(e) {
        this.setState({
            tooltipVisible: false,
        });
    }

    updateTooltip(e) {
        this.setState({
            tooltipX: e.clientX,
            tooltipY: e.clientY,
        });
    }

    render() {
        return (
            <div className="tooltip" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} onMouseMove={this.updateTooltip}>
                {this.props.children}
                {this.state.tooltipVisible ? <div className="tooltip-text" style={{ left: this.state.tooltipX, top: this.state.tooltipY }}>{this.props.text}</div> : null}
            </div>
        )
    }
}