import { render } from "@testing-library/react";
import React from "react";
<img src="../../images/PwC-logo.svg" alt="" class="logo" />;
const Card = (props) => {
  return (
    <div className="card">
      <p>
        <span className="fname">First Name </span> {props.name}
      </p>
      <p>
        <span className="fname">Last Name </span> Ojadi
      </p>
      <p>
        <span className="fname">State of Origin</span>
        {props.state}
      </p>
      <p>
        <span class="fname">Stack </span>
        {props.stack}
      </p>
      <p>
        <span className="fname">Description </span>
        {props.descr}
      </p>
      <p>
        <span className="fname">Description </span>
        {props.job}
      </p>
    </div>
  );
};

// const Card = (props) => {
//   return (
//     <div className="card">
//       <h2>{this.props.name}</h2>
//       <p>{this.props.state}</p>
//     </div>
//   );
// };

export default Card;
