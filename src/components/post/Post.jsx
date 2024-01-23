import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "./post.css";
import axios from 'axios';
const Post = ({img}) => {
  const [blog, setBlog] = useState([]);

  useEffect(()=>{
    const post = async()=>{
      try {
        const response = await axios.get("https://blogapi-se2j.onrender.com/api/v1/blogs")
        const data = await response.data.blogs;
        setBlog(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    } 
    post() 

  }, [])

  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      It is very important for the customer to pay attention to the adipiscing process. To be assumed
        Do you leave the services of the architect? He is very hardworking
        let him flee, he will rebuke the flattery of those present, whom he has reasoned with lust
        and, by rejecting the training of some, laborious with hatred?
      </p>
    </div>
  );
}
export default Post