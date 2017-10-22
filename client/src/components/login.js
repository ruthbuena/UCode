import React, { Component } from "react";
import { Row, Input, Button} from 'react-materialize';
import axios from 'axios';


class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            //signinFail: false
        }
    }

    logIn() {
        console.log('this.state', this.state);
    }

    /*handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    loggingIn = () => {
        const {email, password} = this.state;
        axios.post('/signin', {
            email,
            password
        }).then(response => {
            this.setState({
                signinFail: false
            });
            this.props.onSuccess(response.email);
            this.props.history.push('/home');
        }).catch(response => {
            this.setState({
                signinFail: true
            });
        })
    }*/


    render() {
        return (
            <div className='container'>
                <Row>
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
                    <Button waves='light'
                            onClick={() => {
                                this.logIn();
                            }}>
                    Submit</Button>

                </Row>
            </div>

        )
    }

}

export default Login
