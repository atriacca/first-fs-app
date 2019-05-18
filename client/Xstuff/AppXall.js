import React from 'react'
import { Route, Switch } from "react-router-dom"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Videos from "./components/Videos"
import Music from "./components/Music"
import Contact from "./components/Contact"
import Performances from "./components/Performances"
import Shop from "./components/Shop"
import FacebookTile from "./components/FacebookTile"
import Auth from "./auth/Auth"
import { withUser } from './context/UserProvider'

const App = (props) => {
    const { token, logout } = props
    return (
        <div>
            <Menu />
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
            </Switch>
        </div>
        <FacebookTile />
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