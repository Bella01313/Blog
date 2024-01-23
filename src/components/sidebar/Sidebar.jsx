import { Link } from "react-router-dom";
import "./sidebar.css";
import Screenshot from '../../images/Screenshot.jpg.png'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={Screenshot}
          alt=""
        />
        <p>
         Hey! My name is Bella and this is my blog website which includes all my information
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" >
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" >
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" >
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" >
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" >
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}