import React from 'react'

const Header = () => {
    const styles = {
        display: 'flex',
        flex: "1 1 0",
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    return (
        <div className="sep">
            <a href="https://allredfiretribe.wordpress.com" target='_blank' rel="noopener noreferrer"><img src="https://allredfiretribe.files.wordpress.com/2018/08/cropped-allredfiretribe011.jpg" alt="not rendered"/></a>
            <div className="header" style={styles}>
            <a href="/">HOME</a>
            <a href="/performances">FIRE SPINNING</a>
            <a href="/videos">YOUTUBE</a>
            <a href="/music">MUSIC</a>
            <a href="/shop">ALLREDFIRETRIBE SHOP</a>
            <a href="/contact">CONTACT</a>
            </div>
            {/* <div><Link to="/about">About</Link></div> */}
        </div>
    )
}

export default Header