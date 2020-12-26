import React, { Component } from 'react';
import axios from 'axios';
class Contact extends Component {

	constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage= this.onChangeMessage.bind(this);
       
        
        
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
          Name : '',
          Email : '',
          Subject : '',
          Message: '',
          NameError : '',
          EmailError : '',
          SubjectError : '',
          MessageError: '',
          backendmsg:'',
        
        }
    }
    onChangeName(e){
        this.setState({
            Name: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            Email:e.target.value
        });
    }
    onChangeSubject(e){
        this.setState({
            Subject: e.target.value
        });
    }
    onChangeMessage(e){
        this.setState({
            Message:e.target.value
        });
    }
 
    validate = () => {
      let isError=false;
      const errors = {
          NameError: "",
          EmailError: "",
          SubjectError: "",
          MessageError: ""
          
      };
  
    
        if (this.state.Name<1) {
            isError = true;
            errors.NameError = "Requires valid name";
         
        }
    
        if (this.state.Email<1) {
            isError = true;
            errors.EmailError = "Requires valid email address";
         
        }

        if (this.state.Subject<1) {
            isError = true;
            errors.SubjectError = "Requires valid subject";
         
        }

      
        if (!this.state.Message) {
            isError = true;
            errors.MessageError = "Requires valid Message";
        }
        this.setState({
            ...this.state,
            ...errors
          });

     
        console.log("is validated:" +this.state.isValidated); 
        return isError;
      };
    onSubmit(e){
      e.preventDefault();
      const err = this.validate();
      
    if (!err) {
     
  
      const newMsg={
  
          Name: this.state.Name,
          Email :this.state.Email,
          Subject :this.state.Subject,
          Message: this.state.Message,
          
       
      }
      
      const url = "https://imaditya.herokuapp.com/addmessage"
      fetch( url, {
        method: "POST",
        body: JSON.stringify(newMsg),
        headers: {
            "Content-Type": "application/json"
        }
    }) .then(message =>{ alert("Message Sent")
       console.log(message)})
       .catch(err=> {console.log(err)
        alert("Something went wrong")})
    //   axios.post('/addmessage', newMsg)
    //   .then(message =>{ alert(message.data)
    //   console.log(message)}
    //   ).catch(err=> {console.log(err)
    //     alert("Something went wrong")
     
    //   });
  
       
  
      this.setState({
		Name : '',
		Email : '',
		Subject : '',
		Message: '',
		NameError : '',
		EmailError : '',
		SubjectError : '',
		MessageError: ''
	  
      })
      
    }

    // window.location.reload();
   
   
  }

    render() {
        // let modalId,modalclassName;
    
        // if (this.state.Name<1 || this.state.Email<1 || this.state.Subject<1 || this.state.Message<1) {
        //   modalId="";
        //   modalclassName=""
        // } else {
        //   modalId="#Modal2";
        //   modalclassName="modal";
        // }
        return (
            <div>
                <section className="colorlib-contact" data-section="contact">
				<div className="colorlib-narrow-content">
					<div className="row" >
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Get in Touch</span>
							<h2 className="colorlib-heading">Contact</h2>
						</div>
					</div>
					<div className="row ">
						<div className="col-md-5">
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-globe-outline"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="mailto:adityashankarmishra3@gmail.com">adityashankarmishra3@gmail.com</a></p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-map"></i>
								</div>
								<div className="colorlib-text">
									<p>C 22/74 Kabir Chaura Varanasi.</p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-phone"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="tel://">+91 9260970643</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-7 col-md-push-1" >
							<div className="row" >
								<div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
									<form onSubmit={this.onSubmit}>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Name" value={this.state.Name} onChange={this.onChangeName}/>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.NameError}
                                            </div>
                                        </div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Email"value={this.state.Email} onChange={this.onChangeEmail}/>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.EmailError}
                                            </div>
                                        </div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Subject" value={this.state.Subject} onChange={this.onChangeSubject}/>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.SubjectError}
                                            </div>
                                        </div>
										<div className="form-group">
											<textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message" value={this.state.Message} onChange={this.onChangeMessage}></textarea>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.MessageError}
                                            </div>
                                        </div>
										<div className="form-group">
											<input type="submit" className="btn btn-primary " value="Send Message"  />
										    
                                        </div>
                                        
                                    {/* <div classNameName="modal" id="Modal2">
                                    <div classNameName="modal-dialog">
                                            <div classNameName="modal-content">
                                            
                                            
                                                <div classNameName="modal-body">
                                                 <h4 classNameName="text-primary text-center">Thankyou for submission :)</h4>
                                                </div>
                                                
                                            
                                                <div classNameName="modal-footer">
                                                <button type="button" classNameName="btn btn-primary" data-dismiss="modal">Close</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div> */}
                                   
									</form>
									
								</div>
								
							</div> 
						</div>
					</div>
				</div>
                
			</section>
              
{/*             
            <div  style={{
                     position: "right",
                     left: "0",
                     bottom: "0",
                     width:"70%",
                     backgroundColor: "grey",
                     color: "white",
                     textAlign: "center"
                }}>
                
                <a  href="https://www.facebook.com/Ravi-Shankar-Mishra-116830953060493/?notif_id=1570866708800055&notif_t=p2p_friend_migration" target="facebook"><i style={{color:"#C0C0C0"}} classNameName="fa fa-facebook-official" ></i></a>
                                <a href="https://www.instagram.com/ravi_shankar_mishra_8869/" target="instagram"><i className="fa fa-instagram " style={{color:"#C0C0C0"}} ></i></a>
                                
                                <a href="mailto:ravishankar_mishra@hotmail.com" target="mail"></a>
                                <a href="https://www.youtube.com/channel/UCaMVlyDF0tg0eELWuBlpEAw" target="youtube"><i classNameName="fa fa-youtube " style={{color:"#C0C0C0"}} ></i></a>
                                 
                                <p classNameName="w3-medium" style={{color:"#C0C0C0"}}>Developed by <a href="https://www.linkedin.com/in/aditya-shankar-mishra-258aa9179/" target="linkedin" >Aditya Shankar Mishra</a></p>
                </div>
         */}
                               
            </div>
        );
    }
}

export default Contact;