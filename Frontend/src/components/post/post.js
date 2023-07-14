import Nav from "../nav/nav";
import { useState } from "react";
import React from 'react'
import "./post.css";
import img from "../../images/note.png";

export default function Post() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  const handleSubmit = (event) => {
    fetch("http://localhost:8000/Post", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        title: inputs.title,
        content: inputs.content,
      }),
    }).then(function (response) {
      console.log(response.body);

      const { body } = response;

      const { message } = body;

      return response.json();
    });

    event.preventDefault();
    console.log(inputs);
    setInputs(() => ({ inputs,title: "", inputs,content: "" }));
  };


  return (
    <>
      <Nav />
      <div className="post-component">
        <div className="post-static">
          <div className="post-bg">
          <div className="post-text">
            <h1>Post your interview experience here</h1>
          </div>
          <div className="post-img">
            <img src={img} alt="Error" />
          </div>
          </div>
        </div>
        <div className='post-write'>
          <form className='post-form' onSubmit={handleSubmit}>
            <div className='post-title'>
              <input
                type="text"
                placeholder='Title'
                name="title"
                value={inputs.title || ""}
                onChange={handleChange}
              />
            </div>
            <div className="post-text">
              <textarea
                placeholder="Tell your story!"
                type="text"
                className="writeInput writeText"
                name="content"
                value={inputs.content}
                onChange={handleChange || ""}
              />
            </div>
            <button className="post-submit">Publish</button>
          </form>
        </div>
      </div>
    </>
  )
}
