import { Link } from "react-router-dom";
import './topbar.css'
import Screenshot from '../../images/Screenshot.jpg.png'

export default function topbar() {
    const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link">
              ABOUT
            </Link>
            </li>
          <li className="topListItem">
          <Link className="link">
          CONTACT
            </Link>
            </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/delete">
              DELETE
            </Link>
          </li>
          {user && <li className="topListItem">
            </li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
            <img
              className="topImg"
              src={Screenshot}
              alt=""
            />

        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
