import React from 'react'
import { Route, Switch, Link, Redirect } from "react-router-dom"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Profile from './components/Profile'
import Header from "./components/Header"
import OrderPage from "./components/OrderPage"
import Auth from "./auth/Auth"
import LoginForm from "./auth/LoginForm"
import { withUser } from './context/UserProvider.js'
// import { withContext } from "./AppContextProvider"
import ProtectedRoute from "./auth/ProtectedRoute"
import PropTypes from 'prop-types'

const App = (props) => {
    const { user: {username, _id}, token, logout } = props
    return (
        <div>
            <div>
            { token && <Navbar logout={logout}/> }
            <Header />
            <Switch>
                <Route exact path="/"  render={rProps => !token ? <Auth {...rProps}/> : <Redirect to="/orders"/>} />
                <ProtectedRoute 
                    path="/orders"
                    token={token}
                    component={OrderPage}
                    redirectTo="/"
                />
                <ProtectedRoute 
                    path="/profile"
                    token={token}
                    component={Profile}
                    redirectTo="/"
                    username={username}/>
            </Switch>
            <About />
        </div>
            {/* <Switch>
                <Route About />
                <Route exact path={"/"} render={() => !props.token ? <Auth /> : <Redirect to="/orders" />} />
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={LoginForm}/>
                <ProtectedRoute path="/" component={Orders}/>
            </Switch> */}
        </div>
    )
}

export default withUser(App)
// export default withContext(App)