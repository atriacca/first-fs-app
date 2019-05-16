import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

const Logout = props => {
    const { logout } = props
    const styles = {
        display: 'flex',
        flex: "1 1 0",
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    return (
        <div className="top-nav" style={styles}>
            <MediaQuery query="(min-width: 800px)">
                <a href="/">HOME</a>
                <a href="/performances">FIRE SPINNING</a>
                <a href="/videos">VIDEOS</a>
                <a href="/music">MUSIC</a>
                <a href="/shop">SHOP</a>
                <a href="/contact">CONTACT</a>
            </MediaQuery>
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}

Logout.propTypes = {
    username: PropTypes.string
}

export default Logout