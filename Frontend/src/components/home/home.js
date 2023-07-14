import React from "react";
import "./home.css";
import Nav from "../nav/nav";
import a from "../../images/2.png";
import Card from "./card";
import company from "./company";
import Footer from "./footer";
import Slider from "./slider";
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

function createcard(company) {
 // const navigate = useNavigate();
  return (
    <Card key={company.id} img={company.url} keyName={company.keyName}>
      
    </Card>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="content">
          <div className="text1">
            <p>Get All Resources to Crack your Dream Company!!</p>
          </div>

          <div className="text2">
            <p>Let's Crack It Together!!</p>
          </div>

          <a href="./practice"><button  className ="button"   >
            Get Started</button>
            </a>
        </div>

        <img className="img" src={a} alt="image" />
      </div>
      <h1 className="h">Select Company</h1>
      <div className="cards">{company.map(createcard)}</div>
      <Slider />
      <Footer />
    </>
  );
}
