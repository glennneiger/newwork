import React, { Component } from 'react'
import { Button, Card,Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addItem } from '../../../../../store/actions/shoppingCart'
import { addToWishList } from '../../../../../store/actions/wishList'
class ListCard extends Component {
    render() {
        if(this.props.cardType==="simpleList"){
            return (
                <Card>
                    <div className="cardBody" >
                        <div>
                            <img src={this.props.data.src} />
                        </div>
                        <Card.Body>
                            <Card.Title>{this.props.data.name}</Card.Title>
                            <Card.Text>
                                {this.props.data.description}<br />
                                {this.props.data.price}dt
                                        </Card.Text>
                            <Button onClick={() => { this.props.addItem(this.props.data) }} variant="primary">add to card</Button>
                            <img src="https://image.flaticon.com/icons/svg/60/60993.svg" style={{ width: "20px" }} onClick={(e) => { this.props.addToWishList(this.props.data); e.target.src = "https://image.flaticon.com/icons/svg/148/148836.svg" }} />
                        </Card.Body>
                    </div>
    
    
                </Card>
            )
        }
        else if(this.props.cardType==="shipping"){
            return(
                <div className="shippingCards" >

            <Card>
                <div className="shippingCard" >
                    <div>
                        <img width="200" src={this.props.data.src} />
                    </div>
                    <Card.Body>
                        <Card.Title>{this.props.data.name}</Card.Title>
                        <Card.Text style={{ display: "flex" }}>
                            <div>
                                {this.props.data.description}
                            </div>


                        </Card.Text>
                        <span>number of items : {this.props.itemsNumber[this.props.cardIndex]}</span>
                        <div id="Shipping_by_product_Police">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>select shipping</Form.Label>
                                    <Form.Control as="select">
                                        <option>Australia Post</option>
                                        <option>Canada Post</option>
                                        <option>DHL Express</option>
                                        <option>DHL Global Mail</option>
                                        <option>FedEx</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
                    </Card.Body>
                </div>


            </Card>
        </div>
            )
            
        }
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.ShoppingCartReducer.items,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (data) => dispatch(addItem(data)),
        addToWishList: (data) => dispatch(addToWishList(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCard)