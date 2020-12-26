import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Experience</span>
							<h2 className="colorlib-heading animate-box">Work Experience</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
				         <div className="timeline-centered">
						   <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">

					               <div className="timeline-icon color-1">
					                  <i className="icon-pen2"></i>
					               </div>

					               <div className="timeline-label">
					                  <h2><a href="https://industry-4nsv.herokuapp.com/">INDUSTRY4-NSV | Software Engineering Intern</a> <span>June 2020 - Present</span></h2>
					                  <p>It's a web application for providing role-based data handling solutions for the company. 
										 Backend is based on NodeJs and JWT authentication system along with the non-relational MongoDB database. ReactJS is used for client-side activities.
									 </p>
					               </div>
					            </div>
					        </article>
							<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">

					               <div className="timeline-icon color-2">
					                  <i className="icon-pen2"></i>
					               </div>

					               <div className="timeline-label">
					                  <h2><a href="https://github.com/mishraadityashankar/TransEcom/">TransEcom | B.tech Project</a> <span>Aug 2020 - Present</span></h2>
					                  <p>Blockchain-based decentralized E-commerce platform based on Ethereum blockchain and MERN stack.
									   Dependencies used- Ganache, Truffle, Metamask along with node packet manager.
                                       Available on Github.</p>
					               </div>
					            </div>
					         </article>
						   <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">

					               <div className="timeline-icon color-3">
					                  <i className="icon-pen2"></i>
					               </div>

					               <div className="timeline-label">
					                  <h2><a href="#colorlib-hero">LANDIS+GYR | Software Engineering Intern</a> <span>Dec 2019 – Jan 2020</span></h2>
					                  <p>A mobile application for easy installation of firmware in electric meters which was earlier installed by using computer and CMRI devices. 
										  This application is built on Xamarin Android which is based on C# and DotNet framework.</p>
					               </div>
					            </div>
					         </article>

					         <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">

					               <div className="timeline-icon color-4">
					                  <i className="icon-pen2"></i>
					               </div>

					               <div className="timeline-label">
					                  <h2><a href="#colorlib-hero">Portfolio on React</a> <span>Nov 2019</span></h2>
					                  <p>This portfolio is built on react and with backend services on Node.</p>
					               </div>
					            </div>
					         </article>


					         <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-5">
					                  <i className="icon-pen2"></i>
					               </div>
					               <div className="timeline-label">
					               	<h2><a href="https://ravi-s-mishra.herokuapp.com/">Project-Ravi</a> <span>June 2019 -July 2019</span></h2>
					                  <p>Its a website of Pt Ravi Shankar Mishra, who is a famous Kathak dancer and teacher of Banaras Gharana. Website is based on MERN stack.</p>
					               </div>
					            </div>
					         </article>

					         <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-1">
					                  <i className="icon-pen2"></i>
					               </div>
					               <div className="timeline-label">
					               	<h2><a href="https://play.google.com/store/apps/details?id=com.infotsav.test&hl=en">Infotsav App</a> <span>Dec 2018 - Jan 2019</span></h2>
					                  <p>This app was build for Central India biggest technical fest Infotsav 2k19 hosted by ABV-IIITM Gwalior</p>
					               </div>
					            </div>
					         </article>
							 <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-2">
					                  <i className="icon-pen2"></i>
					               </div>
					               <div className="timeline-label">
					               	<h2><a >Hackathon (Backend Developer)</a> <span>Jan 2019</span></h2>
									   <p>This application was developed for a hackathon event in Infotsav 2k19  hosted by ABV-IIITM Gwalior. </p>
					               </div>
					            </div>
					         </article>

					         <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-3">
					                  <i className="icon-pen2"></i>
					               </div>
					               <div className="timeline-label">
					               	<h2><a>Graphic Desinging</a> <span>July 2017 - Jan 2018</span></h2>
					                  <p>Intern at SHASHTRA AUTOMATION LLP in Graphic Designing from July 2017 to Jan 2018.</p>
					               </div>
					            </div>
					         </article>

			

					         <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-none">
					               </div>
					            </div>
					         </article>
					      </div>
					   </div>
				   </div>
				</div>
			</section>

            </div>
        );
    }
}

export default Experience;