import React, { Component } from 'react'
import Items from '../components/items/Items'
import Putitem from "./PutItem/Putitem";
import Details from '../components/details/Details'
import {Route} from "react-router-dom"
import Cart from '../components/cart/Cart'
import Checkout from '../components/checkout/Checkout'



export class Section extends Component {
    render() {
        return (
            <section>

                <Route path="/additem" component={Putitem} exact  />
                <Route path="/item" component={Items} exact  />
                <Route path="/item/:id" component={Details} exact />
                <Route path="/cart" component={Cart}  exact/>
                <Route path="/checkout" component={Checkout} exact />
            </section>
        )
    }
}

export default Section
