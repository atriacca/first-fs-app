import React, { Component } from "react";
import axios from "axios";
const orderAxios = axios.create();

orderAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            orders: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        this.getOrders();
    }

    getOrders = () => {
        return orderAxios.get("/api/orders")
            .then(response => {
                this.setState({ orders: response.data });
                return response;
            })
    }

    addOrder = (newOrder) => {
        return orderAxios.post("/api/orders/", newOrder)
            .then(response => {
                this.setState(prevState => {
                    return { orders: [...prevState.orders, response.data] }
                });
                return response;
            })
    }

    editOrder = (orderId, order) => {
        return orderAxios.put(`/api/orders/${orderId}`, order)
            .then(response => {
                this.setState(prevState => {
                    const updatedOrders = prevState.orders.map(order => {
                        return order._id === response.data._id ? response.data : order
                    })
                    return { orders: updatedOrders }
                })
                return response;
            })
    }

    deleteOrder = (orderId) => {
        return orderAxios.delete(`/api/orders/${orderId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedOrders = prevState.orders.filter(order => {
                        return order._id !== orderId
                    })
                    return { orders: updatedOrders }
                })
                return response;
            })
    }

    signup = (userInfo) => {
        return orderAxios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    login = (credentials) => {
        return orderAxios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                this.getOrders();
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            orders: [],
            user: {},
            token: ""
        })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    getOrders: this.getOrders,
                    addOrder: this.addOrder,
                    editOrder: this.editOrder,
                    deleteOrder: this.deleteOrder,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    ...this.state
                }}
            >

                {this.props.children}

            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}