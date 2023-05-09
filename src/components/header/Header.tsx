import React, { useContext } from 'react';
import "./header.css";
import {useNavigate} from "react-router-dom";
import { AuthContext, authContext } from '../../context/Auth';

const Header = () => {
  const navigate = useNavigate();
  const {user,setUser} =  useContext(AuthContext) as authContext;

  const logOut = () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    
    if(!token){
      setUser(null);
      navigate("/");
    }
  }

  return (
    <header className={"header"}>
        <h1>Todo List</h1>
        {user && 
        <>
        <div className='userInfo' title={user.split('@')[0]}><span className='letter'>{user[0].toUpperCase()}</span></div>
        <button onClick={logOut} className='logOut'>Log Out</button>
        </>
        }
    </header>
  )
}

export default Header;