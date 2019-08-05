import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()
const orderAxios = axios.create()

// Adds the JSON web token a the Authorization header on all outgoing requests when using 'orderAxios'
orderAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            orders: [],
            authErr: ""
        }
    }

    signup = credentials => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                this.setState({ 
                    user, 
                    token 
                })
            })
            .catch(err => this.handleAuthErr(err))
    }

    login = credentials => {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                this.setState({ 
                    user, 
                    token 
                })
            })
            .catch(err => this.handleAuthErr(err))
    }

    logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        this.setState({
            orders: [],
            user: {},
            token: ""
        })
    }

    handleAuthErr = err => {
        this.setState({
            authErr: err.response.data.errMsg
        })
    }

    // componentDidMount() {
    //     this.getOrders()
    // }

    getOrders = () => {
        orderAxios.get("/api/orders")
        .then(res => {
            this.setState({ orders: res.data })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    
    addOrder = newOrder => {
        orderAxios.post("/api/orders", newOrder)
            .then(res => {
                this.setState(prevState => ({
                    orders: [...prevState.orders, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    
    render(){
        return(
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    addOrder: this.addOrder,
                    getOrders: this.getOrders
                }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default UserProvider

export const withUser = C => props => (
    <UserContext.Consumer>
        { value =>  <C {...value} {...props}/> }
    </UserContext.Consumer>
)
