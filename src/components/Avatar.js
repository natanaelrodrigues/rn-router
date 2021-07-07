import React from "react";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.url} alt={props.name} />
      <br />
      <span>{props.name}</span>
    </div>
  );
}

export default Avatar;
