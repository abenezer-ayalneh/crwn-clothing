import React from "react";
import './checkout.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotalCost} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems, cartTotalCost}) => (
    <div className={'checkout-page'}>
        <div className={'checkout-header'}>
            <div className={'header-block'}>
                <span>Product</span>
            </div>
            <div className={'header-block'}>
                <span>Description</span>
            </div>
            <div className={'header-block'}>
                <span>Quantity</span>
            </div>
            <div className={'header-block'}>
                <span>Price</span>
            </div>
            <div className={'header-block'}>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem)=> <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className={'total'}>
            <span>TOTAL: ${cartTotalCost}</span>
        </div>
        <div className={'test-warning'}>
            *Please use the following test credit card for payment*
            <br/>
            Card: 4242 4242 4242 4242 Expiry: any future date CVV: 123
        </div>
        <StripeCheckoutButton price={cartTotalCost}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalCost: selectCartTotalCost
})

export default connect(mapStateToProps)(CheckoutPage)