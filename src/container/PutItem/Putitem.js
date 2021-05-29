import React, {Component} from 'react'
import {DataContext} from '../Context'
import classes from './Puitem.module.css'
import {Link} from "react-router-dom";

export default class Putitem extends Component {
    static contextType = DataContext;

    state = {
        title: '',
        price: 0,
        src: '',
        showLink: false
    }
    onInputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    linkToggleHandler = () => {
        this.setState({showLink: true})
    }

    render() {
        const {addItem} = this.context
        const title = this.state.title
        const price = this.state.price
        const src = this.state.src
        const id = this.state.id
        let error = null

        if (this.state.title === '' || this.state.price === 0 || this.state.src === ''){
            error = "All Fields are required"
        }

        return(
            <div className={classes.Data}>
                <h2>Add item for sale</h2>
                <input onChange={this.onInputChangeHandler} name={'title'} type={'text'} placeholder={'Item Title'}/>
                <input onChange={this.onInputChangeHandler} name={'price'} type={'text'} placeholder={'Item Price'}/>
                <input onChange={this.onInputChangeHandler} name={'src'} type={'text'} placeholder={'Enter URL'}/>
                <p>{error}</p>
                <button onClick={() => {
                    this.linkToggleHandler()
                    addItem(title, price, src, id)
                }} >Add Item</button>
                {this.state.showLink ? <div className={classes.LinkDiv}><Link to={'/item'}>View Item</Link></div> : null}
            </div>
        )
    }
}