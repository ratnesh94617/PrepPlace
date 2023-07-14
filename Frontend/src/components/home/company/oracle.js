import React from "react";
import Nav from "../../nav/nav";
import oracle from "../../../images/o.png";
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

function Oracle() {
  const [getData, getSetData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
      try{
        await fetch("http://localhost:8000/QuestionSet/Oracle").then(res => res.json())
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
        <img className="header-img" src={oracle} alt="Error" />
        <div className="company-name">
          <h1>Oracle</h1>
        </div>
      </div>
      <div className="info">
        <div className="info-heading">
          <h1> Internship and Full Time</h1>
        </div>
        <div className="info-text">
          Oracle is World's largest database management company. The company is
          best known for its Oracle database software, a relational database
          management system, and for computer systems and software, such as
          Solaris and Java, acquired in its purchase of Sun Microsystems in
          2010. Oracle visits the campus in early July for 2 months internship
          and in October for FTE.<br></br>
          <br></br>
          <span className="text-span"> ELIGIBLE COURSES : </span> CSE, IT, ECE,
          EE, EI Students <br></br>
          <span className="text-span"> ELIGIBILITY CRITERIA :</span> 7 CGPA &
          Above in the current course only.<br></br>
          <span className="text-span"> NUMBER OF ROUNDS :</span> 3 ( 1 Coding
          Round and 2 Technical Rounds )<br></br>
          <br></br>
          <span className="text-span">
            {" "}
            Round 1 ( Online MCQ Round ) :
          </span>{" "}
          Conducted on Oracle’s online platform. It was MCQ based test. It had 4
          sections which were Verbal Ability, Coding Skills, Core CSE Concepts,
          and Software Engineering Aptitude. The sections among themselves had
          various other subsections.
          <br></br>
          <span className="text-span">
            Round 2 ( Technical Interview ) :{" "}
          </span>{" "}
          Coding questions, DBMS , OOP concepts were asked in detail.<br></br>
          <span className="text-span">
            {" "}
            Round 3 ( Technical Interview ) :
          </span>{" "}
          Resume based and discussion on projects.<br></br>
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

export default Oracle;
