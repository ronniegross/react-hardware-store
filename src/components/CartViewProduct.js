import React, { Component } from 'react'

export default class CartViewProduct extends Component {
    render() {
        const {productName, description, price } = this.props
        return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
                <button onClick={() => this.props.removeFromCart(this.props.index)}>
                    Remove From Cart
                </button>
            </div>
        )
    }
}
