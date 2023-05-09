import axios from 'axios';
import React,{useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext, authContext } from '../../context/Auth';

export const setAuthToken = (token:any) => {
  if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else
      delete axios.defaults.headers.common["Authorization"];
}

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const {setUser} = useContext(AuthContext) as authContext;

  const handleLogin = (e:React.FormEvent) => {

    e.preventDefault();

    if(username==="" || password===""){
      alert("Please enter data in all the fields");
    }
  
    axios.post("https://reqres.in/api/login", {
      email: username,
      password: password
    })
      .then(response => {

        console.log(response.data)
       
        const token  =  response.data.token;
  
        //set JWT token to local
        localStorage.setItem("token", token);
  
        //set token to axios common header
        setAuthToken(token);
        
        setUser(username);
  
        //redirect user to dashboard
        navigate("/dashboard", {replace:true});
      })
      .catch((err:any) => console.log(err));
  };

  return (
    <main>
      <form className={"logInContainer"}  autoComplete='off'>
        <label htmlFor='user' id="userLabel">
          Username
        </label>
        <input type="text" id="user" onChange={ e => setUserName(e.target.value) }/>
        <label htmlFor='pass' id="passLabel">
          Password
        </label>
        <input type="password" id="pass" onChange={ e => setPassword(e.target.value) }/>
        <button type='submit' className='logInBtn' onClick={handleLogin}>Log In</button>
      </form>
    </main>
  )
}

export default Login;