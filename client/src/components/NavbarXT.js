import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const Navbar = (props) => {
    const { login, signup, logout } = props
    return (
        <div 
        onClick={props.navToggler}
        className={`nav nav-${props.navToggle ? "open" : "closed"}`}>
        <a href="/">Home</a>
        <a href="/performances">Fire Spinning</a>
        <a href="/videos">Videos</a>
        <a href="/music">Music</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
        {/* <Link to="/auth">Login/Sign Up</Link> */}
        {
            !props.token ?
                <>
                    <Link to="/auth">Login/Sign Up</Link>
                </>
            :
                <>
                    <Link onClick={() => props.logout()} to="/">Logout</Link>
                    {/* <div className="nav-link">
                        <button onClick={() => props.logout()}>Logout</button>
                    </div> */}
                </>
            }
    </div>
    )
}

// Navbar.propTypes = {
//     login:      PropTypes.func,
//     signup:     PropTypes.func,
//     logout:     PropTypes.func
// }

export default Navbar
/*
        <div className="navbar">
            <Link to="/orders">Order Page</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={login}>Login</button>
            <button onClick={signup}>Sign Up</button>
            <button onClick={logout}>Logout</button>
        </div>
*/