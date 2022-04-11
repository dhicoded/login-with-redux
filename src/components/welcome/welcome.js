import React,{ useState } from "react";
import logo from "./purplelogo.png";
import "./welcome.css";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    isAuth:state.isAuth,
    userdetails: state.userDetails,
  };
};

let Welcome = (props) => {
  console.log(props)
  return (
    <div className="wrapper">
      <div className="left-content">
        <div className="form-wrapper">
          <h1 className="welcome">Welcome back {props.userdetails.fname}</h1>
          <h6 className="subwelcome">Sit back and enjoy</h6>
          <button className="signin" onClick={()=>{props.dispatch({ type: "LOGOUT" });}}>Sign Out</button>
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

export default connect(mapStateToProps)(Welcome);