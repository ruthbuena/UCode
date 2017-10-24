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
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='Traversy Media'>
        Including, but not limited to: HTML, CSS, JavaScript, Bootstrap, Node.js, Express, API, and ES6.
        <p><Button><Link to={'Traversy'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
  </Row>

  <Row>
    <Col s={4}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='DerekBanas'>
        Including, but not limited to: HTML, CSS, JavaScript, JQuery, Node.js, Git, Ajax, Object Oriented Design, and Mongo.
        <p><Button><Link to={'DerekBanas'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={4}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='MyCodeSchool'>
        Presents some core concepts of computer programming: Sorting, Binary Search, Math for Programmers, Recursion, Data Structures, and Time Complexity.
        <p><Button><Link to={'MyCodeSchool'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={4}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='BradHussey'>
        Including, but not limited to: HTML, CSS, Sass, Bootstrap 4, Web Hosting, and JQuery.
        <p><Button><Link to={'BradHussey'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
  </Row>
</div>

export default Cards;