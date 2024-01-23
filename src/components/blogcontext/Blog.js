import React from 'react'
import Topbar from '../topbar/TopBar';
const Blog =() => {
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

   try {
      console.log('request started');
       const res = await axios.put(`https://blogapi-se2j.onrender.com/api/v1/blogs/${selected._id}`, formData);
      alert('updated');
       console.log('request completed');
     } catch (err) {
       console.log(err);
     }
    }
  return (
    <>
    <Topbar/>
    <div className='blog'>
      <form className="writeForm" onSubmit={handleSubmit(onSubmit)}>
      <button className="writeSubmit" type="submit" onSubmit={handleSubmit(onSubmit)}>
          Delete
        </button>
      </form>
    </div>
    </>
  )
  }
export default Blog