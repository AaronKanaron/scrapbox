import React from 'react'
import SortIcon from "../molecules/Icons";

import LeaderboardItem from '../atoms/LeaderboardItem'
import OutlineButton from '../atoms/OutlineButton'

const player = [
    {
        rank: 1,
        username: 'AaronKanaron',
        points: 735,
        pmounts: 23,
        words: 2544
    },
    {
        rank: 2,
        username: 'AaronKanaron',
        points: 735,
        pmounts: 23,
        words: 2544
    },
    {
        rank: 3,
        username: 'AaronKanaron',
        points: 735,
        pmounts: 23,
        words: 2544
    },
    // {
    //     rank: 2,
    //     username: 'ChildCombustor',
    //     points: 50
    // },
    // {
    //     rank: 3,
    //     username: 'GloblingBost',
    //     points: 20
    // },
    // {
    //     rank: 4,
    //     username: 'PotatoBuster',
    //     points: 10
    // },
    // {
    //     rank: 5,
    //     username: 'NaseemHamed',
    //     points: 10
    // }
    // ,{
    //     rank: 6,
    //     username: 'PotatoBuster',
    //     points: 10
    // },
    // {
    //     rank: 7,
    //     username: 'NaseemHamed',
    //     points: 10
    // }
    // ,{
    //     rank: 8,
    //     username: 'PotatoBuster',
    //     points: 10
    // },
    // {
    //     rank: 9,
    //     username: 'NaseemHamed',
    //     points: 10
    // }
    // ,{
    //     rank: 10,
    //     username: 'PotatoBuster',
    //     points: 10
    // },
    // {
    //     rank: 11,
    //     username: 'NaseemHamed',
    //     points: 10
    // }
    // ,{
    //     rank: 12,
    //     username: 'PotatoBuster',
    //     points: 10
    // },
    // {
    //     rank: 13,
    //     username: 'NaseemHamed',
    //     points: 10
    // }
]


export default class Leaderboard extends React.PureComponent {

    renderLeaderboard() {
        if (player.length > 0) {
            return (
                <React.Fragment>
                    <div className="sorttabs-container">
                        <div className="sorttabs large">
                            <h1>Friends</h1>
                        </div>
                        <div className="sorttabs">
                            <div className="sorttab">
                                <SortIcon color="white"/>
                                <h2>Pmounts</h2>
                            </div>
                            <div className="sorttab">
                                <SortIcon color="white"/>
                                <h2>Words</h2>
                            </div>
                            <div className="sorttab active">
                                <SortIcon color="white"/>
                                <h2>Points</h2>
                            </div>
                        </div>
                    </div>
                    <ul className="leaderboard">
                        {
                            this.renderItems()
                        }
                        <li className="leaderboard-item">
                            <div className="divider large">
                                <p className='rank'>Invite Your Friends!</p>
                                
                            </div>
                        </li>
                    </ul>
                </React.Fragment>
            )
        } else {
            return (
                <div className='add-friends'>
                    <p>Sign in and invite your friends to see leaderboards!</p>
                    <OutlineButton buttonText='Sign in'/>
                </div>
            )
        }
    }

    renderItems = () => {
        return player.map((player, index) => {
            return (
                <LeaderboardItem
                    key={index}
                    rank={player.rank}
                    username={player.username}
                    points={player.points}
                    words={player.words}
                    pmounts={player.pmounts}
                />
            )
        })
    }

    render() {
        return (
            <section className="leaderboards" ref={this.scrollIntoViewElement}>
                <fieldset className="container">
                    <legend>leaderboard</legend>
                        {
                            this.renderLeaderboard()
                        }
                </fieldset>
            </section> 
        )
    }
}