import React from 'react';

export class SortIcon extends React.PureComponent {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <svg className="icon sort-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox='0 0 48 48' stroke={this.props.color} fill={this.props.color}><path d="M16.1 25.5V9.7l-6 6L8 13.6l9.65-9.65 9.65 9.65-2.1 2.1-6.1-6.05V25.5Zm14.25 18.45-9.65-9.7 2.1-2.05 6 6V22.4h3v15.85l6.1-6.05 2.1 2.1Z"/></svg>
        )
    }
}

export class EnterIcon extends React.PureComponent {
    render() {
        // return (style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
            return <svg className="icon enter-icon" width="100%" height="100%" viewBox="0 0 2100 2100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" ><path d="M166,935L138,1162L583,1176L1010,1145L685,1477L817,1675L1100,1359L1427,1074L1094,671L847,463L677,600L1009,925L613,941L166,935Z" /><path d="M1350,1616L1283,1841L1707,1839L1896.52,1776.82L1937,1593L1987,1019L1946,530L1830,320L1357,254L1281,463L1620,489L1729,598L1710,928L1747,1352L1705,1578L1350,1616Z"/></svg>
    }
}