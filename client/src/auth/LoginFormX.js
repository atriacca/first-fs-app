import React from 'react'
// import PropTypes from 'prop-types'

const LoginForm = props => {
    const { handleChange, handleSubmit, inputs: { username, password }, btnText } = props
    return (
        <form onSubmit={handleSubmit} className="authForms">
            <div>>
                <h3>Login</h3>
                <input 
                    type="text" 
                    name="username" 
                    value={ username }
                    onChange={handleChange} 
                    placeholder="Username"/>
                <input 
                    type="password" 
                    name="password" 
                    value={ password }
                    onChange={handleChange} 
                    placeholder="Password"/>
            </div>
                <button>{ btnText }</button>
        </form>
    )
}

// LoginForm.propTypes = {
//     handleChange:       PropTypes.func.isRequired,
//     handleSubmit:       PropTypes.func.isRequired,
//     inputs:             PropTypes.shape({
//         username:           PropTypes.string.isRequired,
//         password:           PropTypes.string.isRequired,
//         firstName:           PropTypes.string.isRequired,
//         // lastName:           PropTypes.string.isRequired,
//         email:           PropTypes.string.isRequired
//     }).isRequired,
//     btnText:            PropTypes.string.isRequired
// }

export default LoginForm