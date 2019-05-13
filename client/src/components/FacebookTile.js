import React from 'react'

const FacebookTile = () => {
    const styles = {
        // margin: "50px 8px -45px 50px"
    }
    const styles1 = {
        fontFamily: "Arial",
        margin: '-20px 50px 30px 50px',
        padding: "175px 8px 8px 8px",
        color: 'white',
        height: "200px",
        width: "200px",
        display: 'flex',
        flexDirection: 'row',        
        backgroundSize: "100%",
        backgroundImage: `url("https://scontent.fslc1-1.fna.fbcdn.net/v/t1.0-0/c33.0.200.200a/p200x200/56214439_2301241610132448_3864521567606145024_n.jpg?_nc_cat=108&_nc_ht=scontent.fslc1-1.fna&oh=d49759cb3fc5e4e6b0b6fa6c45660b51&oe=5D5BD30A")`
    }
    const styles2 = {
        fontFamily: "Arial",
        margin: '0px 50px 50px 50px',
        padding: "3px 8px 8px 48px",
        color: 'black',
        height: "111px",
        width: "200px",
        display: 'flex',
        flexDirection: 'row',        
        backgroundSize: "100%",
        backgroundImage: `url("https://scontent.fslc1-1.fna.fbcdn.net/v/t1.0-9/54393329_2320206888233205_5512886898634260480_o.jpg?_nc_cat=108&_nc_ht=scontent.fslc1-1.fna&oh=351f77f9cae85f598696ea678bf6d2e2&oe=5D77DEEF")`
    }
    return (
        <div>
            <p>CONNECT ON FACEBOOK:</p>
            <a href="https://www.facebook.com/firespinning/" target="_blank" rel="noopener noreferrer"><div style={styles1} className="fb">Clayton Allred Fire Spinning</div></a>
            <a href="https://www.facebook.com/Ripple-Effect-SLC-2320185781568649/" target="_blank" rel="noopener noreferrer"><div style={styles2} className="fb">Ripple Effect SLC</div></a>
        </div>
    )
}

export default FacebookTile