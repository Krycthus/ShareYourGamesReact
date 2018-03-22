import React, { Component } from 'react'
import './Account.css'

class Account extends Component {

    constructor(props){
        super(props)
        this.state = {
          dataAccount: []
        }
        this.fetchDataAccount = this.fetchDataAccount.bind(this)
        this.logoutAccount = this.logoutAccount.bind(this)
    }

    componentWillMount() {
        this.fetchDataAccount()
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
        const json = [
            { value: '0', title: 'Firstprout Game', label: 'This is your first Game' },
            { value: '1', title: 'Second Game', label: 'This is your second Game' },
            { value: '2', title: 'Third Game', label: 'This is your third Game' },
            { value: '3', title: 'Fourth Game', label: 'This is your fourth Game' }
        ]
        this.setState({ dataAccount: json })
    }

    logoutAccount() {
        this.props.history.push('/')
        {alert('Deconnected')}
    }

    render() {
        const gameAccount = this.state.dataAccount
        const gameListAccount = gameAccount.map(o => {
            return (
                <li key={o.value}>
                    <div className='collapsible-header card-panel teal light-green'><i className='material-icons'>play_circle_outline</i>{o.title}</div>
                    <div className='collapsible-body'><span>{o.label}</span></div>
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
                                    <input id='game_name' type='text' className='validate'/>
                                    <label htmlFor='game_name'>Game's Name</label>
                                </div>
                            </div>
                        </div>
                        <div className='row no-margin'>
                            <div className='margin-left-50 margin-right-50'>
                                <div className='input-field col s12'>
                                    <textarea id='description' className='materialize-textarea'></textarea>
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
                        <button className='btn waves-effect waves-light margin-right-absolute-50' type='submit' name='action'>Submit
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



