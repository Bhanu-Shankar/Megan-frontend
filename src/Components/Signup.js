import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';



class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPass: "",
            hidden: true

        }
    }

    handleusername = (event) => {
        this.setState({ username: event.target.value })
    }

    handleemail = (event) => {
        this.setState({ email: event.target.value })
    }

    handlepassword = (event) => {
        this.setState({ password: event.target.value })
    }

    handleconfirmpass = (event) => {
        this.setState({ confirmPass: event.target.value })
    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    signup = () => {
        if (this.state.username === "" || this.state.username === null) {
            swal({ title: "Enter your username", icon: "info" });
        } else if (this.state.email === "" || this.state.email === null) {
            swal({ title: "Enter your email address", icon: "info" });
        } else if (this.state.password === "" || this.state.password === null) {
            swal({ title: "Enter your password", icon: "info" });
        } else if (this.state.confirmPass === "" || this.state.confirmPass === null) {
            swal({ title: "Enter your confirm password", icon: "info" });
        } else if (this.state.confirmPass !== this.state.password) {
            swal({ title: "Confirm password don't matches password" });
        } else {
            console.log('signupmethod', this.state.username, this.state.email, this.state.password, this.state.confirmPass);
            axios.post('http://localhost:3000/users/register', {
                "userName": this.state.username,
                "email": this.state.email,
                "password": this.state.password,
                "confirmPass": this.state.confirmPass
            }).then((respdata) => {
                console.log("respdata", respdata.data)
                if(!respdata.data.status){
                    swal({title:"Register user failed"})
                }else{
                    this.props.history.push('/Signin')
                }
            }).catch((errs) => {
                console.log("err", errs)
            })
        }
    }



    render() {
        return (
            <>
                <div className="main-body">
                    <div className="container h-100 ">

                        <div className="formContent">
                            <h1>Sign Up</h1>
                            <div>
                                <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleusername}></input>
                                <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleemail}></input>

                                <div className="pas-field">
                                    <input type={this.state.hidden ? 'password' : 'text'} placeholder="password" value={this.state.password} onChange={this.handlepassword}></input>
                                    <i class="fa fa-eye" aria-hidden="true" onClick={this.toggleShow}></i>
                                </div>
                                <div className="pas-field">
                                    <input type={this.state.hidden ? 'password' : 'text'} placeholder="Confirm password" value={this.state.confirmPass} onChange={this.handleconfirmpass}></input>
                                    <i class="fa fa-eye" aria-hidden="true" onClick={this.toggleShow}></i>
                                </div>


                                <input type="submit" className="fadeIn fourth" value="Sign Up" onClick={this.signup}></input>
                            </div>
                            <div id="formFooter">
                                <p>Already registered <a className="underlineHover" href="/Signin">Sign In</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}


export default Signup;
