import React from 'react';
import './home.css';
import video from '../../assets/background-video.mp4';

function Home() {
  return (
    <section className="home">
      <div className='bg'>
      <div className='video'><video autoPlay loop muted>
        <source src={require("../../assets/background-video.mp4")} type="video/mp4" />
      </video>
      </div>
      </div>
      <div className="text">
        <h1>Hello,<br/>I'm</h1>
        <h2>Divisha Tahiliani</h2>
        <h3 id="typewriter-text" className='heading'><span>A Web Developer</span></h3>
      </div>
      <button className='my-projects prjct'><span>MY PROJECTS</span></button>
      <a href='https://drive.google.com/file/d/1grEfxKZBi3XxoSA7md28YI84gIimeYUu/view?usp=sharing'><button className='my-projects resume'><span>MY RESUME</span></button></a>
    </section>
  );
}

export default Home;
