import React from "react";
import { Row, Input, Button} from 'react-materialize';
import axios from 'axios';

class Register extends React.Component {

    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            //signupFail: false

        }
    }

    onChange = (e) => {
        e.preventDefault();
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };



    SignUp = () => {
        const {firstname, lastname, email, password} = this.state;

        axios.post('/signup', {
            firstname,
            lastname,
            email,
            password
        }).then(response => {
            this.setState({
                signupFail: false
            });
            this.props.onSuccess(response.email);
            this.props.history.push('/welcome');
        }).catch(response => {
            this.setState({
               signupFail: true
            })
        })
    };

    /*signUp() {
        console.log('this.state', this.state);
    }
*/
    render() {

        return (
            <div>
                <Row className='container'>
                    <Input
                        label="First Name" s={6}
                        type="text"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.onChange}

                    />

                    <Input
                        label="Last Name" s={6}
                        type="text"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.onChange}
                    />

                    <Input
                        type="email"
                        label="Email" s={6}
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                    />

                    <Input
                        type="password"
                        label="password"
                        name ="password"
                        value={this.state.password}
                        s={6}
                        onChange={this.onChange}
                    />
                    <Button waves='light'
                            onClick={() => {
                                this.SignUp()
                            }}>
                        Submit
                    </Button>

                </Row>
            </div>

        )
    }
}

export default Register;