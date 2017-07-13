import React from 'react';
import './ProductList.css';
import ProductListItem from './ProductItem.js';


class ProductList extends React.Component {
    render() {
        return <div className="product-list-component">
            <h2>Products List</h2>
            <div className="product-list">{
                this.props.products.map(product => {
                    return <ProductListItem product={product} action={this.props.addToCart}></ProductListItem>
                })}
            </div>
        </div>
    }
}

export default ProductList;