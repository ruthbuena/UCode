import React from 'react';
import Welcome from './welcome';
import Header from './Header';


class Home extends React.Component {

   state = {
        authenticated: false
    } 

    render(){
        return (

		<div>
			<Header authenticated={this.state.authenticated} />
			<Welcome />

		</div>

        )

    }
}


export default Home;