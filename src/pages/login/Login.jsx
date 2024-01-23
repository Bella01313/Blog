import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import{yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Topbar from "../../components/topbar/TopBar";
const Login = () =>{
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(4).max(15).required("Password is required"),
  });

   const navi = useNavigate();

  const {register, handleSubmit, formState:{errors}}= useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit= async(data)=>{
    console.log(data)
    
    try{
      const res = await axios.post('https://blogapi-se2j.onrender.com/api/v1/users/login', data)
      console.log(res)
      navi('/Dashboard');
      alert('account was created successfully')
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <Topbar/>
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." {...register('email')}/>
        <p>{errors.username?.message}</p>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." {...register('password')}/>
        <p>{errors.password?.message}</p>
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
        <Link className="link" to="/register">Register</Link> 
    </div>
    </>
  )
}

export default Login