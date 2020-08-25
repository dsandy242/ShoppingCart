import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Provider} from 'react-redux';
import store from './store';
import Cart from './Cart/cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cart" component={Cart}/>
      </Switch>
      </BrowserRouter>
            {/* <h1> Shopping Cart Project</h1><br/> */}
   </div>
   </Provider>
  );
}

export default App;
