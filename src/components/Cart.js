import React, { Component } from 'react';
import { connect } from 'react-redux';


class Cart extends Component {
    render() {
        let addedItems = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return(
                   
                    <li className="collection-item avatar" key={item.id}>
                                <div className="item-img"> 
                                    <img src={item.img} alt={item.img} className=""/>
                                </div>
                            
                                <div className="item-desc">
                                    <span className="title">{item.title}</span>
                                    <p>{item.desc}</p>
                                    <p><b>Price: {item.price}$</b></p> 
                                    <p>
                                        <b>Quantity: {item.quantity}</b> 
                                    </p>
                                    <div className="add-remove">
                                        {/* <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link> */}
                                    </div>
                                    {/* <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button> */}
                                </div>
                                
                            </li>
                     
                )
            })
        ):

         (
            <p>Nothing.</p>
         )
         return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                {/* <Recipe />           */}
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return {
        items: state.addedItems,
    }
  }


  export default connect(mapStateToProps)(Cart)