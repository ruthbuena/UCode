import React from "react";
import { Row, Input, Button} from 'react-materialize';
import axios from 'axios';




class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            signupFail: false

        }
    }

   // logIn() {
    //    console.log('this.state', this.state);
    //}

    onChange = (e) => {
        //e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    signIn = () => {
        const {email, password} = this.state;
        axios.post('/api/login', {
            email,
            password
        }).then(response => {
            this.setState({
                signinFail: false
            });
            console.log(response.data.email);

            this.props.history.push( '/channels' );
            this.props.onSuccessfulLogin();

        }).catch(response => {
            this.setState({
                signinFail: true
            });
        })
    }
      render(){
          return(

            <div className='container'>
                <Row>
                    <Input
                        type="email"
                        label="Email" s={6}
                        name='email'
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <Input
                        type="password"
                        label="password" s={6}
                        name='password'
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                    <Button waves='light'
                            onClick={() => {
                                this.signIn();
                            }}>
                    Submit</Button>

                </Row>
            </div>

        )
    }

}

export default Login
