import React from 'react'

const FacebookTile = () => {
    const styles = {
        display: 'flex',
        flex: "1 1 0",
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '5em 0 0 0',
        // backgroundColor: 'violet',
        fontFamily: 'Verdana'
    }
    return (
        <div style={styles} className="fb-wrapper">
            <div>
            <div className="fb">
                <p>CONNECT ON FACEBOOK:</p>
                <a className="fb1" href="https://www.facebook.com/firespinning/" target="_blank" rel="noopener noreferrer">
                    <h2>Clayton Allred Fire Spinning</h2></a>
                <a className="fb2" href="https://www.facebook.com/Ripple-Effect-SLC-2320185781568649/" target="_blank" rel="noopener noreferrer">
                    <h2>Ripple Effect SLC</h2></a>
            </div>
            </div>
                <img src="https://allredfiretribe.files.wordpress.com/2018/08/back.jpg?" alt="not rendered"/>
        </div>
    )
}

export default FacebookTile
/*
        <div style={styles}>
            <div className="fb-wrapper">
            <div className="fb">
                <p>CONNECT ON FACEBOOK:</p>
                <a className="fb1" href="https://www.facebook.com/firespinning/" target="_blank" rel="noopener noreferrer">
                    <h2>Clayton Allred Fire Spinning</h2></a>
                <a className="fb2" href="https://www.facebook.com/Ripple-Effect-SLC-2320185781568649/" target="_blank" rel="noopener noreferrer">
                    <h2>Ripple Effect SLC</h2></a>
            </div>
                <img src="https://allredfiretribe.files.wordpress.com/2018/08/back.jpg?" alt="not rendered"/>
            </div>
        </div>
*/