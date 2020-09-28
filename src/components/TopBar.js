import React from "react";

const TopBar = () => {
  return (
    <div
      style={{
        backgroundColor: "orange",
        width: "100%",
        height: "40px",
        textAlign: "right",
        color: "white",
      }}
    >
      Call us on
      <span
        style={{
          borderRadius: "50px",
          backgroundColor: "white",
          border: "1px solid white",
          marginLeft: "10px",
          color: "black",
          padding: "2px",
        }}
      >
        +91-76666 62930
      </span>
    </div>
  );
};

export default TopBar;
