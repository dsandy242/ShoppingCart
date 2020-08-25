import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import HPLaptop from "../images/images.jpg";
import Lenova from '../images/img1.jpg';
import Dell from '../images/img6.jpg';
import Apple from '../images/img7.jpg';
const Cart=(basketProps)=>{
    console.log(basketProps);
    let summary=[];
    Object.keys(basketProps.basketProps.products).forEach(function(item){
        console.log(item);
        console.log(basketProps.basketProps.products[item].inCart);
        if(basketProps.basketProps.products[item].inCart){
            summary.push(basketProps.basketProps.products[item])
        }
        console.log("Summary"+summary)
    });
    const productImages=[HPLaptop,Lenova,Dell,Apple]
    summary = summary.map((product,index)=> {
        return (
            <Fragment>
                 {/* <ion-icon name="arrow-back-circle-outline"/>  */}
                <div className="product"> <ion-icon name="close-circle"/><img src={productImages[index]}/>            
                 <span className='sm-hide'>{product.name}</span>    </div>
        <div className="price sm-hide">${product.price},00</div>
               <div className="quantity">
                   <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
        <span>{product.numbers}</span>
        <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>
               </div>
               <div className="total">${product.numbers*product.price}.00</div>
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
                    </div><br/>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
<h4 className="basketTotal">{basketProps.basketProps.cartCost},00</h4>
            </div>
    </div>
}
const mapStateToProps=(state)=>({
basketProps:state.basketState
})
export default connect(mapStateToProps) (Cart);