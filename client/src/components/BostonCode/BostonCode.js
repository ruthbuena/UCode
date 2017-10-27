
import React from 'react';
import Topics from './Topics';
import {Button} from 'react-materialize';

const BostonCode = () =>
    <div>
      <Topics />
      <Button floating large className='blue-grey darken-1' waves='light' icon='home' style={{top: '35em', right: '2em', position: 'fixed'}} node='a' href='/channels' />
    </div>
export default BostonCode;