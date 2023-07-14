import React from "react";
import Nav from "../nav/nav";
import "./interview.css";
import { useState, useEffect } from "react";
import useCollapse from "react-collapsed";
//import { GiMagnifyingGlass } from "react-icons/gi";

export default function Interview() {
  const [getData, getSetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      await fetch("http://localhost:8000/interview")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const { application } = data;
          getSetData(application);

          setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const searchWord = event.target.value;
    const newFilter = getData.filter((value) => {
      return value.title.includes(searchWord);
    });
    setFilteredData(newFilter);
  };
  //const tableRows = filteredData.map(createRow);
  //const tableRows1 = getData.map(createRow);

  function Display(props) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
      <div className="display">
        <h1>{props.title}</h1>
        <p {...getCollapseProps()}>{props.content}</p>
        <button className="collapse-btn"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    );
  }

  function createRow(info) {
    return (
      <Display
        //  key={info.id}
        title={info.title}
        content={info.content}
      />
    );
  }
  /*
  return (
    <>
      <Nav />

      <div className="head-interview">
        <div className="heading-i">Interview Experience</div>

        <div className="search">
          <input
            type="text"
            placeholder="Enter Company Name"
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div>
        {searchTerm !== "" ? (
          <table>
            <tbody>{tableRows}</tbody>
          </table>
        ) : (
          <table>
            <tbody>{tableRows1}</tbody>
          </table>
        )}
      </div>
    </>
  );
}

*/

  return (
    <>
      <Nav />

      <div className="head-interview">
        <div className="heading-i">Interview Experience</div>

        <div className="search">
          <input
            type="text"
            placeholder="Enter Company Name"
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div>
        {searchTerm !== "" ? (
            filteredData.map((material, index) => (
              <Display
                index={index}
                title={material.title}
                content={material.content}
              />
            ))
        ) : (
          getData.map((material, index) => (
            <Display
              index={index}
              title={material.title}
              content={material.content}
            />
          ))
        )}
      </div>
    </>
  );
}
