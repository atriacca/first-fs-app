import React, { Component } from "react";
import product from "../src/components/product"
import ImageGallery from 'react-image-gallery'

class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {
            _id: this.props._id, 
            images: this.props.images
        }
    }

    render() {

        let {_id} = this.props.match.params
        const imgGallery = product.filter(item => item._id === _id)
        let images = imgGallery
    
        const styles = {
            div: {
                padding: "10px",
                margin: "10px",
                // backgroundColor: "#e25822",
                // backgroundImage: "URL(https://images.pexels.com/photos/1749/fire-orange-emergency-burning.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }
            // border: "solid #CA2017 5px",
            // width: "300px"
        }

        return (
            <div style={styles.div} className="Gallery">
                <ImageGallery items={imgGallery} />
            </div>
        )
    }
}

export default Gallery