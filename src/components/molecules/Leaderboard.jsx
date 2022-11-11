import React, { PureComponent } from 'react'

import LeaderboardItem from '../atoms/LeaderboardItem'

const player = [
    {
        rank: 1,
        username: 'user1',
        points: 100
    },
    {
        rank: 2,
        username: 'user2',
        points: 50
    },
    {
        rank: 3,
        username: 'user2',
        points: 50
    }
]


export default class Leaderboard extends React.PureComponent {
    render() {
        return (
            <ul className="leaderboard">
                {player.map((player, index) => (
                    <LeaderboardItem
                        key={index}
                        rank={player.rank}
                        username={player.username}
                        points={player.points}
                    />
                ))}
            </ul>           
        )
    }
}