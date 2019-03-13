import React, { Component } from 'react';
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class HomePage extends Component {
    state = {
        itemCurrentlyOnSale: 'A Hammer',
        editSaleItem: false,
        productList: [
            {
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
            },
            {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
            }
        ],
        cartStuff: [

        ]
    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem
        // this.setState({editSaleItem: editSaleItem})
        this.setState({editSaleItem}) // thank u es6
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        this.setState({itemCurrentlyOnSale})
    }

    addNewProductToProductList = (newProduct) => {
        const newProductList = [...this.state.productList]
        newProductList.push(newProduct)
        this.setState({productList: newProductList})
    }

    removeProductFromProductList = (productIndex) => {
        const productList = [...this.state.productList]
        const filteredProductList = productList.filter((product, index) => {
            return index !== productIndex
        })

        this.setState({productList: filteredProductList})
    }

    addToCart = (productIndex) => {
        const newCartStuff = [...this.state.cartStuff]
        newCartStuff.push(this.state.productList[productIndex])
        this.setState({cartStuff: newCartStuff})
    }

    removeFromCart = (cartStuffIndex) => {
        const newCartStuff = [...this.state.cartStuff]
        const filteredNewCartStuff = newCartStuff.filter((product, index) => {
            return index !== cartStuffIndex
        })
        this.setState({cartStuff: filteredNewCartStuff})
    }


    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>Currently On Sale: { this.state.itemCurrentlyOnSale }!</div>
                <button onClick={this.toggleEditSaleItem}>{this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}</button>
                <div>
                    {
                        this.state.editSaleItem 
                            ? <input onChange={this.handleItemCurrentlyOnSaleChange} type="text" value={this.state.itemCurrentlyOnSale}/> 
                            : null 
                    }
                </div>
                <AdminView 
                    productList={this.state.productList} 
                    addNewProductToProductList={this.addNewProductToProductList}
                    removeProductFromProductList={this.removeProductFromProductList}
                />
                <ShopView 
                    productList={this.state.productList} 
                    addToCart={this.addToCart}
                />
                <CartView
                    cartStuff={this.state.cartStuff}
                    removeFromCart={this.removeFromCart}
                />
            </div>
        );
    }
}

export default HomePage