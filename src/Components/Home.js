import React from 'react';
import HPLaptop from "../images/images.jpg";
import Lenova from '../images/img1.jpg';
import Dell from '../images/img6.jpg';
import Apple from '../images/img7.jpg';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';
const Home =(props)=>{
    console.log(props);
    return (   <div className="row">
                <div className="column">
                <img src={HPLaptop} alt="HPLaptop"/>
                <h3>Hp LapTop</h3>
                <h3>$299.99</h3>
                <a onClick={()=>props.addBasket("HPLaptop")} className="addToCart cart1" href="#">Add To Cart</a>
                </div>
                <div className="column">
                <img src={Lenova} alt="Lenova "/>
                <h3>Lenova</h3>
                <h3>$399.99</h3>
                <a onClick={()=>props.addBasket("Lenova")} href="#" className="addToCart cart2">Add To Cart</a>
                </div>
                <div className="column">
                <img src={Dell} alt="Dell "/>
                <h3>Dell</h3>
                <h3>$499.99</h3>
                <a onClick={()=>props.addBasket("Dell")} href="#" className="addToCart cart3">Add To Cart</a>
                </div>
                <div className="column">
                <img src={Apple} alt="Apple "/>
                <h3>Apple</h3>
                <h3>$599.99</h3>
                <a onClick={()=>props.addBasket("Apple")} href="#" className="addToCart cart4">Add To Cart</a>
                </div>
        </div>
          );
}
export default connect(null, {addBasket})(Home);