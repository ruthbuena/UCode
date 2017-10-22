import React, { Component } from "react";
import { Row, Input, Button} from 'react-materialize';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',

        }
    }

    signUp() {
        console.log('this.state', this.state);
    }

    render() {
        return (
            <div>
                <Row className='container'>
                    <Input
                        label="First Name" s={6}
                        onChange={event => this.setState({firstName: event.target.value})}

                    />

                    <Input
                        label="Last Name" s={6}
                        onChange={event => this.setState({lastName: event.target.value})}

                    />

                    <Input
                        type="email"
                        label="Email" s={6}
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <Input
                        type="password"
                        label="password" s={6}
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <Button
                        waves='light'
                        onClick={() => {
                            this.signUp();
                        }}>Submit
                    </Button>

                </Row>
            </div>

        )
    }
};

export default Register;