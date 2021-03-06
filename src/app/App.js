import React, { Component } from 'react'
import SignIn from '../signIn/SignIn'
import Login from '../login/Login'
import './App.css'

const $ = window.$

const getJson = function (response) {
    return response.json()
}

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataGame: []
        }
    }

    componentWillMount() {
        fetch('http://web/api/game', {
            method: 'GET'
        })
            .then(res => res.json())
        
            .then(json => {
                this.setState({ dataGame: json })
            })
    }

    componentDidUpdate() {
        $('.carousel.carousel-slider').carousel({ fullWidth: true })
        $('.modal').modal()
    }

    render() {
        const games = this.state.dataGame
        const gameList = games.map(o => {
            return (
                <div key={o.ID_GAMES} className='carousel-item blue-grey darken-4 light-green-text accent-3'>
                    <div className='card-content'>
                        <div className='row margin-top-100'>
                            <div className='col s3 offset-s3'>
                                <img src='https://media.discordapp.net/attachments/407543861448015883/426521541476352001/image.jpg' className='images_petit'/>
                            </div>
                            <div className='col s3'>
                                <h2>{o.NAME_GAME}</h2>
                                <p className='white-text'>{o.DESCRIPTION_GAMES}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='carousel-fixed-item center'>
                                <a className='waves-effect waves-light btn pulse light-green btn-large' href='../../games/pong.html'>PLAY</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className='background'>
                <SignIn/>
                <Login {...this.props}/> {/* donne tout les props de app à login */}
                <div>
                    <div>
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
                </div>
                <div >
                    <div className='carousel carousel-slider center height-button' data-indicators='true'>
                        <div className='carousel-fixed-item center'/>
                        {gameList}
                    </div>
                </div>


{/*tes------------------------------------------*/}
{/*
                <div className='row'>
                    <div className='carousel-fixed-item center'>
                        <a className='waves-effect waves-light btn pulse light-green btn-large' href='/games/pong.html' target='_blank'>PLAY</a>
                    </div>
                </div>

*/}
{/*tes------------------------------------------*/}



                <div className='white margin-top-1'/>
                <div>
                    <footer className='page-footer blue-grey darken-4'>
                        <div className='row'>
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