import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggle:1
        }
    }
    toggleStage(index){
        this.setState({toggle:index});
    }

    render(){
        return(
            <react.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">HootSuite</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a className={this.state.toggle===1?"nav-link active":"nav-link"} href="#" onClick={()=>this.toggleStage(1)}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a className={this.state.toggle===2?"nav-link active":"nav-link"} href="#" onClick={()=>this.toggleStage(2)}>Publish</a>
                        </li>
                        <li class="nav-item">
                            <a className={this.state.toggle===3?"nav-link active":"nav-link"} href="#" onClick={()=>this.toggleStage(3)}>Analysis</a>
                        </li>
                        <li class="nav-item">
                            <a className={this.state.toggle===4?"nav-link active":"nav-link"} href="#" onClick={()=>this.toggleStage(4)}>Enage</a>
                        </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-in"}>
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-up"}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </nav>
            </react.Fragment>
        )
    }
}

export default Navbar;