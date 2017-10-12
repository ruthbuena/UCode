import React, {Component} from 'react';

const API = 'AIzaSyBJlzFGjZ3fx1_z4XJao9YbkVIDtQBcTA0'
// const channelID = ''
const playlistId = 'PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_'
const result = 50;

// var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLB03EA9545DD188C3&key=${API}`

var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${API}&Results=${result}&playlistId=${playlistId}`

class Node extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }
clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    console.log(finalURL);
    console.log(this.state.resultyt);

    return(
      <div>
        <button onClick={this.clicked}>Get Node videos</button>
          {
            this.state.resultyt.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="node"><iframe  title="Node" width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }
}

export default Node;
