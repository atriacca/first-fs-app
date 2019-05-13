import React from "react";

const Card = (props) => {

    return (
      <div style={styles.div}>
          <h2>{props.product.title}</h2>
          <p>{props.product.description}</p>
          <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
          <img width="200px" src={props.product.imgUrl} alt="Unable to render"/>
      </div>
    )
}
      
export default Card;