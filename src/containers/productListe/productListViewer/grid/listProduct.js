import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import {addItem} from '../../../../store/actions/shoppingCart'
import './listProduct.css'
class ListOfProducts extends Component {
    render() {
        return (
            <div >
                {this.props.data.map(el => {
                    return (
                        <Card>
                            <div className="cardBody" >
                                <div>
                                    <img  src={el.src} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Text>
                                        {el.description}
                                    </Card.Text>
                                    <Button onClick={()=>{this.props.addItem(el)}} variant="primary">add to card</Button>
                                </Card.Body>
                            </div>


                        </Card>
                    )
                })}


            </div>
        )
    }
}

  
  const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (data) => dispatch(addItem(data)),

    }
  }
export default connect(null, mapDispatchToProps)(ListOfProducts)