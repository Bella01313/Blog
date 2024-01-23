import React from 'react';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios";
import Topbar from '../../components/topbar/TopBar';
import confirm from 'antd/es/modal/confirm';
const Delete = () => {
    const schema = yup.object().shape({

    })
    const {register, handleSubmit, formState:{errors}}= useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit= async (data)=>{
      const formData = new FormData()
      formData.append('title', data.title);
      formData.append('description', data.description)
    //   formData.append("image", data.image[0])
      console.log(data)

      try{
        confirm('are you sure you want to delete this', 'okay');
        const res = await axios.delete('https://blogapi-se2j.onrender.com/api/v1/blogs/${id}', formData)
        alert('blog was deleted successfully');
        console.log(res)

      }catch(err){
        console.log(err)
      }
    } 
    return(
      <>
      <Topbar/>
    <div className='delete'>
         <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
        <form className="writeForm" onSubmit={handleSubmit(onSubmit)}>
        <button className="writeSubmit" type="submit" onSubmit={handleSubmit(onSubmit)}>
          Delete
        </button>
        </form>
    </div>
    </>
  )
}

export default Delete