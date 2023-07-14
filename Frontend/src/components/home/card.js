import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

//<Navigate to={`/${name}`} />;

export default function Card(props) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={props.img} alt="Error" />
      <button
        className="card-button"
        onClick={() => {
          console.log(`/${props.keyName}`);
          navigate(`/${props.keyName}`);

          //   <Navigate to={`/${props.keyName}`} />;
        }}
      >
        Explore
      </button>
    </div>
  );
}

/*
 <div className="card">
      <img src={props.img} alt="Error" />
      <button
        className="card-button"
        onClick={() => {
          console.log(`/${props.keyName}`);
          <Navigate to={`/${props.keyName}`} />;
        }}
      >
        Explore
      </button>
    </div>
    */

/*
const handleClick = (name) => <Link to={`/${name}`} />;
  //div className="card" onClick={handleClick(props.keys)}>
function NavigationDemo() {
  const history = useHistory();
  const navigateTo = () => history.push('/componentURL');//eg.history.push('/login');

  return (
   <div>
   <button onClick={navigateTo} type="button" />
   </div>
  );
}
*/
