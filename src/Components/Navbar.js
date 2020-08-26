import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getNumbers} from '../actions/getActions'
import {Link} from 'react-router-dom'
const Navbar=(props)=>{
  // debugger
  // let Num=props.basketProps.basketNumbers
  // let pNum=localStorage.getItem('Num')
  // console.log(pNum);
 
  useEffect(()=>{
    getNumbers();
  },[]);
    return (
<header><div>
      <nav>
        <h2>Shop</h2>
        <ul>
         <li> <Link to='/'>Home</Link></li>
          <li><Link to="/about"> About</Link></li> 
          <li className="cart"><Link to="/Cart">
          <ion-icon name="basket-outline"></ion-icon>
          Cart<span>{props.basketProps.basketNumbers}</span></Link></li>
          </ul>
      </nav></div>
      </header>)
  }
const mapStateToProps=(state)=>({
  basketProps:state.basketState
})

export default connect(mapStateToProps,{getNumbers})(Navbar);