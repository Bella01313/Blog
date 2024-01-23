import "./write.css";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios";
import Topbar from "../../components/topbar/TopBar";
 const Write = () =>{
  const schema = yup.object().shape({

  })
  const {register, handleSubmit, formState:{errors}}= useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit= async (data)=>{
    const formData = new FormData()
    formData.append('title', data.title);
    formData.append('description', data.description)
    formData.append("image", data.image[0])
    console.log(data)
    try{
      const res = await axios.post('https://blogapi-se2j.onrender.com/api/v1/blogs', formData)
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <Topbar/>
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} {...register('image')} />
          <input className="writeInput" placeholder="Title"  type="text"  autoFocus={true} {...register('title')}/>
        </div>
        <div className="writeFormGroup">
          <textarea className="writeInput writeText"  placeholder="Tell your story..."  type="text"  autoFocus={true} {...register('description')} />
        </div>
        <button className="writeSubmit" type="submit" onSubmit={handleSubmit(onSubmit)}>
          Publish
        </button>
      </form>
    </div>
    </>
  );
}
export default Write