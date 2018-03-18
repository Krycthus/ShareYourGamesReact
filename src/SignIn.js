import React, { Component } from 'react'
import './SignIn.css'

class SignIn extends Component {
    render() {
        return (
            <div id='Modal_Register' className='modal'>
                <div className='modal-content nav-wrapper'>
                    <h4 className='text-dark'>ACCOUNT</h4>
                    <div className='row'>
                        <form className='col s12'>
                            <div className='row'>
                                <div className='input-field label col s6'>
                                    <input id='username1' type='text' className='validate'/>
                                    <label for='username'>Username</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field label col s6'>
                                    <input id='password1' type='password' className='validate'/>
                                    <label for='password'>Password</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='email' type='email' className='validate'/>
                                    <label for='email'>Email</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='modal-footer nav-wrapper'>
                        <a href='#!' className='modal-action modal-close waves-effect waves-green btn'>Save</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn