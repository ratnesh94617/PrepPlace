import React from "react";
//import ReactDOM from "react-dom";
import "./practice.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import ProgressBar from "./topic/ProgressBar";
//import Bar from "./bar";
import styled from "styled-components";


const Practicee = styled.div`
  background-color: #aef799;
  height: 180px;
  width: 30%;
  margin: 20px;
  float: left;
  padding: 2%;
  box-sizing: border-box;
  border: 2px solid #a5afa2;
  border-radius: 20px 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(34, 33, 33);
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }
`;

const Qcount = styled.p`
  padding-top: 5%;
`;
const Solve = styled.button`
  float: right;
  background-color: green;
  border-radius: 5px 5px;
  margin-right: 10px;
  color: azure;
  height: 22%;
  width: 38%;
  margin-top: -40px;
  font-family: cursive;
  font-size: large;
`;
const Container = styled.div`
  background-color: rgb(192, 192, 192);
  width: 90%;
  border-radius: 20px 20px;
  margin-top: 4%;
  padding: 0;
`;

const Skill = styled.div`
  background-color: rgb(11, 156, 77);
  color: white;
  padding: 0;
  text-align: right;
  border-radius: 20px 20px;

  font-size: 12px;
  width: ${(props) => props.c}%;
`;
function Practice(props) {
  const navigate = useNavigate();

  const [entry, setEntry] = useState([]);
  const email = window.localStorage.getItem("user");

  const fetchData1 = async () => {
    try {
      await fetch("http://localhost:8000/lids")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // const { application } = data;
          console.log("------------------");
          console.log(data.application);
          for (var i = 0; i < data.application.length; i++) {
            if (data.application[i].email === email)
              setEntry(data.application[i].check);
          }
          // console.log(entry);

          //   setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData1();
  }, []);
  var c = 0;
  const count = (topic) => {
    for (let i = 0; i < entry.length; i++) {
      if (entry[i].topic === topic) c++;
    }

    c = Math.round((c * 100) / 8);
  };

  /*
  const skill={
    
      backgroundColor: "rgb(11, 156, 77)",
      color: "white",
      padding: 0,
      textAlign: "right",
      borderRadius: 20,
    
      fontSize: 12,
    
  
      width: `${c}%`
    
  }
  
export default Practice;
return (
  <>
    <div>
      {count(props.TopicName)}
      <div className="practice-card">
        <h3>{props.TopicName}</h3>
        <button
          className="solveButton"
          onClick={() => {
            console.log(`/${props.routes}`);
            navigate(`/${props.routes}`);
          }}
        >
          Solve Now
        </button>
        <p className="qcount">Total questions: {props.QCount}</p>

        <ProgressBar c={c}/>
      </div>
    </div>
  </>
);
}
export default Practice;


  return (
    <>
      <div>
        {count(props.TopicName)}
        <div className="practice-card">
          <h3>{props.TopicName}</h3>
          <button
            className="solveButton"
            onClick={() => {
              console.log(`/${props.routes}`);
              navigate(`/${props.routes}`);
            }}
          >
            Solve Now
          </button>
          <p className="qcount">Total questions: {props.QCount}</p>

          <div className="container">
            <div className="skill html">{c}% </div>
          </div>
        </div>
      </div>
    </>
  );
}
  return (
    <div>
      {count(props.TopicName)}
      <Bar topic={props.TopicName} qcount={props.QCount} route={props.routes}c={c}/>


    </div>
      
      
  );
}

export default Practice;*/

return (
  <>
    
      {count(props.topic)}
      <Practicee>
      <h3>{props.TopicName}</h3>
      <Solve
        onClick={() => {
          console.log(`/${props.routes}`);
          navigate(`/${props.routes}`);
        }}
      >
        Solve Now
      </Solve>
      <Qcount>Total questions: {props.QCount}</Qcount>
      <Container>
        <Skill c={c}>{c}% </Skill>
      </Container>
    </Practicee>
     
  
  </>
);
}
export default Practice;


