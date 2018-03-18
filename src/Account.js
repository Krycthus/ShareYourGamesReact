import React, { Component } from 'react'
import './Account.css'

class Account extends Component {

    constructor(props){
        super(props)
        this.state = {
          dataAccount: []
        }
        this.fetchDataAccount = this.fetchDataAccount.bind(this)
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

    render() {
        const gameAccount = this.state.dataAccount
        console.log(gameAccount)
        const gameListAccount = gameAccount.map(o => {
            return (
                <li>
                    <div className='collapsible-header'><i className='material-icons'>filter_drama</i>{o.title}</div>
                    <div className='collapsible-body'><span>{o.label}</span></div>
                </li>
            )
        })

        return (
            <ul className='collapsible' data-collapsible='accordion'>
                {gameListAccount}
            </ul>
        )
    }
}

export default Account



