import React from 'react'

import LeaderboardItem from '../atoms/LeaderboardItem'

const player = [
    {
        rank: 1,
        username: 'UraniumConsumer',
        points: 100
    },
    {
        rank: 2,
        username: 'ChildCombustor',
        points: 50
    },
    {
        rank: 3,
        username: 'GloblingBost',
        points: 20
    },
    {
        rank: 4,
        username: 'PotatoBuster',
        points: 10
    },
    {
        rank: 5,
        username: 'NaseemHamed',
        points: 10
    }
    ,{
        rank: 6,
        username: 'PotatoBuster',
        points: 10
    },
    {
        rank: 7,
        username: 'NaseemHamed',
        points: 10
    }
    ,{
        rank: 8,
        username: 'PotatoBuster',
        points: 10
    },
    {
        rank: 9,
        username: 'NaseemHamed',
        points: 10
    }
    ,{
        rank: 10,
        username: 'PotatoBuster',
        points: 10
    },
    {
        rank: 11,
        username: 'NaseemHamed',
        points: 10
    }
    ,{
        rank: 12,
        username: 'PotatoBuster',
        points: 10
    },
    {
        rank: 13,
        username: 'NaseemHamed',
        points: 10
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