import "./register.css"
import { Link, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import{yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import Topbar from "../../components/topbar/TopBar"
const Register = () =>{
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(4).max(15).required("Password is required"),
  });
  const navi = useNavigate();
  const {register, handleSubmit, formState:{errors}}= useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit= async (data)=>{
    try{
      const res = await axios.post('https://blogapi-se2j.onrender.com/api/v1/users', data)
      console.log(res)
      alert('account was created successfully')
      navi('/');
    }catch(err){
      console.log(err)
    }
  }

    return (
    <>
      <Topbar/>
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..."{...register('username')}/>
        <p>{errors.username?.message}</p>
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..."{...register('email')} />
        <p>{errors.email?.message}</p>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..."{...register('password')} />
        <p>{errors.password?.message}</p>
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
        <Link className="link" to="/login">Login</Link>
    </div>
    </>
    )
}
export default Register