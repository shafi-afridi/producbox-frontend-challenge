import React, { Component } from 'react'
import {DataContext} from '../../container/Context'
import {Link} from 'react-router-dom'
import '../details/Details.css'
import './Cart.css'

export class Cart extends Component {
    static contextType = DataContext;


    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeItem,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>No Item Added</h2>
        }else{
            return (
                <div>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>

                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeItem(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/checkout">Checkout</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </div>
                )
            }
        }
}

export default Cart
