import React from 'react'
import { Parallax } from 'react-parallax';
import Nasa from '../../assets/ParallaxImage/nasa.jpg';
import VideoPlayer from "react-video-js-player";
import Runner from "../../assets/Runner.mp4";






const ImageOne = () => {

    const videoSrc = Runner;
    const poster = "https://vjs.zencdn.net/v/oceans.mp4"

    return (
    <Parallax className='image' bgImage={Nasa} strength={200}>
        <div className="content" >
           <span className='img-txt'> Run For your life</span>

           <VideoPlayer src={videoSrc} width="500" height="1000"   />
        </div>
    </Parallax>
    );
};
export default ImageOne