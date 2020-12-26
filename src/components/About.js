import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-12">
							<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="col-md-12">
									<div className="about-desc">
										<span className="heading-meta">About Us</span>
										<h2 className="colorlib-heading">Who Am I?</h2>
										<p><strong>Hi I'm Aditya.</strong> I am a full stack developer from Varanasi with a demonstrated history of working in the Information Technology industry. Skilled in Website Development (MERN-Stack), Android Development, dotNET Framework and a passionate musician. 
										Currently pursuing engineering in Information Technology (IT) from IIIT Gwalior. Looking for new opportunities and challenges.</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
									<div className="services color-1">
										<span className="icon2"><i className="icon-bulb"></i></span>
										<h3>Frontend development</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
									<div className="services color-2">
										<span className="icon2"><i className="icon-globe-outline"></i></span>
										<h3>Backened development</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
									<div className="services color-3">
										<span className="icon2"><i className="icon-data"></i></span>
										<h3>Full stack development</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-4">
										<span className="icon2"><i className="icon-phone3"></i></span>
										<h3>Android development</h3>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 animate-box " data-animate-effect="fadeInLeft">
									<div className="hire" >
										<h2 style={{textAlign:"center"}}><br/>  Developer  || Coder || Musician <br/></h2>
										{/* <a href="#" className="btn-hire">Hire me</a> */}
									 </div>
								</div>
							</div> 
						</div>
					</div>
				</div>
			</section>
			
            </div>
        );
    }
}

export default About;