import React, {Component} from 'react';
import {Button} from 'react-materialize';
import '../TopicComponent.css';


const API = 'AIzaSyCjtaaj2Rb2BcH3MA1HqqadBTSWoQ3wHKY'
const playlist = 'PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt'
const result = 50;

var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playlist}&part=snippet,id&order=date&maxResults=${result}`

class Redux extends Component {

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
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.snippet.resourceId.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
      // console.log(finalURL);
      console.log(this.state.resultyt);

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

export default Redux;