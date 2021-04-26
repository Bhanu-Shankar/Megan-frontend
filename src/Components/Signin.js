import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';




class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            hidden: true


        }
    }


    handleemail = (event) => {
        this.setState({ email: event.target.value })
    }

    handlepassword = (event) => {
        this.setState({ password: event.target.value })
    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    signin = () => {
        if (this.state.email === "" || this.state.email === null) {
            swal({ title: "Enter your email", icon: "info" })
        } else if (this.state.password === "" || this.state.password === null) {
            swal({ title: "Enter your password", icon: "info" })
        } else {
            console.log("button clicked signin", this.state.email, this.state.password)
            axios.post('http://localhost:3000/users/login', {
                "email": this.state.email,
                "password": this.state.password
            }).then((respdata) => {
                console.log("respdatasss", respdata.data)
                if (!respdata.data.status) {
                    swal({ title: "Login failed!", icon: "error" })
                } else {
                    console.log("jwtToken", respdata.data)
                    sessionStorage.setItem("jwtToken", respdata.data.token);
                    this.props.history.push('/Dashboard')
                }
            }).catch((err) => {
                console.log('errr', err)
            })
        }
    }


    render() {
        return (
            <>
                <div className="main-body">
                    <div className="h-100">
                        <div className="flex-div">
                            <div className="col-sm-8 no-padding">
                                <div className="left-image-section">
                                    {/* <h3>left</h3> */}
                                </div>
                            </div>
                            <div className="col-sm-4">
                                
                                <div className="formContent">
                                    <h2>Signin</h2>
                                    <div>
                                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleemail}></input><br />

                                        <div className="pas-field">
                                            <input type={this.state.hidden ? 'password' : 'text'} placeholder="password" value={this.state.password} onChange={this.handlepassword}></input>
                                            <i class="fa fa-eye" aria-hidden="true" onClick={this.toggleShow}></i>
                                        </div>
                                        <button className="custom-blue-btn fadeIn fourth" onClick={this.signin}>Sign In</button>
                                    </div>
                                    <div id="formFooter">
                                        <p>Don't have an account? <a className="" href="/Signup">Sign up</a></p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </>
        )
    }
}


export default Signin;