import React from 'react';
import {Col, Card, Row, Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import './ChannelsM.css';

const Cards = () =>
<div className="channels_container">
  <Row>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='TheNewBoston'>
        Tons of sweet computer related tutorials and some other awesome videos too!
        <p><Button><Link to={'BostonCode'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='LearnCode.academy'>
        Including, but not limited to: HTML, CSS, JavaScript, React.js, Node.js, Redux, JQuery, and ES6.
        <p><Button><Link to={'LearnCode'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='Programming Knowledge'>
        Including, but not limited to: HTML, CSS, JavaScript, Bootstrap, Node.js, Mongo, and MySQL.
        <p><Button><Link to={'Programming'}>Open Channel</Link></Button></p>
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