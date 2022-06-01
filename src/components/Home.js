import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../Actions/cart-action';
import Navbar from './Navbar';




class Home extends Component {

    constructor(props) {
        super(props)
        console.log(props, "props from reducers");

    }
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    // componentDidMount(){
    //     let itemList = this.props.items
    //     console.log(itemList);
    // }
    render() {

        let itemList = this.props.items.map(item => {
            return (

                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                        <span className="card-title">{item.title}</span>
                        <span to="/jshopify" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>

            )
        })

        return (

            <div className='Wrapper'>
                <Navbar/>
                <div className="container">

                    <h3 className="center" style={{ "marginBottom": '100px' }}>    </h3>

                    <div className="box">
                        {itemList}
                    </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)