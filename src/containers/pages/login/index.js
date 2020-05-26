import React, {Component} from "react";
import {connect} from "react-redux";
import {loginUserAPI} from "../../../config/redux/action";
import Button from "../../../components/atoms/button";

class Login extends Component{
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
    handleLoginSubmit= async () =>{
        const {email,password}= this.state;
        const {history} = this.props;
        const res = await this.props.loginAPI({email,password}).catch(err => err);
        if (res) {
            console.log("login success");
            this.handleClearForm();
            history.push('/');
        } else {
            console.log("login failed")
        }
    };
    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" name="email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleChangeText}/>
                    <input className="input" name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleChangeText}/>
                    <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading}/>
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
    loginAPI : (data) => dispatch(loginUserAPI(data))
});
export default connect(reduxState, reduxDispatch)(Login);
