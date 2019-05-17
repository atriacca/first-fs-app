import React from 'react'
import Card from "./Card"
import product from "./product"
import { Link } from "react-router-dom"

const Shop = (props) => {

    const productComponents = product.map(item => 
        <Link 
            key={item._id} 
            to={`/shop/${item._id}`}>
            <Card 
            key={item._id} 
            product={item}/>
        </Link> )

    const { handleChange, handleSubmit, fullName, email, phone, website, comment } = props
      
    return (
        <div>
            <h1>Products</h1>
            <div className="shop">
                {productComponents}
            </div>
            <div className="xxx">
            <h5>“I think the big message is to Ignite and Unite with your local community and learn how to work with one another inspiring and empowering growth spiritually, mentally, emotionally and physically. Remember you have the power to create and every choice you make is inspiring something.. be a walking example of love, peace and detachment.</h5>
            <h5>I make one of a kind sacred fire toys. I incorporate sacred geometry, The I Ching, Mayan Astrology, and The Gene Keys to make the perfect toy for you. Based of your Date, Time and Place of Birth - <a href="https://www.facebook.com/firespinning/videos/2150147985241812/" target='_blank' rel="noopener noreferrer">see video</a>.</h5>
            <h5>Loving you all”</h5>
            </div>
            <h5>~Clayton Allred, <a href="http://allredfiretribe.com/" target='_blank' rel="noopener noreferrer">AllRedFireTribe.com</a></h5>
            <img src="https://allredfiretribe.files.wordpress.com/2018/12/47493516_10218053891365125_1887589065180577792_n.jpg" alt="Unable to render"/>
            <h6>THE IGNITE AND UNITE DESIGN WAS CREATED BY RENEE SARASVATI & CLAYTON ALLRED... IT IS A SEED OF LIFE, WITH A FIRE MANDALA, AND THE I-CHING... THIS IS ABOUT DIVINE AWARENESS AND TRANSFORMATION. IGNITE THE FLAME IN YOUR HEART AND UNITE WITH OTHERS TO HELP WALK WITH HUMANITY INTO A LOVE VIBRATION.</h6>
            <p>* Please use the contact form below to send a message if you would like to place an order. Clothing may take 2 - 3 weeks depending on inventory. Each Fire Staff and Nunchaku is made to order and can take up to three weeks.</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="fullName" 
                    value={ fullName }
                    onChange={handleChange} 
                    placeholder="Full name (required)"/>
                <input 
                    type="email" 
                    name="email" 
                    value={ email }
                    onChange={handleChange} 
                    placeholder="Email address (required)"/>
                <input 
                    type="phone" 
                    name="phone" 
                    value={ phone }
                    onChange={handleChange} 
                    placeholder="Phone number"/>
                <input 
                    type="website" 
                    name="website" 
                    value={ website }
                    onChange={handleChange} 
                    placeholder="Website"/>
                <textarea 
                    // className="comment"
                    width="70%" 
                    height="500px" 
                    type="text" 
                    name="comment" 
                    value={ comment }
                    onChange={handleChange} 
                    placeholder="Comments (required)"
                    />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Shop