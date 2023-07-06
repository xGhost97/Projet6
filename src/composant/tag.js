import React from "react";
import "../style/tag.css";

function Tag(props) {
  return (
    <div className="tag">
      <span>{props.tag}</span>
    </div>
  );
}

export default Tag;