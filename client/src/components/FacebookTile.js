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
                <a className="fb1" href="https://www.facebook.com/firespinning/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/c33.0.200.200a/p200x200/56214439_2301241610132448_3864521567606145024_n.jpg?_nc_cat=108&_nc_oc=AQm-hJl_Q5ToFYrBarWeZLb1sQftqY9mkcMgEMUddF6Y9ngRmy9s1N53xqN1Wtjj47g&_nc_ht=scontent-sjc3-1.xx&oh=4491d5b4f3fdaf0310a7245118c32902&oe=5E21940A" alt="not rendered"/>
                
                {/* 
                <a href="https://www.facebook.com/firespinning/"><img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/c33.0.200.200a/p200x200/56214439_2301241610132448_3864521567606145024_n.jpg?_nc_cat=108&_nc_oc=AQm-hJl_Q5ToFYrBarWeZLb1sQftqY9mkcMgEMUddF6Y9ngRmy9s1N53xqN1Wtjj47g&_nc_ht=scontent-sjc3-1.xx&oh=4491d5b4f3fdaf0310a7245118c32902&oe=5E21940A" alt="not rendered"/></a>
                
                <a className="fb1" href="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/c33.0.200.200a/p200x200/56214439_2301241610132448_3864521567606145024_n.jpg?_nc_cat=108&_nc_oc=AQm-hJl_Q5ToFYrBarWeZLb1sQftqY9mkcMgEMUddF6Y9ngRmy9s1N53xqN1Wtjj47g&_nc_ht=scontent-sjc3-1.xx&oh=4491d5b4f3fdaf0310a7245118c32902&oe=5E21940A" target="_blank" rel="noopener noreferrer"> 
                <a className="fb1" href="https://www.facebook.com/Ripple-Effect-SLC-2320185781568649/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/54393329_2320206888233205_5512886898634260480_o.jpg?_nc_cat=108&_nc_oc=AQkTl7k23odXRYMNe-HxlpNVeNB6CHeKYAsGbKHGos09BhQimDfG1KH8FDe4D2IaXgU&_nc_ht=scontent-sjc3-1.xx&oh=92c979027cde24cc071601d929bd14dd&oe=5E652CEF" alt="not rendered"/>
                */}

                    <h2>Clayton Allred Fire Spinning</h2></a>
                <a className="fb2" href="https://www.facebook.com/Ripple-Effect-SLC-2320185781568649/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/54393329_2320206888233205_5512886898634260480_o.jpg?_nc_cat=108&_nc_oc=AQkTl7k23odXRYMNe-HxlpNVeNB6CHeKYAsGbKHGos09BhQimDfG1KH8FDe4D2IaXgU&_nc_ht=scontent-sjc3-1.xx&oh=92c979027cde24cc071601d929bd14dd&oe=5E652CEF" alt="not rendered"/>
                    <h2 className="fb2">Ripple Effect SLC</h2></a>
            </div>
            </div>
                <img className="andSoItIs" src="https://allredfiretribe.files.wordpress.com/2018/08/back.jpg?" alt="not rendered"/>
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