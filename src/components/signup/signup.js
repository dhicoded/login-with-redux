import React,{useState} from "react";
import logo from "./purplelogo.png";
import styles from '../allstyling.module.css';
import "./signup.css";
import { Outlet, Link } from "react-router-dom";

let SignUp = () => {
  const [userEMail, setUserEMail] = useState();
  const [userPass, setUserPwd] = useState();
  const [userFName, setUserFName] = useState();
  const [userLName, setUserLName] = useState();


  async function addNewUser(credentials) {
    return fetch('http://localhost:3000/verifylogin/addNewUser', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
  
  const handleSubmit = async e => {
    e.preventDefault(); 
    const response = await addNewUser({
      "useremail":userEMail,
      "password": userPass,
      "userFName":userFName,
      "userLName":userLName,
    });
    console.log('getting',response.message)
  }
  return (
    <div className="wrapper">
      <div className="left-content">
        <div className="form-wrapper">
          <h1 className="welcome">Sign Up</h1>
          <h6 className="subwelcome">Please enter your details to Sign up</h6>
          <div className="name-wrapper">
            <div className="fname">
              <label>FirstName</label>
              <br></br>
              <input type="text" id="userfname" placeholder="First Name"  onChange={e => setUserFName(e.target.value)}></input>
            </div>
            <div className="lname">
              <label>LastName</label>
              <br></br>
              <input type="text" id="userlname" placeholder="Last Name"  onChange={e => setUserLName(e.target.value)}></input>
            </div>
          </div>
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
            <input type="password" id="userpwd"  onChange={e => setUserPwd(e.target.value)}></input>
          </div>
          <div className="rpwd">
            <label>Password</label>
            <br></br>
            <input type="password" id="ruserpwd" placeholder="********"></input>
          </div>
          <div className="subchecks">
            <div>
              <input type="checkbox" id="terms" name="terms" value=""></input>
              <label>
                I've read and agree with Terms of Service and our Privacy Policy
              </label>
            </div>
          </div>
          <button className="signin" onClick={handleSubmit}>Sign Up</button>
          <p> OR </p>
          <button className="googlesignin">Signup with Google</button>
          <p>Or Go back to... <Link to ="/">Log in</Link></p>
        </div>
      </div>
      <div className="rightcontent">
        <div>
          <img src={logo}></img>
        </div>
        1E
      </div>
    </div>
  );
};

export default SignUp;
