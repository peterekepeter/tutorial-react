import React from 'react';
import './Cart.css'
import ProductItem from './ProductItem.js';

class Cart extends React.Component {

    getTotalString() {
        var total = this.props.items.reduce((acc, item) => acc + item.price, 0);
        return total === 0 ? '' : String(total);
    }
    render() {
        return <div className='cart-container'> 
            <h2>My Cart</h2>
            <div className='cart'>
                {
                    this.props.items.map((item, i) => <ProductItem product={item} action={event=>this.props.removeFromCart(i)}></ProductItem>)
                }
            </div>
            <div className='cart-total'> {this.getTotalString()} </div>
        </div>
    }
    

}


export default Cart;