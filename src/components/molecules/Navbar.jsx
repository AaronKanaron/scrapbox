import React from 'react'



export default class Navbar extends React.PureComponent {
    constructor (props) {
        super(props);
    }
    //show navbar after 50 view height scrolled
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.querySelector(`#${this.props.page}`).classList.add('active');
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        //after window height / 2 < window.scrollY
        if (window.scrollY > window.innerHeight / 1.6) {
            // add class when rendered
            document.querySelector('.navbar').classList.add('navbar--scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('navbar--scrolled');
        }
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar__logo">
                    <img src="./logo-white.svg" alt="Netflix Logo" />
                </div>
                <ul className="navbar__links">
                    {/* {this.props.links.map((linkname, destination) => <li><a href={destination}>{linkname}</a></li>)} */}
                    
                    <li>
                        <a href='/home' id='home'>Home</a>
                    </li>
                    <li>
                        <a href='/home' id='about'>About</a>
                    </li>
                    <li>
                        <a href='/home'>About</a>
                    </li>
                </ul>
                <div className="navbar__user">
                    <p>FoxyDealStear</p>
                    <a href="user/self">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Avatar" />
                    </a>
                </div>
            </nav>
        )
    }
}


