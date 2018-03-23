import React, { Component } from 'react'
import './Account.css'
import { concat } from 'lodash'

class Account extends Component {

    constructor(props){
        super(props)
        this.state = {
            dataAccount: [],
            status: '',
            games: [],
            name: '',
            descr: ''
        }
        this.fetchDataAccount = this.fetchDataAccount.bind(this)
        this.logoutAccount = this.logoutAccount.bind(this)
        this.refreshPage = this.refreshPage.bind(this)
    }

    componentWillMount() {
        this.fetchDataAccount()
    }

    refreshPage() {
        this.setState(prevState => {
            prevState.games.push({ 
                ID_GAMES: prevState.games.length, 
                NAME_GAME: prevState.name, 
                DESCRIPTION_GAMES: prevState.descr 
            })
            prevState.name = ''
            prevState.descr = ''
            return prevState
        })
    } 

    onChange(k, e) {
        const obj = {}
        obj[k] = e.target.value
        this.setState(obj)
    }

    fetchDataAccount() {
        /*fetch('myroute', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            this.setState({ dataAccount: json })
        })*/

        /* TEST Fetch*/
        const userActive = localStorage.getItem('MAIL')
        if(userActive === 'pierre@gmail.com') {
            const json = [
                { ID_GAMES: '2', NAME_GAME: 'Kingdom come : Deliverance', DESCRIPTION_GAMES: 'Medieval' }
            ]
            this.setState({ dataAccount: json })
        }
        if(userActive === 'jeremy@gmail.com') {
            const json = [
                { ID_GAMES: '0', NAME_GAME: 'Neytau', DESCRIPTION_GAMES: 'Un jeu génial' }
            ]
            this.setState({ dataAccount: json })
        }
    }

    logoutAccount() {
        this.props.history.push('/')
        localStorage.clear()
        {alert('Deconnected')}
    }

    render() {
        const gameAccount = this.state.dataAccount
        const gameListAccount = concat(gameAccount, this.state.games).map(o => {
            return (
                <li key={o.ID_GAMES}>
                    <div className='collapsible-header card-panel teal light-green'><i className='material-icons'>play_circle_outline</i>{o.NAME_GAME}</div>
                    <div className='collapsible-body'><span>{o.DESCRIPTION_GAMES}</span></div>
                </li>
            )
        })

        return (
            <div>
                <div>
                    <nav>
                        <div className='nav-wrapper blue-grey'>
                            <a href='' className='brand-logo margin-left-30'>ShareYourGames</a>
                            <ul id='nav-mobile' className='right hide-on-med-and-down'>
                                <a className='waves-light btn-flat modal-trigger text-white blue-grey' href='#Modal_Logout' onClick={this.logoutAccount}>Logout</a>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='margin-left-150 margin-right-150 margin-top-50'>
                    <form action='#'>
                        <h3><u>Import Your Game</u></h3>
                        <div className='row no-margin'>
                            <div className='margin-left-50 margin-right-50'>
                                <div className='input-field col s6'>
                                    <input onChange={(e) => this.onChange('name', e)} value={this.state.name} id='game_name' type='text' className='validate'/>
                                    <label htmlFor='game_name'>Game's Name</label>
                                </div>
                            </div>
                        </div>
                        <div className='row no-margin'>
                            <div className='margin-left-50 margin-right-50'>
                                <div className='input-field col s12'>
                                    <textarea onChange={(e) => this.onChange('descr', e)} value={this.state.descr} id='description' className='materialize-textarea'></textarea>
                                    <label htmlFor='game_description'>Game's Description</label>
                                </div>
                            </div>
                        </div>
                        <div className='row no-margin'>
                            <div className='margin-left-50 margin-right-50'>
                                <div className='file-field input-field'>
                                    <div className='btn light-green btn-large'>
                                        <span>Picture</span>
                                        <input id='' type='file' multiple/>
                                    </div>
                                    <div className='file-path-wrapper'>
                                        <input className='file-path validate' type='text' placeholder='Import Your Picture Game'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row no-margin'>
                            <div className='margin-left-50 margin-right-50'>
                                <div className='file-field input-field'>
                                    <div className='btn light-green btn-large'>
                                        <span>File</span>
                                        <input type='file' multiple/>
                                    </div>
                                    <div className='file-path-wrapper'>
                                        <input className='file-path validate' type='text' placeholder='Import Your Game'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='btn waves-effect waves-light margin-right-absolute-50' type='submit' name='action' onClick={ this.refreshPage }>Submit
                            <i className='material-icons right'>send</i>
                        </button>
                    </form>
                    <h3 className='margin-top-100'><u>List Of Your Imported Games</u></h3>
                    <div className='row no-margin'>
                        <div className='margin-top-50 margin-left-50 margin-right-50'>
                            <ul className='collapsible' data-collapsible='accordion'>
                                {gameListAccount}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account