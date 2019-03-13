import React, {Component} from 'react'

class Product extends Component {

    deleteProduct = (event) => {
        event.preventDefault();
        this.props.deleteProductFromProductList(this.state.product);
    }

    render() {
        const {productName, description, price } = this.props
        return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
                <button 
                    onClick={() => this.props.removeProductFromProductList(this.props.index)}>
                    Delete
                </button>
            </div>
        )
    }
}

export default Product