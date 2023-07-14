import React from "react";
import Nav from "../../nav/nav";
import bar from "../../../images/bar.jpg";
import "./company.css";
//import Checkbox from "../../practice/topic/Checkbox";
import { useState, useEffect } from "react";
import { BsBookHalf } from "react-icons/bs";

const addit = (props) => {
  const email = window.localStorage.getItem("user");
  console.log(email);
  console.log(props._id);
  fetch("http://localhost:8000/Register", {
    crossDomain: true,
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },

    body: JSON.stringify({
      id: props._id,
      email: email,
    }),
  }).then(function (response) {
    console.log(response.body);

    //const { body } = response;

    //const { message } = body;

    return response.json();
  });
  alert(`Added to you bookmark list!`);
};


function Barclays() {
  const [getData, getSetData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
      try{
        await fetch("http://localhost:8000/QuestionSet/Barclays").then(res => res.json())
        .then((data) => {
          const {requiredData}=data
          getSetData(requiredData)
          console.log(requiredData)
          setLoading(false)
        })
      } catch(err){
      console.log(err)
      }
  }
  
  useEffect(() => {
  fetchData()
  }, [])
  return (
    <div>
      <Nav />
      <div className="header">
        <img className="header-img" src={bar} alt="Error" />
        <div className="company-name">
          <h1>Barclays</h1>
        </div>
      </div>
      <div className="info">
        <div className="info-heading">
          <h1> Internship and Full Time</h1>
        </div>
        <div className="info-text">
          Barclays is a British universal bank which support consumers and small
          businesses through our retail banking services, and larger businesses
          and institutions through our corporate and investment banking
          services. Goldman Sachs visits the campus in last week of October.
          <br></br>
          <br></br>
          <span className="text-span"> ELIGIBILE COURSES :</span> CSE, IT
          Students<br></br>
          <span className="text-span">ELIGIBILITY CRITERIA : </span> 7 CGPA &
          Above in the current course only ( aggregate of all semesters till the
          last semester read ). <br></br>
          <span className="text-span"> NUMBER OF ROUNDS :</span> 2 ( 1 Coding
          Round and 2 Technical Rounds )<br></br>
          Coding Round was of 1hr 30min conducted in HackerEarth platform.
          <br></br>
          <br></br>
          <span className="text-span"> Round 1( Online Test ) :</span> 2 Coding
          Questions ( 30 mins ) <br></br>
          The first round comprised 30 MCQ questions and 2 programming
          questions. MCQs contain mostly theory questions based on OOPs concept,
          MongoDB, SQL, JavaScript and some output questions from C++, Java, and
          python. The Coding questions were Medium and Hard level based. The
          Medium level Coding question has marks weightage of 20 Marks and Hard
          level Coding question has weightage of 50 Marks.<br></br>
          <span className="text-span"> Round 2( Technical + HR ) : </span> This
          one interview basically around resume, project and situation based
          questions. They mostly ask theory questions related to HTML, CSS, OOP,
          DBMS, C++, and Java. <br></br>
        </div>
      </div>
      <div className="question-heading">
        <h1>Questions</h1>
        {getData.map((todo) => (
        <div className="question-list">
        
          <a href={todo.URL}>{todo.Problem}</a>
          <div className="book">
            <span onClick={() => addit(todo)}>
              <BsBookHalf />
            </span>
          </div>
        </div>
      ))}

      </div>
    </div>
  );
}

export default Barclays;
