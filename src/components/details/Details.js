import React, { Component } from 'react'
import {DataContext} from '../../container/Context'
import {Link} from 'react-router-dom'
import './Details.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        item: []
    }

    getItem = () =>{
        if(this.props.match.params.id){
            const res = this.context.items;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({item: data})
        }
    };

    componentDidMount(){
        this.getItem();
    }

    render() {
        const {item} = this.state;
        const {addCart} = this.context;
        return (
            <>
                {
                    item.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details
