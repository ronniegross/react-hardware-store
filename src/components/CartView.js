import React, { Component } from 'react'
import CartViewProductList from './CartViewProductList'

export default class CartView extends Component {
  render() {
    return (
        <div>
            <h1>Cart View</h1>
            <CartViewProductList
                cartStuff={this.props.cartStuff}
                removeFromCart={this.props.removeFromCart}
            />
        </div>
    )
  }
}
