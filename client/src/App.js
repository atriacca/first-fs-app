import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Videos from "./components/Videos"
import Music from "./components/Music"
import Contact from "./components/Contact"
import Performances from "./components/Performances"
import Shop from "./components/Shop"
import FullCard from "./components/FullCard"
import FacebookTile from "./components/FacebookTile"
import Auth from "./auth/Auth"
import { withUser } from './context/UserProvider'
import ProtectedRoute from './shared/ProtectedRoute.js'
// import PropTypes from 'prop-types'

const App = (props) => {
    const { user: {username, _id}, token, logout } = props
    return (
        <div>
            <Menu />
            <div>
                { token && <Auth logout={logout}/> }
                <Header />
                <Switch>
                    <Route exact path="/" render={rProps => !token ? <Auth {...rProps}/> : <Redirect to="/home"/>} />
                    <Route 
                        path="/home" 
                        token={token}
                        component={About}
                        redirectTo="/"
                    />
                    <Route 
                        path="/videos" 
                        token={token}
                        component={Videos}
                        redirectTo="/"
                    />
                    <Route 
                        path="/music" 
                        token={token}
                        component={Music}
                        redirectTo="/"
                    />
                    <Route 
                        path="/contact" 
                        token={token}
                        component={Contact}
                        redirectTo="/"
                    />
                    {/* <ProtectedRoute 
                        path="/shop" 
                        token={token}
                        component={Shop}
                        redirectTo="/"
                    /> */}
                    {/* <Route exact path="/shop" render={rProps => token ? <Shop /> : <Redirect to="/" />} /> */}
                    <Route 
                        exact path="/shop"  
                        token={token}
                        component={Shop}
                        redirectTo="/"
                    />
                    <Route 
                        path="/performances" 
                        token={token}
                        component={Performances}
                        redirectTo="/"
                    />
                    <Route path="/shop/:_id" component={FullCard} />
                    <Route 
                        path="/signin" 
                        token={token}
                        component={Auth}
                        redirectTo="/"
                    />
                </Switch>
                <FacebookTile />
            </div>
        </div>
    )
}

// App.propTypes = {
//     user: PropTypes.shape({
//         username:    PropTypes.string,
//         _id:         PropTypes.string,
//         token:           PropTypes.string,
//         logout:          PropTypes.func
//     }),
// }

export default withUser(App)