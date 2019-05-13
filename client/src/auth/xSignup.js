import React, { Component } from 'react'
import { withContext } from "../AppContextProvider"

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signup(this.state)
            .then(() => this.props.history.push("/home"))
            .catch(err => {
                // this.setState({errorMessage: err.response.data.message})
            })
    }
/*
        .then(() => this.clearInputs())
        .catch(err => {
            this.setState({errorMessage: err.data})
        })
}
*/
    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.state.firstName}
                        name="firstName"
                        type="text"
                        placeholder="First name"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.lastName}
                        name="lastName"
                        type="text"
                        placeholder="Last name"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.email}
                        name="email"
                        type="email"
                        placeholder="Email address"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="Username"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="Password"/>
                    <button type="submit">Create Account</button>
                </form>

                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }

            </div>
        )
    }
}

export default withContext(Signup)