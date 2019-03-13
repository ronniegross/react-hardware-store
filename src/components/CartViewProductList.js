import React, { Component } from 'react'
import CartViewProduct from './CartViewProduct'

export default class CartViewProductList extends Component {
  render() {
    const { cartStuff } = this.props

    const cartComponents = cartStuff.map((product, index) => {
        return <CartViewProduct
            productName={product.productName}
            description={product.description}
            price={product.price}
            key={index}
            index={index}
            removeFromCart={this.props.removeFromCart}
        />
    })

    return (
      <div>
        {cartComponents}
      </div>
    )
  }
}
