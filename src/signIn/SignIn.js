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
                                    <input id='username_signIn' type='text' className='validate'/>
                                    <label htmlFor='username_signIn'>Username</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field label col s6'>
                                    <input id='password_signIn' type='password' className='validate'/>
                                    <label htmlFor='password_signIn'>Password</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='email_signIn' type='email' className='validate'/>
                                    <label htmlFor='email_signIn'>Email</label>
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