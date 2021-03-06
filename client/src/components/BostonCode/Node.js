import React, {Component} from 'react';
import {Button} from 'react-materialize';
import '../TopicComponent.css';


const API = 'AIzaSyBJlzFGjZ3fx1_z4XJao9YbkVIDtQBcTA0'
const playlistId = 'PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_'
const result = 50;

var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playlistId}&part=snippet,id&order=date&maxResults=${result}`

class Node extends Component {

    constructor(props){
        super(props);

        this.state = {
          resultyt: []
        };
        this.clicked = this.clicked.bind(this);
        this.clicked();
    }

    clicked(){

      fetch(finalURL)
          .then((response) => response.json())
          .then((responseJson) => {
            const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.snippet.resourceId.videoId);
            this.setState({resultyt});
          })
          .catch((error) => {
          });
    }

    render(){
      
    return(
      <div>

          <div className='video_container'>
            
            {
              this.state.resultyt.map((link, i) => {
                console.log(link);
                var frame = <div className='ind_video'><iframe key={i}  title="Node" src={link} frameBorder="0" allowFullScreen></iframe></div>
                return frame;
              })
            } 
          </div>


    </div>
    );
  }
}

export default Node;
