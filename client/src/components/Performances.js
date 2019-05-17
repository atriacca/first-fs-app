import React from 'react'

const Performances = (props) => {
    const { handleChange, handleSubmit, fullName, email, phone, website, comment } = props
    return (
        <div>
            <h1>Fire Spinning Performances</h1>
            <img src="https://allredfiretribe.files.wordpress.com/2018/08/13423812_1741681022755179_4112663154152107891_n.jpg" alt="Unable to render"/>
            <p>Please contact us for more information on rates and booking fire spinning performances for private parties and events.</p>
            <form onSubmit={handleSubmit} className="performances">
            {/* <div> */}
                {/* <h3>Please provide your contact info and description of your needs with prospective dates if possible.</h3> */}
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
        {/* </div> */}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Performances