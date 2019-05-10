import React, {Component} from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import './style.css'

class challenge2 extends Component {
  constructor() {
    super()
    this.state = {
      location: {},
      isLoaded: false,
      zip: '',
      value: '',
      message: '',
      max: false,
      error: false

    }
    this.handleChange = this.handleChange.bind(this);
  }
  getLocation(zip){
    // TODO: Implement Loading
    fetch(`https://www.wsjwine.com/api/address/zipcode/${zip}`)
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => {
        this.setState({
          isLoaded: true,
          location: json,
          error: false
        })
        if(this.state.location.response.stateCode =='CT'){
          this.setState({message: 'Upon completion of this form, your order will be forwarded to The Wine Cellar, located in Wallingford, CT for processing and shipping.'})
        }
      }).catch (err => this.setState({error: true}))


  }
  handleChange(event){
    this.setState({value: event.target.value});
    if(event.target.value.length === 5){
      //call api if max number of zip characters reached
      this.getLocation(event.target.value)
      this.setState({max: true})

    }
    else {
      //hide ct message
      this.setState({max: false})
      this.state.message = ''
    }

  }
  render() {

    //check if the fetch GET is successful and if we have reached the max number of characters
    //modify city,state
    if(this.state.location.statusCode === 0 && this.state.max){
      if(this.state.isLoaded){
        status = `${this.state.location.response.city}, ${this.state.location.response.stateName} `
      }
      else {
        status ='Loading...'
      }


    }
    else{
      status = 'Enter ZIP to populate City and State'
    }

    return (
      <div>
        <h1>Challenge #2</h1>
        <br />
        <Row>
          <Col xs={12}>
            <div>* ZIP</div>
          </Col>
        </Row>
        <Form>
        <Row>
          <Col xs={12} sm={12} md={3}>
            <Form.Control maxLength="5"  value={this.state.value} onChange={this.handleChange}/>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <div className="status">{status}</div>
          </Col>
        </Row>

        </Form>
        <Row>
          <Col xs ={12}>
            {this.state.message!=''? <div className="ctMessage">{this.state.message}</div> : null}
            {this.state.error? <div className="error">Please enter a valid zip code and try again.</div> : null}
          </Col>
        </Row>
      </div>
    )
  }
}

export default challenge2;
