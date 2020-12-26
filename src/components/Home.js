import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
				<div className="flexslider js-fullheight">
					<ul className="slides">
				   
				   	<li style={{backgroundImage: "url(images/img_bg_2.jpg)"}}>
				   		<div className="overlay"></div>
				   		<div className="container-fluid">
				   			<div className="row">
					   			<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div className="slider-text-inner">
					   					<div className="desc">
										   <h1 style={{color:"rgb(245, 237, 237)"}}>Hi! <br/>I'm Aditya<br/><br/> <br/></h1>
						   					
												{/* <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2> */}
												{/* <p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3"></i></a></p> */}
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
					   <li style={{backgroundImage: "url(images/img_bg_1.jpg)",fontSize:"16px"}} data-stellar-background-ratio="0.5">
				   		<div className="overlay"></div>
				   		<div className="container-fluid">
				   			<div className="row">
					   			<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" >
					   				<div className="slider-text-inner js-fullheight" style ={{color:"#d3d3d3",borderColor:"#d3d3d3"}}>
					   					<div className="desc">
										   <h1 style={{color:"rgb(245, 237, 237)"}}>I  am a <br/> Developer<br/></h1>
						   					{/* <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2> */}
												<p><a className="btn btn btn-primary btn-learn" href="https://drive.google.com/uc?export=download&id=1KBFznfwB0MwU6-ACb5yh5ujC2oi7SEYN" download>Download CV <i className="icon-download4"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
						   {/* https://drive.google.com/file/d/1KBFznfwB0MwU6-ACb5yh5ujC2oi7SEYN/view?usp=sharing
						   https://drive.google.com/uc?export=download&id=YourFile'sID */}
				   	</li>
				  	</ul>
			  	</div>
			</section>
            </div>
        );
    }
}

export default Home;