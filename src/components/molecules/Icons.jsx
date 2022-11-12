import React from 'react';

export default class SortIcon extends React.PureComponent {
    constructor (props) {
        super(props);

    }
    render () {
        return (
            <svg className="icon sort-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox='0 0 48 48' stroke={this.props.color} fill={this.props.color}><path d="M16.1 25.5V9.7l-6 6L8 13.6l9.65-9.65 9.65 9.65-2.1 2.1-6.1-6.05V25.5Zm14.25 18.45-9.65-9.7 2.1-2.05 6 6V22.4h3v15.85l6.1-6.05 2.1 2.1Z"/></svg>
        )
    }
}

