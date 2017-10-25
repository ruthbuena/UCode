import React from 'react';
import {Col, Card, Row, Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import './ChannelsM.css';

const Cards = () =>
<div className="channels_container">
  <Row>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='TheNewBoston'>
        Including, but not limited to: HTML, CSS, JavaScript, React.js, Node.js, Redux, MySQL, Ajax, Git and ES6.
        <p><Button className='channel_btn'><Link to={'HTML_Boston'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='LearnCode.academy'>
        Including, but not limited to: HTML, CSS, JavaScript, React.js, Node.js, Redux, JQuery, and ES6.
        <p><Button className='channel_btn'><Link to={'JavascriptFundamentals'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='Programming Knowledge'>
        Including, but not limited to: HTML, CSS, JavaScript, Bootstrap, Node.js, Mongo, and MySQL.
        <p><Button className='channel_btn'><Link to={'HTML_Programming'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='Traversy Media'>
        Including, but not limited to: HTML, CSS, JavaScript, Bootstrap, Node.js, Express, API, and ES6.
        <p><Button className='channel_btn'><Link to={'HTML_Traversy'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
  </Row>

  <Row>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='DerekBanas'>
        Including, but not limited to: HTML, CSS, JavaScript, JQuery, Node.js, Git, Ajax, Object Oriented Design, and Mongo.
        <p><Button className='channel_btn'><Link to={'HTML_Derek'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='MyCodeSchool'>
        Presents some core concepts of computer programming: Sorting, Binary Search, Math for Programmers, Recursion, Data Structures, and Time Complexity.
        <p><Button className='channel_btn'><Link to={'DataStructures'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
    <Col s={3}>
        <Card className='blue-grey darken-1 channel_card' textClassName='white-text' title='BradHussey'>
        Including, but not limited to: HTML, CSS, Sass, Bootstrap 4, Web Hosting, and JQuery.
        <p><Button className='channel_btn'><Link to={'Bootstrap'}>Open Channel</Link></Button></p>
        </Card>
    </Col>
  </Row>
</div>

export default Cards;