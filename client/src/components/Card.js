import React from "react";
// import FullCard from "./FullCard"

const Card = (props) => {
    const styles = {
        div: {
            padding: "10px",
            margin: "10px",
            backgroundColor: "#e25822",
            border: "solid black 3px",
            color: "black"
        }
    }
    return (
        <div style={styles.div} className="card">
            <h3>{props.product.title}</h3>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <img src={props.product.imgUrl} alt="Unable to render"/>
        </div>
    )
}

export default Card

/*
<a href={require('../resources/WhiteElectricWizardContactFireStaff.jpg')}>
<a href={require('../resources/WhiteElectricWizardContactFireStaff.jpg')}>
import '../resources/WhiteElectricWizardContactFireStaff.jpg';
*/