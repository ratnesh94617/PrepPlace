import React from 'react';
//import styled from "styled-components";


const ProgressBar = (props) => {
    const { c} = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${c}%`,
      backgroundColor:"rgb(11, 156, 77)",
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${c}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;