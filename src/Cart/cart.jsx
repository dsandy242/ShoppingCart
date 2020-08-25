import React from 'react';
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
            <div>
                <div className="product"> <icon-icon name="close-circle"></icon-icon><img src={productImages[index]}>            
                </img>
        <span className='sm-hide'>{product.name}</span>
               </div>
               <div className="quantity">
                   <icon-icon className="decrease" name="arrow-back-circle-outline"></icon-icon>
        <span>{product.numbers}</span>
        <icon-icon className="increase" name="arrow-forward-circle-outline"></icon-icon>
               </div>
               <div className="total">${product.numbers*product.price}.00</div>

            </div>
        )
    })
    return <div>
{summary}:{basketProps.basketProps.cartCost}
    </div>
}
const mapStateToProps=(state)=>({
basketProps:state.basketState
})
export default connect(mapStateToProps) (Cart);