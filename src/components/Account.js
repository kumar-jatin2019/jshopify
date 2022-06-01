import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Account = ({ parenttoChild }) => {

    let navigate = useNavigate();
    function navigateShop() {
        navigate('/jshopify')
    }

    console.log(parenttoChild);
    let total = useSelector((state) => state.total);
    console.log(total);

    const checkOut = () => {
        console.log("jatn");
        navigate('/Register');

    }

    return (
        total > 0 ?

            <div className="container">
                <div className="collection">
                    {/* <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li> */}
                    <li className="collection-item"><b>Total: {total}  $</b></li>
                </div>

                <div className="checkout">
                    <button className="waves-effect waves-light btn" onClick={checkOut}>Checkout</button>
                </div>


            </div> :
            <div className="container">
                <div className="collection">
                    <li className="collection-item"><b>Total: {total}  $</b></li>
                </div>

                <div className="checkout">
                    <button onClick={navigateShop} className="waves-effect waves-light btn">Add Items</button>
                </div>


            </div>
    )
}

export default Account;