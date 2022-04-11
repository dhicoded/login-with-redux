import axios from "axios";

export async function loginUser(credentials) {
    let resp=await axios.post("http://localhost:3000/verifylogin/authenticatelogin", credentials)
    alert(resp.data.message);
    return resp.data    
}

//export default loginUser;

export async function addUser(userdetails) {
    let resp=await axios.post("http://localhost:3000/verifylogin/addNewUser", userdetails)
    alert(resp.data.message);
    return resp.data;
}