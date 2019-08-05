import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import About from "./components/About.js"
import Gallery from "./components/Gallery.js"
import Header from "./components/Header.js"
import Menu from "./components/Menu.js"
import Videos from "./components/Videos.js"
import Music from "./components/Music.js"
import Contact from "./components/Contact.js"
import Performances from "./components/Performances.js"
import Shop from "./components/Shop.js"
import FullCard from "./components/FullCard.js"
import FacebookTile from "./components/FacebookTile.js"
import Auth from "./auth/Auth.js"
import { withUser } from "./context/UserProvider.js"
// import ProtectedRoute from './shared/ProtectedRoute.js'
// import PropTypes from 'prop-types'

const App = props => {
    const { user: {username, _id}, token, logout } = props
    return (
        <div>
            <Menu />
            <div>
                { token && <Auth logout={logout}/> }
                <Header />
                <Switch>
                    {/* <Route exact path="/" render={rProps => !token ? <Auth {...rProps}/> : <Redirect to="/home"/>} /> */}
                    <Route exact path="/" token={token}
                        component={About}
                        redirectTo="/" />
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
                    <Route 
                        path="/gallery" 
                        token={token}
                        component={Gallery}
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