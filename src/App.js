import React from 'react';
import logo from './logo.svg';
import './App.css';

import Eductation from './components/Eductation';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
// import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Work from './components/Work';
// import Blog from './components/Blog';
function App() {
  return (
    <div className="App">
      <div id="colorlib-page" style={{textAlign:"left"}}>
		  <div className="container-wrap">
		<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
			<div className="text-center">
				<div className="author-img" style={{ backgroundImage: " url(images/about1.jpg)"}}></div>
				<h2 id="colorlib-logo"><a href="index.html">Aditya Shankar Mishra</a></h2>
				<span className="position"><a style ={{color:"black"}}href="#">Software Developer</a></span>
			</div>
			<nav id="colorlib-main-menu" role="navigation" className="navbar">
				<div id="navbar" className="collapse">
					<ul>
						<li className="active"><a href="#" data-nav-section="home" style ={{color:"black"}}>Home</a></li>
						<li><a href="#" data-nav-section="about"style ={{color:"black"}}>About</a></li>
						{/* <li><a href="#" data-nav-section="services">Services</a></li> */}
						<li><a href="#" data-nav-section="skills"style ={{color:"black"}}>Skills</a></li>
						<li><a href="#" data-nav-section="education"style ={{color:"black"}}>Education</a></li>
						<li><a href="#" data-nav-section="experience"style ={{color:"black"}}>Experience</a></li>
						{/* <li><a href="#" data-nav-section="work">Work</a></li>
						<li><a href="#" data-nav-section="blog">Blog</a></li> */}
						<li><a href="#" data-nav-section="contact"style ={{color:"black"}}>Contact</a></li>
					</ul>
				</div>
			</nav>
			


			<div className="colorlib-footer">
				<p>
					<small> This website is made by 
					  <br></br>
					 <a href="https://imaditya.herokuapp.com/" target="_blank"> Aditya Shankar Mishra</a>
                   </small>
				</p>
				<ul>
					<li><a href="https://www.facebook.com/adityashankar.mishra"><i className="icon-facebook2"></i></a></li>
					<li><a href="https://www.instagram.com/mishraadityashankar/"><i className="icon-instagram"></i></a></li>
					<li><a href="https://www.linkedin.com/in/aditya-shankar-mishra-258aa9179/"><i className="icon-linkedin2"></i></a></li>
				</ul>
			</div>

     </aside>
     <div id="colorlib-main">
       <Home></Home>
      <About></About>
      {/* <Services></Services> */}
      <Skills></Skills>
      <Eductation></Eductation>
      <Experience></Experience>
      {/* <Work></Work>
      <Blog></Blog> */}
      <Contact></Contact>
     </div>
 
    </div>
	
    </div>
	
    </div>
  );
}

export default App;
