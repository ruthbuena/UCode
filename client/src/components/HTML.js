import React, {Component} from 'react';

const API = 'AIzaSyCjtaaj2Rb2BcH3MA1HqqadBTSWoQ3wHKY'
const playlist = 'PL081AC329706B2953'
const result = 50;

var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playlist}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

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
          console.log(responseJson);
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
        <button onClick={this.clicked}>HTML</button>
          {
            this.state.resultyt.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="youtube"><iframe  width="300" height="200" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }
}

export default Youtube;