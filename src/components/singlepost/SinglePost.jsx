import { Link } from "react-router-dom";
import "./singlepost.css";
import Topbar from "../topbar/TopBar";
export default function SinglePost() {
  
  return (
    <>
    
    <div className="singlePost"><Topbar/>
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Blog
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Hello, it's really a pain to be followed. This error, in some cases, prevents them from pains, just pains! 
        Pleasure needs to make him happy, get pleasure from the way he hates them! Hello, it's really a pain to be followed. 
        This error, in some cases, prevents them from pains, just pains! Pleasure needs to make him happy, 
        get pleasure from the way he hates them! Hello, it's really a pain to be followed. 
        This error, in some cases, prevents them from pains, just pains! Pleasure needs to make him happy, 
        get pleasure from the way he hates them! Hello, it's really a pain to be followed. 
        
        This error, in some cases, prevents them from pains, just pains! Pleasure needs to make him happy, 
        get pleasure from the way he hates them! Hello, it's really a pain to be followed. 
        This error, in some cases, prevents them from pains, just pains! Pleasure needs to make him happy, 
        get pleasure from the way he hates them!
        Hello, it's really a pain to be followed. 
        This error, in some cases, prevents them from pains, just pains! Pleasure needs to make him happy,
         get pleasure from the way he hates them! Hello, it's really a pain to be followed. 
         This error, in some cases, prevents them from pains, just pains! Pleasure needs to make him happy, 
         get pleasure from the way he hates them! Hello, it's really a pain to be followed. 
         
         This error, in some cases, prevents them from pains, just pains! Pleasure needs to make him happy, 
         get pleasure from the way he hates them! Lorem ipsum dolor sit amet, consectetur.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
    </>
  );
}