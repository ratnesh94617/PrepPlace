import React from "react";
import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import "./questions.css";
import Nav from "../../nav/nav";
import { BsBookHalf } from "react-icons/bs";

const addit = (props) => {
  const email = window.localStorage.getItem('user')
  console.log(email);
  console.log(props._id)
  fetch("http://localhost:8000/Register", {
    crossDomain: true,
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },

    body: JSON.stringify({
      id: props._id,
      email: email
    }),
  }).then(function (response) {
    console.log(response.body);

    const { body } = response;

    const { message } = body;

    return response.json();
  });
  alert(`Added to you bookmark list!`)
}

export default function Heap() {
  const [getData, getSetData] = useState([])
  const [loading, setLoading] = useState(true)
  const [entry, setEntry] = useState([]);
  const email = window.localStorage.getItem("user");
  const fetchData = async () => {
    try {
      await fetch("http://localhost:8000/QuestionSet/Heap").then(res => res.json())
        .then((data) => {
          const { requiredData } = data
          getSetData(requiredData)
          console.log(requiredData)
          setLoading(false)
        })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

 
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
var a = false;

const filteritem = (id) => {
  for (let i = 0; i < entry.length; ++i) {
    if (entry[i].id === id) {
      console.log(entry[i].id);
      return true;
    }
  }
  return false;
};

return (
  <div>
    <Nav />
    <div className="topic-heading">
      <h1>Heap</h1>
    </div>
    {getData.map((todo, _id) => (
      <div className="question-info">
        {
          (a = filteritem(todo._id))
          /*
          entry
            .filter((number) => number.id === todo._id)
            .map((number) => console.log(number.id))*/
        }

        <Checkbox todo={todo} check={a} />
        <a href={todo.URL}>{todo.Problem}</a>
        <div className="book">
          <span onClick={() => addit(todo)}>
            <BsBookHalf />
          </span>
        </div>
      </div>
    ))}
  </div>
);
}
