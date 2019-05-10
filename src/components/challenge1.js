import React, {Component} from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import './style.css'

class challenge1 extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount(){
    // TODO: Implement Loading
    //Call api and store data in items
    fetch('https://www.wsjwine.com/api/offer/0033008')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.response.mainItems
        })
      })
  }
  render() {
    let {isLoaded, items} = this.state;
    if(!isLoaded) {
      return <div>
        <h1>Challenge #1</h1><br/>Loading...
      </div>;
    }
    else{
      return (
        <div>
        <h1>Challenge #1</h1><br/>
        <div>
          <Container>
            <Row>
              <Col xs={12}>
                <div className="banner">
                  <p className="prompt">Which Case Would You Like?</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="description">Whatever you choose, we'll add in two bonus Cabs and two Crystal glasses and you'll have the complete package - worth over $250 - for ONLY $69.99 (plus $19.99 shipping & applicable tax; please allow 5-10 days for delivery, depending on shipping state).</div>
              </Col>
            </Row>
          </Container>
        </div>

          <fieldset>
    <Form.Group as={Row}>
      <Col sm={12}>
      {
        items.map(item => (
          //for each item create a radio button
          <Form.Check
            type="radio"
            label={
              <div className="label">
                <strong>{item.product.name.replace(/Collection/, ' ')}</strong>
                ({item.product.skus[0].numberOfBottles} Bottles)
              + 2 BONUS Bottles & Glasses <strong>JUST ${item.listPrice}</strong>
               <a href="#"> view wines</a>
              </div>
            }
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            key = {item.itemCode}
          />
        ))
      }


      </Col>
    </Form.Group>
  </fieldset>

        </div>
      );
    }
  }
}

export default challenge1;
