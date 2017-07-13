import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList.js';
import Cart from './Cart.js';

class App extends Component {
    constructor() {
        super(); 
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Soap',
                    price: 10
                }],
            cart: []
        };
    }
    addToCart(product) {
        console.log('addtocart', product);
        this.setState({
            cart: [
                ...this.state.cart, 
                product
            ]
        })
    }
    removeFromCart(index) {
        var newCart = [];
        this.state.cart.map((item, i) => {
            if (i !== index) {
                newCart.push(item);
            }
        });
        this.setState({ cart: newCart });
    }
    render() {
        return (
            <div className="app">
                <ProductList products={this.state.products} addToCart={product => this.addToCart(product)} />
                <Cart items={this.state.cart} removeFromCart={product => this.removeFromCart(product)} />
            </div>
        );
    }
    componentDidMount() {
        setTimeout(event => {
            this.setState({
                products: [
                    {
                        id: 1,
                        name: 'Soap',
                        price: 10
                    },
                    {
                        id: 2,
                        name: 'Candles',
                        price: 8
                    },
                    {
                        id: 3,
                        name: 'Bread',
                        price: 13
                    },
                    {
                        id: 4,
                        name: 'Milk',
                        price: 21
                    },
                    {
                        id: 4,
                        name: 'Eggs',
                        price: 12
                    }
                ]
            });
        }, 300);
    }
}

export default App;
