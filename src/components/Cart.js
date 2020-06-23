import React from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row
} from 'reactstrap';


//Conditional Rendering
//Specially in case of sign up and sign in: you would optionally need to show button of sign out
//if else
//We will not do prop.CartItem instead we will destructure it
//So much of passing on props, In big applications that's why we use redux
// how to insert javascript in JSX, {}


//if Cart Item is empty it will not show that JSX 

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount=0;

    cartItem.forEach(item=>{
        amount=parseFloat(amount) + parseFloat(item.productPrice);
    })

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {
                    cartItem.map(item=>(
                        <ListGroupItem key={item.id}>
                            <Row>
                                <Col>
                                <img
                                height={80}
                                src={item.tinyImage}
                                />
                                </Col>
                                <Col className="text-center">
                                    <div className="text-primary">
                                        {item.productName}
                                    </div>
                                    <span>
                                        Price:- ${item.productPrice}
                                    </span>
                                    <Button color="danger" onClick={()=>removeItem(item)}>Remove</Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                       
                       

                    ))

                }

            </ListGroup>
            {
                 //if everything is empty
                cartItem.length>=1 ? ( 
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand Total
                        </CardHeader>
                        <CardBody>
                            Your total amount for {cartItem.length} products is ${amount}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>Pay Now</Button>
                        </CardFooter>

                    </Card>
                ):(
                    <h1 className="text-warning"> Cart is empty</h1>
                )
            }   
        </Container>
    )



}


export default Cart;

