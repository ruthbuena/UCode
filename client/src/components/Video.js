import React from 'react';
import Node from './Node';
import HTML from './HTML';

const Video = props =>
	<div className="video">
		<Node video={props.frame}/>
		<HTML video={props.frame}/>
	</div>

export default Video;


