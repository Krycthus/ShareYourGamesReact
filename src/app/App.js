import React, { Component } from 'react'
import SignIn from '../signIn/SignIn'
import Login from '../login/Login'
import './App.css'

const $ = window.$

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataGame: []
        }
        this.fetchDataGame = this.fetchDataGame.bind(this)
    }

    componentWillMount() {
        this.fetchDataGame()
    }

    componentDidMount() {
        $('.carousel.carousel-slider').carousel({ fullWidth: true })
        $('.modal').modal()
    }

    fetchDataGame() {
        /*fetch('http://localhost/api/game', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            this.setState({ dataGame: json })
        })*/

        /* TEST Fetch*/
        const json = [
            { ID_GAMES: '0', NAME_GAME: 'First Game', DESCRIPTION_GAMES: 'This is your first Game' },
            { ID_GAMES: '1', NAME_GAME: 'Second Game', DESCRIPTION_GAMES: 'This is your second Game' },
            { ID_GAMES: '2', NAME_GAME: 'Third Game', DESCRIPTION_GAMES: 'This is your third Game' },
            { ID_GAMES: '3', NAME_GAME: 'Fourth Game', DESCRIPTION_GAMES: 'This is your fourth Game' }
        ]
        this.setState({ dataGame: json })
    }

    render() {
        console.log(this.props)
        const games = this.state.dataGame
        console.log(games)
        const gameList = games.map(o => {
            return (
                <div key={o.ID_GAMES} className='carousel-item blue-grey darken-4 light-green-text accent-3'>
                    <div className='card-content'>
                        <div className='row margin-top-100'>
                            <div className='col s3 offset-s3'>
                                <img src='https://avatars0.githubusercontent.com/u/22610971?s=460&v=4' className='images_petit'/>
                            </div>
                            <div className='col s3'>
                                <h2>{o.NAME_GAME}</h2>
                                <p className='white-text'>{o.DESCRIPTION_GAMES}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        const gameListAccount = games.map(o => {
            return (
                <li>
                    <div className='collapsible-header card-panel teal lighten-2'><i className='material-icons'>play_circle_outline</i>{o.NAME_GAME}</div>
                    <div className='collapsible-body'><span>{o.DESCRIPTION_GAMES}</span></div>
                </li>
            )
        })
        console.log(gameList)
        console.log(gameListAccount)

        return (
            <div>
                <div>
                    <SignIn/>
                    <Login {...this.props}/> {/* donne tout les props de app à login */}
                    <nav>
                        <div className='nav-wrapper blue-grey'>
                            <a href='' className='brand-logo margin-left-30'>ShareYourGames</a>
                            <ul id='nav-mobile' className='right hide-on-med-and-down'>
                                <a className='waves-light btn-flat text-white modal-trigger blue-grey' href='#Modal_Register'>Register</a>
                                <a className='waves-light btn-flat modal-trigger text-white blue-grey' href='#Modal_Login'>Login</a>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className='carousel carousel-slider center height-button' data-indicators='true'>
                    <div className='carousel-fixed-item center'>
                        <div className='waves-effect waves-light btn pulse light-green btn-large'>PLAY</div>
                    </div>
                    {gameList}
                </div>

                <div className='white margin-top-1'/>

                <div>
                    <footer className='page-footer blue-grey darken-4'>
                        <div className='row test'>
                            <div className='col l6 s12'>
                                <h5 className='margin-left-30 white-text'>NEYTAU Studio</h5>
                                <p className='margin-left-30 grey-text text-lighten-4'>
                                    Game development and distribution company
                                </p>
                            </div>
                            <div className='col l4 offset-l2 s12'>
                                <div className='margin-right-30 white-text text'>
                                    Thibault ROBERT<br />
                                    Pierre BARABE<br />
                                    Jérémy BOISDRON
                                </div>
                            </div>
                        </div>
                        <div className='footer-copyright blue-grey'>
                            © 2017 Copyright ShareYourGames
                            <a className='grey-text text-lighten-4 right' href='#!'>More Links</a>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default App