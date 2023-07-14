import React from "react";
import { useState, useEffect } from "react";
import "./bookmark.css";
import { IoMdRemove } from "react-icons/io";
import Nav from "../nav/nav";

export default function Array() {
  const [getData, getSetData] = useState([]);
  const [entry, setEntry] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const email = window.localStorage.getItem('user')
  let arr=[];

  const fetchData1 = async () => {
      try {
          await fetch("http://localhost:8000/lids")
              .then((res) => res.json())
              .then((data) => {
                  console.log(data);
                  const { application } = data;
                  console.log('------------------');
                  console.log(data.application);
                  for (var i = 0; i < data.application.length; i++) {
                      if (data.application[i].email == email)
                          setEntry(data.application[i].bookmark);
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

  const fetchData = async () => {
    try {
      await fetch("http://localhost:8000/Ques")
        .then((res) => res.json())
        .then((data) => {
            console.log('d:');
            console.log(data.application[0].QuestionSheet);
        //   const { requiredData } = data;
          getSetData(data.application[0].QuestionSheet);
        //   console.log(requiredData);
        //   setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () => {
      // var arr=[];
      console.log('le: ' + getData.length);
      for(var i=0;i<entry.length;i++)
      {
        var newFilter = getData.filter((value) => {
            if(value._id.includes(entry[i]))
            {
              console.log('val:');
                console.log(value);
                arr.push(value);
            }
            return value._id.includes(entry[i]);
        });
      }
      console.log('arr:');
      console.log(arr);
      // arr.splice(entry.length);
      // setFilteredData(arr);
    
};  

const removeit=(props)=> {
  const email=window.localStorage.getItem('user')
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
      email: email,
      flag: 1
    }),
  }).then(function (response) {
    console.log(response.body);

    const { body } = response;

    const { message } = body;

    return response.json();
  });
  alert(`Bookmark removed!`)
}

  return (
    <div>
      <Nav />
      {console.log("f:")}
      {console.log(getData)}
      {console.log('entry:')}
      {console.log(entry)}
      {console.log('filter:')}
      {handleFilter()}
      {console.log(arr)}
      <div className="topic-heading">
        <h1>Bookmarked Questions</h1>
      </div>
      {arr.map((todo,_id) => (
        <div className="question-info">
          {/* <Checkbox /> */}
          <a href={todo.URL}>{todo.Problem}</a>
          <div className="book">
            <span onClick={() => removeit(todo)}>
              <IoMdRemove />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}