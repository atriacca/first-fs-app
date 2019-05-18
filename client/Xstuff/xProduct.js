import React, { Component } from 'react'

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price,
            imgUrl: this.props.imgUrl,
            inStock: this.props.inStock
        }
    }
    handleChange = e => {
        const { title, value } = e.target
        this.setState({
            [title]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.props.title,
            description: this.props.description,
            price: this.props.price,
            imgUrl: this.props.imgUrl,
            inStock: this.props.inStock
        }

        this.props.editProduct(this.props._id, updates)
        this.toggler()
        
    }
    handleSubmitKill = e => {
        e.preventDefault()
        const updates = {
            title: this.props.title,
            description: this.props.description,
            price: this.props.price,
            imgUrl: this.props.imgUrl,
            inStock: this.props.inStock
        }

        this.props.editProduct(this.props._id, updates)
        // this.toggler()
        
    }
    render(){
    const { title, description, price, imgUrl, inStock, _id, deleteItem, handleChange, handleSubmit } = this.props 
    let bgColor, textDec, bdImage, fWeight, fontColor, btnColor

    if (inStock === true){
        textDec = 'none'
        fWeight = 800
        fontColor='lightgray'
    } else {
        textDec = 'line-through'
        fWeight = 200
        if (type === 'shirt') {
            bdImage='url("http://weknowyourdreams.com/images/dead/dead-01.jpg")'
            fontColor='lightgray'
            btnColor='black'
        } else {
            bdImage='url("https://cache.pakistantoday.com.pk/dead-body-3.jpg")'
            fontColor='black'
            btnColor='gray'
        }
    }
    
    const styles = {
        textDecorationLine: textDec,
        backgroundImage: bdImage,
        fontWeight: fWeight,
        backgroundColor: bgColor,
        color: fontColor,
        backgroundSize: "100%"
    }
        return (
        <div className="container">
            <div style={styles}>
            { this.state.editToggle ?
                // syntax for declaring fragments, looks like empty tags but acts as div but without changing parent/chid relationship 
                <>
                    <AddProductForm 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        title={this.state.title}
                        description={this.state.description}
                        price={this.state.price}
                        imgUrl={this.state.imgUrl}
                        inStock={this.state.inStock}
                        btnText="Edit Product"                    />
                        <button onClick={this.toggler}>Close</button>
                </>
            :
                <>
                    <h1>{title}</h1>
                    <p>Description: {description}</p>
                    {/* <p>Type: {type}</p> */}
                    <p>Price: {price}</p>
                    <p>Is in stock: {inStock.toString()}</p>
                    <button onClick={() => deleteItem(_id)}>Delete</button>
                        <button onClick={this.toggler}>Edit</button>
                </>
            }
            </div>
        </div>
        )
    }
}

export default Product
/*
backgroundImage: 'url(${"https://assets1.ignimgs.com/thumbs/userUploaded/2016/12/5/everysithever1280-1481006742865.jpg"})'
    */