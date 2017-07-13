import React from 'react';
import './ProductItem.css';

const ProductListItem = (props) => {
    return <div className="product" key={props.product.id} onClick={event => props.action(props.product)}>
        <div className="product-name">{props.product.name}</div>
        <div className="product-price">{props.product.price}</div>
    </div>
}

export default ProductListItem