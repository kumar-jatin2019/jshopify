

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';


class Navbar extends Component {

    constructor(){
        super()

        this.setState ={
            show:false
        }
    }
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="container">
                     <Link to="/jshopify" className="brand-logo">Shopping</Link>
                    
                     <ul className="right">
                         <li><Link to="/jshopify">Shop</Link></li>
                         <li><Link to="/cart">My cart</Link></li>
                         <li><Link to="/cart">{ this.props.quant > 0 ?  <span className="badge white" > {this.props.quant}</span>:''}</Link></li>
                         <li><i className="material-icons">shopping_cart</i></li>
                     </ul>
                 </div>
             </nav>
        );
    }
}


const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total,
        quant:state.quant
    }
}
export default connect(mapStateToProps)(Navbar)