import React from 'react'
// import PropTypes from 'prop-types'

const AuthForm = props => {
    const { handleChange, handleSubmit, inputs: { firstName, lastName, email, username, password }, btnText } = props
    return (
        <div>
            <form onSubmit={handleSubmit} className="authForms">
                <h3>Create an account</h3>
                <div>
                    <input
                        type="text"
                        name="firstName"
                        value={ firstName }
                        onChange={handleChange}
                        placeholder="First name (required)"/>
                    <input
                        type="text"
                        name="lastName"
                        value={ lastName }
                        onChange={handleChange}
                        placeholder="Last name"/>
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={ email }
                        onChange={handleChange}
                        placeholder="Email address (required)"/>
                    </div>
                    <div>
                    <input 
                        type="text" 
                        name="username" 
                        value={ username }
                        onChange={handleChange} 
                        placeholder="Username (required)"/>
                    <input 
                        type="text" 
                        name="password" 
                        value={ password }
                        onChange={handleChange} 
                        placeholder="Password (required)"/>
                </div>
                <button>{ btnText }</button>
            </form>
        </div>
    )
}

// AuthForm.propTypes = {
//     handleChange:       PropTypes.func.isRequired,
//     handleSubmit:       PropTypes.func.isRequired,
//     inputs:             PropTypes.shape({
//         username:           PropTypes.string.isRequired,
//         password:           PropTypes.string.isRequired,
//         firstName:           PropTypes.string.isRequired,
//         lastName:           PropTypes.string,
//         email:           PropTypes.string.isRequired
//     }).isRequired,
//     btnText:            PropTypes.string.isRequired
// }

export default AuthForm