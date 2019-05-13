import React from 'react'
import { Route, Switch, Link, Redirect } from "react-router-dom"
import About from "./components/About"
import Navbar from "./components/Navbar"
// import Profile from './components/xProfile'
import Header from "./components/Header"
import Menu from "./components/Menu"
import Videos from "./components/Videos"
import Music from "./components/Music"
import Contact from "./components/Contact"
import Performances from "./components/Performances"
import Shop from "./components/Shop"
import FacebookTile from "./components/FacebookTile"
// import OrderPage from "./components/xOrderPage"
import Auth from "./auth/Auth"
import { withUser } from './context/UserProvider'
// import ProtectedRoute from "./auth/ProtectedRoute"
// import PropTypes from 'prop-types'

const App = (props) => {
    const { user: {username, _id}, token, logout } = props
    return (
        <div>
            <Menu />
            {/* <Menu navToggler={this.navToggler} navToggle={this.state.navToggle}/> */}
            <div>
            <Header />
            { token && <Navbar logout={logout}/> }
            <Switch>
                <Route exact path="/" component={About}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/videos" component={Videos}/>
                <Route path="/music" component={Music}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/performances" component={Performances}/>
                {/* <Route exact path="/"  render={rProps => !token ? <Auth {...rProps}/> : <Redirect to="/orders"/>} /> */}
                {/* <ProtectedRoute 
                    path="/orders"
                    token={token}
                    component={OrderPage}
                    redirectTo="/"
                /> */}
                {/* <ProtectedRoute 
                    path="/profile"
                    token={token}
                    component={Profile}
                    redirectTo="/"
                    username={username}/> */}
            </Switch>
        </div>
        <FacebookTile />
            {/* <Switch>
                <Route About />
                <Route exact path={"/"} render={() => !props.token ? <Auth /> : <Redirect to="/orders" />} />
                <Route path="/signup" component={Signup}/>
                <ProtectedRoute path="/" component={Orders}/>
            </Switch> */}
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