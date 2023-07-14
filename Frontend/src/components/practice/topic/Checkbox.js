import React from "react";
import "./questions.css";
export default function Checkbox(props) {
  const [checked, setChecked] = React.useState(props.check);

  const add = (props) => {
    const email = window.localStorage.getItem("user");
    console.log(email);
    console.log(props._id);
    console.log(props.Topic);

    fetch("http://localhost:8000/Register", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        id: props._id,
        email: email,
        topic: props.Topic,
      }),
    }).then(function (response) {
      console.log(response.body);

      //const { body } = response;

      // const { message } = body;

      return response.json();
    });
    alert(`Question Done`);
  };

  const remove = (props) => {
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
        temp: 1,
        topic: props.Topic,
      }),
    }).then(function (response) {
      console.log(response.body);

      // const { body } = response;

      // const { message } = body;

      return response.json();
    });
    alert(`Question unchecked!`);
  };

  return (
    <label>
      <input
        type="checkbox"
        className="check"
        defaultChecked={checked}
        onChange={() => {
          if (checked === true) {
            setChecked(false);
            remove(props.todo);
          } else {
            setChecked(true);
            console.log(props.todo.Topic);

            add(props.todo);
          }
        }}
      />
    </label>
  );
}
