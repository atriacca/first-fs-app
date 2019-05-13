import React from 'react'

const Shop = (props) => {
    const { handleChange, handleSubmit, fullName, email, phone, website, comment } = props
    return (
        <div className="shop">
            <h1>Shop</h1>
            <p>“I think the big message is to Ignite and Unite with your local community and learn how to work with one another inspiring and empowering growth spiritually, mentally, emotionally and physically. Remember you have the power to create and every choice you make is inspiring something.. be a walking example of love, peace and detachment. Loving you all”</p>
            <p>I make one of a kind sacred fire toys. I incorporate sacred geometry, The I Ching, Mayan Astrology, and The Gene Keys to make the perfect toy for you. Based of your Date, Time and Place of Birth.</p>
            <p>~<a href="https://allredfiretribe.wordpress.com" target='_blank' rel="noopener noreferrer">Clayton Allred</a>, <a href="http://allredfiretribe.com/" target='_blank' rel="noopener noreferrer">AllRedFireTribe.com</a></p>
            <img src="https://allredfiretribe.files.wordpress.com/2018/12/47493516_10218053891365125_1887589065180577792_n.jpg" alt="Unable to render"/>
            <h6>THIS DESIGN WAS CREATED BY RENEE SARAVATI & CLAYTON ALLRED… IT IS A SEED OF LIFE, WITH A FIRE MANDALA, AND THE I-CHING... THIS IS ABOUT DIVINE AWARENESS AND TRANSFORMATION. IGNITE THE FLAME IN YOUR HEART AND UNITE WITH OTHERS TO HELP WALK WITH HUMANITY INTO A LOVE VIBRATION.</h6>
            <p>*Please use the contact form below to send a message if you would like to order a hoodie or Sweatshirt. They are on back order and may take 2-3 weeks to restock.</p>
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
    );
}

export default Shop