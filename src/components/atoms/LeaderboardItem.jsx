import React from 'react'


const LeaderboardItem = ({ rank, username, points }) => {
    return (
        <li className="leaderboard-item">
            <div className="divider large">
                <p className='rank'>{rank}</p>
                <img class="pfp" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                <p className='username'>{username}</p>
            </div>
            <div className="divider">

                <p className='points'>{points}</p>
            </div>
        </li>
    )
}

export default LeaderboardItem