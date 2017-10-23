import React from 'react';
import {Col, Card, Row, Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import './ChannelsM.css';

const Cards = () =>
<div className="channels_container">
  <Row>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='thenewboston'>
        Tons of sweet computer related tutorials and some other awesome videos too!
        <p><Button><Link to={'BostonCode'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='BostonCode'>
        Find all the help you need!
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='BostonCode'>
        Find all the help you need!
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='BostonCode'>
        Find all the help you need!
        </Card>
    </Col>
  </Row>

  <Row>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='BostonCode'>
        Find all the help you need!
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='BostonCode'>
        Find all the help you need!
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='BostonCode'>
        Find all the help you need!
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='BostonCode'>
        Find all the help you need!
        </Card>
    </Col>
  </Row>
</div>

export default Cards;