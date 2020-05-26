import React, {Component} from "react";
import {connect} from "react-redux";
import "./Register.scss";
import Button from "../../../components/atoms/button";
import {registerUserAPI} from "../../../config/redux/action";

class Register extends Component{
    state= {
        email: '',
        password: ''
    };
    handleChangeText= (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleClearForm= () => {
        this.setState({
            email: '',
            password: ''
        });
    }
    handleRegisterSubmit= async () =>{
        const {email,password}= this.state;
        const res = await this.props.registerAPI({email,password}).catch(err=>err);
        if (res) this.handleClearForm();
    };
    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" name="email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleChangeText}/>
                    <input className="input" name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleChangeText}/>
                    <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading}/>
                </div>
                {/*<button>Go to Dashboard</button>*/}
            </div>
        );
    }
}

const reduxState = (state)  => ({
    isLoading: state.isLoading
});
const reduxDispatch = (dispatch) => ({
    registerAPI : (data) => dispatch(registerUserAPI(data))
});
export default connect (reduxState, reduxDispatch) (Register);
