import React from 'react'
// import PropTypes from 'prop-types'

const AuthForm = props => {
    const { handleChange, handleSubmit, inputs: { username, password }, btnText } = props
    const styles = {
        display: 'flex',
        flex: "1 1 0",
        flexDirection: 'row',
        justifyContent: 'space-around',
        size: "50",
        textAlign: "center"
    }
    return (
        <div>
            <h3>You need not create an account or login to access any parts of this site.</h3>
            <div style={styles}>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        value={ username }
                        onChange={handleChange} 
                        placeholder="Username"/>
                    <input 
                        type="text" 
                        name="password" 
                        value={ password }
                        onChange={handleChange} 
                        placeholder="Password"/>
                    <button>{ btnText }</button>
                </form>
            </div>
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