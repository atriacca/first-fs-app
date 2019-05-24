import React from "react"
import product from "./product"
// import FullCard from "./FullCard"

const Card = (props) => {
    const styles = {
        div: {
            padding: "10px",
            margin: "0px",
            // backgroundColor: "#e29522",
            // backgroundColor: "#e25822",
            // backgroundColor: "black",
            // backgroundImage: "url(https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";

            border: "solid black 2px",
            height: "500px",
            // color: "black",
            // color: "#e25822",
            color: "white",
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