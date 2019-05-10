import React, {Component} from 'react';
import Challenge1 from './components/challenge1.js'
import Challenge2 from './components/challenge2.js'
import {Container, Row, Col, Button} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
           <Col xs={12}><h1> DWI Code Challenge</h1></Col>
          </Row>
        </Container>
        <div className="display">
        <Container>
          <Row>
            <Col><Challenge1 /></Col>
          </Row>
          <Row>
            <Col><Challenge2 /></Col>
          </Row>
        </Container>
        </div>
      </div>
    )
  }
}

export default App;
