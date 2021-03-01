import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const name = props.cartDetail;
    let total = 0;
    let allname = '';
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary;
        allname = allname + ` # ` + player.name + '(' + player.salary +')';
    }
    return (
        <div className="cartDesign">
            <h1>New Club</h1>
            <h4>Added Player: {cart.length}</h4>
            <h4>Total Expense for Players: {total}</h4>
            <h4>Players Name and salary:<ul>{allname}</ul> </h4>
        </div>
    )
};

export default Cart;