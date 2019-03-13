import React, {Component} from 'react'
import Product from './Product'

class ProductList extends Component {
    // const productList = this.props.productList;
    render () {
        const { productList } = this.props;

        const productComponents = productList.map((product, index) => {
            return <Product 
                    productName={product.productName}
                    description={product.description}
                    price={product.price}
                    key={index}
                    index={index}
                    removeProductFromProductList={this.props.removeProductFromProductList}
                />
        })

        return (
            <div>
                {productComponents}
            </div>
        )
    }
}



export default ProductList
