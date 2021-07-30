import React from "react";
import "./FetchShow.css";

const FetchShow = (props) => {
  return (
    <div className="fetchdata">
      {props.entries.map((data) => (
        <div>
          <h2 className="h2">{data.api}</h2>
          <h3 className="h3">{data.description}</h3>
          <p>{data.cors}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchShow;
