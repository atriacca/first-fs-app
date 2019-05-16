import React from "react";

const FullCard = (props) => {
    const styles = {
        div: {
            padding: "10px",
            margin: "10px",
            backgroundColor: "#e25822",
            border: "solid black 3px",
            color: "black"
        }
        // border: "solid #CA2017 5px",
        // width: "300px"
    }
    return (
        <div style={styles.div} className="FullCard">
            <h3>{props.product.title}</h3>
            <p>{props.product.description}</p>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <img src={props.product.imgUrl} alt="Unable to render"/>
        </div>
    )
}

export default FullCard
/*
<a href={require('../resources/WhiteElectricWizardContactFireStaff.jpg')}>
import '../resources/WhiteElectricWizardContactFireStaff.jpg';
*/