import React from 'react'


class LeaderboardItem extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            rank: this.props.rank,
            username: this.props.username,
            points: this.props.points,
            pmounts: this.props.pmounts,
            words: this.props.words
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
                        <p>{this.props.pmounts}</p>
                    </div>
                    <div className="words">
                        <p>{this.props.words}</p>
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