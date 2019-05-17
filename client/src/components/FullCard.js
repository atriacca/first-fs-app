import React, { Component } from "react";
import product from "./product"

class FullCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title, 
            _id: this.props._id, 
            price: this.props.price, 
            description: this.props.description, 
            imgUrl: this.props.imgUrl
        }
    }

    render() {

        let {_id} = this.props.match.params
        const product1 = product.find(item => item._id === _id)
        let {title, price, description, imgUrl} = product1
    
        const styles = {
            div: {
                padding: "10px",
                margin: "10px",
                // backgroundColor: "#e25822",
                // backgroundImage: "URL(https://images.pexels.com/photos/1749/fire-orange-emergency-burning.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                backgroundImage: "URL(https://images.pexels.com/photos/672636/pexels-photo-672636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                border: "solid black 3px",
                color: "white",
                // fontSize: "2em"
            }
            // border: "solid #CA2017 5px",
            // width: "300px"
        }
        console.log(this.props)
        return (
            <div style={styles.div} className="fullCard">
                <h5>{title}</h5>
                <p>{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                <p>{description}</p>
                <img src={imgUrl} alt="Unable to render"/>
            </div>
        )
    }
}

export default FullCard
/*
<a href={require('../resources/WhiteElectricWizardContactFireStaff.jpg')}>
import '../resources/WhiteElectricWizardContactFireStaff.jpg';
*/