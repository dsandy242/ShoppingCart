import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import HPLaptop from "../images/images.jpg";
import Lenova from '../images/img1.jpg';
import Dell from '../images/img6.jpg';
import Apple from '../images/img7.jpg';
import { productQunt } from '../actions/productQunt';
const Cart = ({ basketProps, productQunt }) => {
    console.log(basketProps);
    let summary = [];
    Object.keys(basketProps.products).forEach(function (item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if (basketProps.products[item].inCart) {
            summary.push(basketProps.products[item])
        }
        console.log("Summary" + summary)
    });
    // const productImages = [HPLaptop, Lenova, Dell, Apple]
    const productImages=(product)=>{
        if(product.tagName==="hplaptop"){
            return HPLaptop;
        }else if(product.tagName==="lenova"){
            return Lenova;
        }else if(product.tagName==="Dell"){
            return Dell;
        }
        else if(product.tagName==="apple"){
            return Apple;
        }

    }
    summary = summary.map((product, index) => {
                       return (
            <Fragment key={index}>
                        {/* <ion-icon name="arrow-back-circle-outline"/>  */}
                <div className="product"> <ion-icon name="close-circle" /><img src={productImages(product)} />
                    <span className='sm-hide'>{product.name}</span>    </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <ion-icon onClick={()=>productQunt('decrease',product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon onClick={()=>productQunt('increase',product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price}.00</div>
            </Fragment>
        )
    })
    return <div className='container-products'>
        <div className='product-header'>
            <h5 className='product-title'>PRODUCT</h5>
            <h5 className="price sm-hide">PRICE</h5>
            <h5 className="quantity">QUANTITY</h5>
            <h5 className="total">TOTAL</h5>
        </div>
        <div className='products'>
            {summary}
        </div><br />
        <div className="basketTotalContainer">
            <h4 className="basketTotalTitle">Basket Total</h4>
            <h4 className="basketTotal">{basketProps.cartCost},00</h4>
        </div>
    </div>
}
const mapStateToProps = (state) => ({
    basketProps: state.basketState
})
export default connect(mapStateToProps, { productQunt })(Cart);