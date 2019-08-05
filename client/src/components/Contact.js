import React from 'react'

const Contact = props => {
    // const { handleChange, handleSubmit, fullName, email, phone, website, comment } = props
    return (
        <div>
            <h1>Contact</h1>
            <img src="https://allredfiretribe.files.wordpress.com/2018/08/13445533_1741681716088443_7149686734532124140_n.jpg?w=960" alt="Unable to render"/>
            <p>You may call Clayton at 801-899-FIRE for more information on booking fire spinning performances for private parties or events, to sign up for any lessons, to order any products or with any questions on any of the above. Namaste.</p>
            {/* <form onSubmit={handleSubmit} className="contact">
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
                    width="70%" 
                    height="500px" 
                    type="text" 
                    name="comment" 
                    value={ comment }
                    onChange={handleChange} 
                    placeholder="Comments (required)"
                    />
                <button>Submit</button>
            </form> */}
            </div>
    )
}

export default Contact