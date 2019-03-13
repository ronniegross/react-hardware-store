import React, { Component } from 'react'
import ShopViewProductList from './ShopViewProductList'

export default class ShopView extends Component {
  render() {
    return (
      <div>
          <h1>Shop View</h1>
          <ShopViewProductList
            productList={this.props.productList}
            addToCart={this.props.addToCart}
          />
      </div>
    )
  }
}
