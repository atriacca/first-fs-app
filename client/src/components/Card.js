import React from "react"
import product from "./product.js"
// import FullCard from "./FullCard.js"

const Card = props => {
    const styles = {
        div: {
            padding: "10px",
            margin: "0px",
            // backgroundColor: "#e29522",
            // backgroundColor: "#e25822",
            border: "solid white 1px",
            height: "500px",
            // color: "#e25822",
            color: "white",
        }
    }
    return (
        <div style={styles.div}>
            <div className="card">
                <h3>{props.product.title}</h3>
            <h3>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <img src={props.product.imgUrl} alt="Unable to render"/>
                </div>
        </div>
    )
}

export default Card