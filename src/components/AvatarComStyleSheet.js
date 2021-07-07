import React from "react";

function AvatarComStyleSheet(props) {
  return (
    <div style={{ backgroundColor: "#FF0000", padding: 20, width: 200 }}>
      <img style={{ width: 50, height: 50 }} src={props.url} alt={props.name} />
      <br />
      <span>{props.name}</span>
    </div>
  );
}

export default AvatarComStyleSheet;
