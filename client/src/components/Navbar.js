import React from 'react'
// import PropTypes from 'prop-types'

const Navbar = (props) => {
    const { token } = props
    return (
        <div 
        onClick={props.navToggler}
        className={`nav nav-${props.navToggle ? "open" : "closed"}`}>
        <a href="/home">Home</a>
        <a href="/performances">Fire Spinning</a>
        <a href="/videos">Videos</a>
        <a href="/music">Music</a>
        <a href="/shop">Store</a>
        <a href="/contact">Contact</a>
        {/* <a href="/gallery">Gallery</a> */}
        {/* { !token && <a href="/signin">Login</a> } */}
        <a href="/signin">Login</a>
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