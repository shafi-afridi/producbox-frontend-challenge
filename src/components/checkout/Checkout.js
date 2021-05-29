import React, { Component } from 'react'
import {DataContext} from "../../container/Context";
import classes from './Checkout.module.css'

export class Checkout extends Component {
    static contextType = DataContext;

    render() {
        const {cart,total} = this.context;
        if (cart.length === 0) {
            setTimeout(() => {
                this.props.history.push('/item');
            }, 3000)
        }

        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Continue Shopping</h2>
        }else{
            let id = []
            return (
                <div>
                    {
                        cart.map(item =>{
                            id.push(item._id)
                            return (
                                <div className={`${classes.CheckDetails} cart`} key={item._id} >
                                    <img src={item.src} className={classes.checkImg} alt=""/>
                                    <div className="box">
                                        <div className={classes.Row}>
                                            <h2>{item.title}</h2>
                                        </div>
                                        <span>Price : ${item.price * item.count}</span>
                                    </div>

                                </div>

                            )
                        })
                    }

                    <div className={classes.totalCheck}>
                        <h3>Total: ${total}</h3>
                        <button
                            className={classes.BuyBtn}
                            onClick={() => this.context.checkoutRemoveItem(id.map(id => (
                                id
                            )))}
                        >Buy</button>
                    </div>

                </div>

            )
        }

    }
}

export default Checkout
