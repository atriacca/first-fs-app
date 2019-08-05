import React from 'react'
import AuthForm from './AuthForm.js'
import Logout from './Logout.js'
import TopNav from './TopNav.js'
import Form from '../shared/Form.js'
import Toggle from '../shared/Toggle.js'
// import PropTypes from 'prop-types'
import { withUser } from '../context/UserProvider.js'

const Auth = props => {
    const { signup, login, authErr, token, logout } = props
    return (
        <div className="auth">
            {/* { token ? <TopNav logout={logout}/> : */}
            { token ? <Logout logout={logout}/> :
             <Toggle render={({on, toggler}) => 
             !on ?
                <>
                    <Form 
                        inputs={{ username: "", password: "" }}
                        submit={inputs => login(inputs)}
                        render={formProps => <AuthForm {...formProps} btnText="Login"/>}
                    />
                    <p style={{ color: "red" }}>{authErr}</p>
                    <button onClick={toggler}>Go to new account page</button>
                </>
                :
                <>
                    <Form 
                        inputs={{ username: "", password: "" }}
                        submit={inputs => signup(inputs)}
                        render={formProps => <AuthForm {...formProps} btnText="Sign Up"/>}
                    />
                    <p style={{ color: "red" }}>{authErr}</p>
                    <button onClick={toggler}>Go to login page</button>
                </>
            }/>
        }
        </div>
    )
}

// Auth.propTypes = {
//     authErr: PropTypes.string.isRequired,
//     signup: PropTypes.func.isRequired,
//     login: PropTypes.func.isRequired,
// }

export default withUser(Auth)