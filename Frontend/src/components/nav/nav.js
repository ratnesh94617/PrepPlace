import React from "react";
import "./nav.css";
import b from "../../images/logo.jpeg";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { useState, useEffect  } from "react";

export default function Nav() {
  const [getData, getSetData] = useState([]);
  const email = window.localStorage.getItem("user");
  const name = window.localStorage.getItem("name");
  const github = window.localStorage.getItem("github");
  const linkedin = window.localStorage.getItem("linkedin");
  const [mypic, setMyPic] = useState('1.png');

  const logOut = () => {
    localStorage.clear();
  };
  const fetchData = async () => {
    try {
      await fetch("http://localhost:8000/pic")
        .then((res) => res.json())
        .then((data) => {
          console.log('data');
          console.log(data);
          // console.log(data.length);
          for(var i=0;i<data.length;i++)
          {
            console.log(typeof(data[i].photo));
            if(data[i].email===email)
            {
              getSetData(data[i]);
              setMyPic(data[i].photo);

            }
              
          }
          // getSetData(data);
          // console.log(requiredData);
          // setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const str = '../../uploads/';
  const final = str.concat(mypic);
  const mypic1 = require('../../uploads/' + mypic);

  return (
    <>
      <div className="nav">
        <img src={b} alt="image" />

        <ul className="option">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/practice">Practice questions</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/interview">Interview Experience</Link>
          </li>
          <li>
            <Link to="/connect">Connect with Seniors</Link>
          </li>
          <li className="profile">
            <Avatar
              alt="profile"
              src={mypic1}
            />
            <ul className="menu">
              <li className="menu-content">
                <Link to="/edit">Edit Profile</Link>
              </li>
              <li className="menu-content">
                <Link to="/bookmark">Bookmarked</Link>
              </li>
              <li className="menu-content">
                <Link to="/login" onClick={logOut}>Log out</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
