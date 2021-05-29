import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../../container/Context'
import './Items.css'

export class Items extends Component {

    static contextType = DataContext;

    render() {
        const {items,addCart} = this.context;
        return (
            <div id="item">
               {
                   items.map(item =>(
                       <div className="card" key={item._id}>
                           <Link to={`/item/${item._id}`}>
                               <img src={item.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/item/${item._id}`}>{item.title}</Link>
                               </h3>
                               <span>${item.price}</span>
                               <p>{item.description}</p>
                               <button onClick={()=> addCart(item._id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Items
