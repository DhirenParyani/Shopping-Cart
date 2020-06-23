import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import {Container,Row, Col} from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';

import BuyPage from './components/BuyPage';
import Cart from './components/Cart';

function App() {

  //Define our Methods in App.js
  //Generally they are defined in a separate helper method in production grade application.

  //This is a hook, but initially an empty array.
  const [cartItem,setCartItem]=useState([]);

  /*Method: addInCart: Passes an item=>{
      We need to verify whether the item is already within cart or not?: isAlreadyAdded
      every item willl have it's own ID
      findIndex()-returns index of first found item in array.
      return -ve if item not found.
      if item is already added find it's ID, match it with item ID

      If item is not found
      [...load up the entire array, add new value]
      

  }*/
  const addInCart= item =>{
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id;
    })
    if(isAlreadyAdded!==-1){
      toast('already added in cart',{
        type:"error"
      })
    }
    else
    setCartItem([...cartItem,item]);
  };


  /*Buy Now Method:  */
 const buyNow = () =>{
   setCartItem([]);
   toast("Purchase Complete",{
     type:"success"
   });
 };

 const removeItem = item =>{
   setCartItem(cartItem.filter(singleItem=>singleItem.id!==item.id));
 };

//We have to pass on a prop which is add in cart to BuyPage component
  return (
    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>
    </Container>

  )
}

export default App;
