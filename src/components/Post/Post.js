import React, {Component} from "react";
import axios from "axios";
import { withRouter } from "react-router";

class Post extends Component{
  
    constructor(props) {
        super(props);
       this.Message = null;
       this.authUrl = null;
        this.state={
            Title:null,
            Description:null,
            File:null,
            Tags:"testing",
            Message:null,
            authUrl:'',
        }
        
        this.Title = this.Title.bind(this);  
        this.Description = this.Description.bind(this);  
        this.File = this.File.bind(this);  
        this.AuthUrl = this.AuthUrl.bind(this);
        this.uploaddata = this.uploaddata.bind(this);
        this.authUser =  this.authUser.bind(this);
        this.uploaddata_instagram = this.uploaddata_instagram.bind(this);
      }
      
      Title(event) {
        this.setState({ Title: event.target.value })
      } 
      AuthUrl(value){
        this.setState({authUrl:value});
      }
      
      Description(event) {
        this.setState({ Description: event.target.value })
      }
      File(event) {
        this.setState({ File: event.target.files[0] })
      }
      componentDidMount() {
        if(this.count==0){
          window.addEventListener('load', this.authUser);
          
        }
     }
    authUser = async (event) =>{
      event.preventDefault();
      let res = await axios.get('http://localhost:5000/postauth');
      this.setState({authUrl:res.data.url});
      this.setState({Message:res.data.message});
      console.log(res);
    }

    uploaddata = async (event)=>{
        event.preventDefault();
        const file = document.querySelector('input[type="file"]').files[0];
        let data = new FormData();
        data.append("file",this.state.File);
        data.append("title",this.state.Title);
        data.append("description",this.state.Description);      
        let res = await axios.post('http://localhost:5000/upload',data);
        if(res.data.message){
          this.setState({Message:res.data.message});
        }else {
          this.setState({Message:res.data.message});
        }
    }

    uploaddata_instagram = async(event) =>{
      event.preventDefault();
      let data = new FormData();
      data.append("file",this.state.File);
      data.append("title",this.state.Title);
      data.append("description",this.state.Description);  
      console.log(this.state.File);
      console.log(data);
      axios.post('http://127.0.0.1:5000/instagram',data)
        .then((response)=>{
          console.log(response);
        })
    }

   
    
    callback(event){
      // axios
      //   .get('http://localhost:5000/callback')
      //   .then(function (res) {
      //     console.log(res);
      //       if (res.status==200) {
      //         console.log("work");
              
      //       } else if (res.status == 401) {
      //         alert("Oops! ");
      //       }
      //     }, function (e) {
      //       alert("Error submitting form!");
      //     });
      let res = axios.get('http://localhost:5000/callback');
    }

    checkStatus = async (event)=> {
      let res = await axios.get('http://localhost:5000/checkStatus');
      if(res.data){

      }
      this.setState({authUrl:res.data.url});
      this.setState({Message:res.data.message});
      console.log(res);
    }

    render(){
        let tags = null;
        let alertBox = null;
        let authButton = null;
        if(this.state.Message){
          alertBox = (<div className="alert alert-primary" role="alert">
                        {this.state.Message}
                    </div>);
        }
        if(this.state.authUrl){
          authButton = (
            <a href={this.state.authUrl} className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click Here!</a>
          );
        }
        if(!this.state.authUrl){
          authButton = (<button className="btn btn-primary" onClick={this.authUser}>Auth</button>)
        }
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="col-lg-6 offset-lg-3">
                      {alertBox}
                        <div className="row justify-content-center">
                        <ul class="nav nav-pills nav-justified">
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Twitter</a>
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>

                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Facebook</a>
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>

                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Linkedln</a>
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>

                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Instagram</a>
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>

                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Youtube</a>
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>

                          </li>
                        </ul>
                        <form onSubmit={this.uploaddata_instagram} method="POST" encType="multipart/form-data">
                            <div className="form-group">
                                <label for="txt_title">Title</label>
                                <input type="text" className="form-control" id="txt_title" onChange={this.Title} />
                            </div>
                            <div className="form-group form-check">
                                <div>
                                    <input type="checkbox" className="form-check-input" id="cb_twitter" />
                                    <label className="form-check-label" for="cb_twitter">Twitter</label>
                                </div>
                                <div>
                                    <input type="checkbox" className="form-check-input" id="cb_facebook" />
                                    <label className="form-check-label" for="cb_facebook">Facebook</label>    
                                </div>
                                <div>
                                    <input type="checkbox" className="form-check-input" id="cb_linkedln" />
                                    <label className="form-check-label" for="cb_linkedln">Linkedln</label>
                                </div>
                                <div>
                                    <input type="checkbox" className="form-check-input" id="cb_youtube" />
                                    <label className="form-check-label" for="cb_youtube">Youtube</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="input_file">Select Your Post</label>
                                <input type="file" className="form-control-file" id="input_file" onChange={this.File}/>
                            </div>
                            <div className="form-group">
                                <label for="txt_description">Description</label>
                                <textarea className="form-control" id="txt_description" rows="3" onChange={this.Description}></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">Publish</button>
                             
                            {/* <button className="btn btn-primary" onClick={this.callback}>callbakc</button> */}
                        </form>
                        
                        </div>
                        
                        {authButton}
                    </div>
                </div>

            </React.Fragment>
        );

    }
}
export default withRouter(Post);