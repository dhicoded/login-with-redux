import React,{ useState } from "react";
import logo from "./purplelogo.png";
import styles from '../allstyling.module.css';
import "./login.css";
import { Outlet, Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    userdetails: state.userDetails,
  };
};


let Login = (props) => {
  const [useremail, setUserEMail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault(); 

    let userdetails={
      "useremail": useremail,
      "password": password
    }

    props.dispatch({ type: "LOGIN" ,payload:userdetails});
  }

  return (
    <div className="wrapper">
      <div className="left-content">
        <div className="form-wrapper">
          <h1 className={styles.welcome} >Welcome back</h1>
          <h6 className="subwelcome">Welcome back!Please enter your details</h6>
          <div className="email">
            <label>Email</label>
            <br></br>
            <input
              type="email"
              id="useremail"
              onChange={e => setUserEMail(e.target.value)}
            ></input>
          </div>
          <div className="pwd">
            <label>Password</label>
            <br></br>
            <input type="password" id="userpwd" onChange={e => setPassword(e.target.value)}>
            </input>
          </div>
          <div className="subchecks">
            <div>
              <input
                type="checkbox"
                id="rememberme"
                name="rememberme"
                value="Remember Me"
              ></input>
              <label>Remember me</label>
            </div>
            <label>Forgot password</label>
          </div>
          <button className="signin" onClick={handleSubmit}>Sign in</button>
          <button className="googlesignin">Signin with Google</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      <div className="rightcontent">
        <div>
          <img src={logo}></img>
        </div>
      </div>
    </div>
  );
};

//export default Login;
export default connect(mapStateToProps)(Login);