import React, { Component } from 'react'
import Navbar from './Navbar'

class Menu extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false
        }
    }

    navToggler = () => {
        this.setState(prevState => ({
            navToggle: !prevState.navToggle
        }))
    }

    render() {
        return (
            <div className="app-container">
                <div 
                    onClick={this.navToggler}
                    className={`overlay overlay-${this.state.navToggle ? "open" : "closed"}`}>
                </div>
                <button onClick={this.navToggler}>|||</button>
                <Navbar navToggler={this.navToggler} navToggle={this.state.navToggle}/>
            </div>
        )
    }
}

export default Menu