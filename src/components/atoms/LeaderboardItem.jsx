import React from 'react'


class LeaderboardItem extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            rank: this.props.rank,
            username: this.props.username,
            points: this.props.points
        }
    }
    
    render() {
        return (
            <li className={`leaderboard-item ${this.props.rank <= 1 ? "top3" : ""}`} >
                <div className="divider large">
                    <p className='rank'>{this.props.rank}</p>
                    <div className="profile">
                        {this.props.rank <= 1 ? <img className="crown" src="./crown.svg" alt="crown" /> : null}
                        <img className="pfp" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                    </div>
                    <p className='username'>{this.props.username}</p>
                </div>
                <div className="divider">
                    <div className="pmount">
                        <p>122</p>
                    </div>
                    <div className="words">
                        <p>13231</p>
                    </div>
                    <div className="points">
                        <p>{this.props.points}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default LeaderboardItem