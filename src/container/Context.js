import React, { Component, useReducer} from 'react'
import img1 from '../assets/images/android1.jpg'
import img2 from '../assets/images/iphone1.jpg'
import img3 from '../assets/images/iphone2.jpg'
export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        items: [
            {"_id": "1",
                "title": "Android",
                "src":img1,
                "description": "An excellent product",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse. Euismod in pellentesque massa placerat duis ultricies. A iaculis at erat pellentesque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem integer vitae justo. Massa enim nec dui nunc mattis. Mattis enim ut tellus elementum sagittis vitae et leo. ",
                "price": 400,
                "count": 1},
            {"_id": "2",
                "title": "Iphone",
                "src":img2,
                "description": "An excellent product",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse. Euismod in pellentesque massa placerat duis ultricies. A iaculis at erat pellentesque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem integer vitae justo. Massa enim nec dui nunc mattis. Mattis enim ut tellus elementum sagittis vitae et leo. ",
                "price": 800,
                "count": 1},
            {"_id": "3",
                "title": "Oppo",
                "src":img3,
                "description": "An excellent product",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse. Euismod in pellentesque massa placerat duis ultricies. A iaculis at erat pellentesque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem integer vitae justo. Massa enim nec dui nunc mattis. Mattis enim ut tellus elementum sagittis vitae et leo. ",
                "price": 400,
                "count": 1},
            {"_id": "4",
                "title": "Samsung",
                "src":img1,
                "description": "An excellent product",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse. Euismod in pellentesque massa placerat duis ultricies. A iaculis at erat pellentesque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem integer vitae justo. Massa enim nec dui nunc mattis. Mattis enim ut tellus elementum sagittis vitae et leo. ",
                "price": 600,
                "count": 1},

        ],
        itemData: [],
        itemId: "4",
        cart: [],
        total: 0,
    };

    addItem = (title, price, src) => {
        const {items} = this.state
        const id = Number(this.state.itemId)
        const data = items.push(
            {"_id": String(id + 1),
                "title": title,
                "src": src,
                "description": "An excellent product",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse. Euismod in pellentesque massa placerat duis ultricies. A iaculis at erat pellentesque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem integer vitae justo. Massa enim nec dui nunc mattis. Mattis enim ut tellus elementum sagittis vitae et leo. ",
                "price": Number(price),
                "count": 1}
        )
        this.setState({itemId: id + 1})


    }

    addCart = (id) =>{
        const {items, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = items.filter(item =>{
                return item._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The item has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeItem = id =>{
        if(window.confirm("Do you want to remove this item?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };
    checkoutRemoveItem = id =>{
        const dataId = id
        alert('Thanks for shopping with us')
        const {cart} = this.state;
        dataId.forEach((id) => {
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
        })

        this.setState({cart: cart});
        this.getTotal();
        }

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
        localStorage.setItem('dataItems', JSON.stringify(this.state.items))
        localStorage.setItem('dataId', JSON.stringify(this.state.itemId))

    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }

        const dataItems = JSON.parse(localStorage.getItem('dataItems'));
        if(dataTotal !== null){
            this.setState({items: dataItems})
        }

        const dataId = JSON.parse(localStorage.getItem('dataId'));
        if(dataId !== null){
            this.setState({itemId: dataId})
        }



    }

    render() {
        const {items, cart,total} = this.state;
        const {addCart,reduction,increase,removeItem,getTotal, addItem, checkoutRemoveItem} = this;
        return (
            <div>
                <DataContext.Provider
                    value={{items, addItem, addCart, cart, reduction,increase,removeItem,total,getTotal, checkoutRemoveItem}}>
                    {this.props.children}
                </DataContext.Provider>

            </div>

        )
    }
}
