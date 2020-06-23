/*
Why are we using the useEffect
because we want to fire up a request using Axios to an API and we simply want to load everything beforehanded.
//https://jsonware.com/json/57d417ead33abc3045d24507b1c9f032.json
*/
import React, {useState,useEffect} from 'react'
import Axios from 'axios';
import {random,commerce} from "faker"
import {Container,Col,Row} from "reactstrap"
import CartItem from "./CartItem"


const apiKey="INSERT_KEY_HERE";
const url="https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localURL="https://jsonware.com/json/57d417ead33abc3045d24507b1c9f032.json"

/*
Whenever buyPage is called people will be buying somethings
addInCart is passed to us


*/

const BuyPage= ({addInCart}) =>{
    const [product,setProduct]=useState([])

    //Calling URL
    /*const fetchPhotos=async()=>{
        const response=await Axios.get(url,{
            header:{
                Authorization:apiKey
            }
        })*/
const fetchPhotos=async()=>{
    const {data}=await Axios.get(localURL);
            //We have to destructure the output
            //everything is under data
            //under data we want photos
    
    //We will loop through these photos
    const {photos}=data;
     //We will loop through all products and store them in our state
     //6 object -> per_page=6
     //firing a callback we want to create an object
     //object has lot of info small images, tiny images   
     const allProduct=photos.map(photo=>({
         smallImage:photo.src.medium,
         tinyImage:photo.src.tiny,
         productName: random.word(),
         productPrice: commerce.price(),
         id:random.uuid()
         

     }))
     setProduct(allProduct);
    };
useEffect(()=>{
      //Before anything loads up 
      //It is run the method fetch photos
      
      fetchPhotos()
   },[])
 
   //we will passon product information
   //which will run the method add in cart
   //so drilling of props is necessary here
   
   return (
       <Container fluid>
           <h1 className="text-success text-center">
               Buy Page
           </h1>
           <Row>
               {
                   product.map(product=>(
                     <Col md={4} key={product.id}>
                         <CartItem  product={product} addInCart={addInCart}/>
                     </Col>
                   ))
               }
           </Row>

       </Container>
   )

   
}


export default BuyPage



