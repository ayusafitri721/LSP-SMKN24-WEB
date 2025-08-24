// Home.jsx
import React from "react";
import ImageSlider from "../components/ImageSlider";

function Home() {
  return (
    <>
      <ImageSlider />
      <div
        style={{
          height: "40px",
          backgroundColor: "#f97316",
          width: "100%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      />
    </>
  );
}

export default Home;
