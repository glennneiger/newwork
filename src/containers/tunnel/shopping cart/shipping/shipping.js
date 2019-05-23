import React, { Component } from 'react'
import { connect } from 'react-redux'
import './shipping.css'
import { Card, Button, Form } from 'react-bootstrap'
import { Link} from "react-router-dom";

class Shipping extends Component {
    state = {
        showGlobal: true,
        showByProduct: false
    }
    render() {
        const showGlobal = () => {
            this.setState({
                showGlobal: true,
                showByProduct: false
            })
        }
        const showByProduct = () => {
            this.setState({
                showGlobal: false,
                showByProduct: true
            })
        }
        return (
            <div>
                <Button onClick={showGlobal} >Global Shipping <i class='fas fa-shipping-fast'></i></Button>
                <Button onClick={showByProduct} >Shipping by product <i class='fas fa-shipping-fast'></i></Button>
                <div id="Global_Shipping" style={{ display: this.state.showGlobal ? "" : "none" }}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label> select shipping</Form.Label>
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
                <div id="Shipping_by_product" style={{ display: this.state.showByProduct ? "" : "none" }}>
                    {this.props.items.map((el, i) => {
                        return (
                            <div className="shippingCards" >

                                <Card>
                                    <div className="shippingCard" >
                                        <div>
                                            <img width="200" src={el.src} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{el.name}</Card.Title>
                                            <Card.Text style={{ display: "flex" }}>
                                                <div>
                                                    {el.description}
                                                </div>


                                            </Card.Text>
                                            <span>number of items : {this.props.itemsNumber[i]}</span>
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
                    })}

                </div>
                <Link to="/tunnel/Payment"> <Button onClick={() => { this.props.changeSate("Payment") }}>  Payment</Button></Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.ShoppingCartReducer.items,
        itemsNumber: state.ShoppingCartReducer.itemsNumber,
    }
}

export default connect(mapStateToProps)(Shipping)