import React, { Component } from 'react'
import ShopViewProduct from './ShopViewProduct'

export default class ShopViewProductList extends Component {
  render() {
    const { productList } = this.props

    const productComponents = productList.map((product, index) => {
        return <ShopViewProduct
        productName={product.productName}
        description={product.description}
        price={product.price}
        key={index}
        index={index}
        addToCart={this.props.addToCart}
        />
    })
    
    return (
        <div>
            {productComponents}
        </div>
    )
  }
}
