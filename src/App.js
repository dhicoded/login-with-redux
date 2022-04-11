import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome/welcome";
import { connect } from "react-redux";
import { computeHeadingLevel } from "@testing-library/react";

const mapStateToProps = (state) => {
  console.log('hello',state)
  return {
    userDetails: state.userDetails,
    isAuth:state.isAuth
  };
};

let App=(props)=> {

  if (props.isAuth) {
    return <Welcome/>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/signup" strict element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps)(App);