import React from "react";
import { useEffect } from "react";
import { WelComePage } from "./welcome";
import { FaTelegramPlane } from "react-icons/fa";
import { Routes, Route, useNavigate } from "react-router-dom";
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  height: "60px",
  width: "200px",
  borderRadius: "20px"
};
const RedirectExample = () => {
  // 👇️ redirects to an external URL
  console.log(window.location.replace("http://t.me/sm79_bot"));
  window.location.replace("http://t.me/sm79_bot");
};

export const Login = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("http://t.me/sm79_bot");
  };

  return (
    <>
      <h1> Hello </h1>

      <a href="http://t.me/sm79_bot" target="_blank" rel="noopener noreferrer">
        <button
          onClick={() => {
            RedirectExample();
          }}
          style={mystyle}
        >
          {" "}
          <FaTelegramPlane left={""} size={35} color={"white"} />
          Login with telegram
        </button>
      </a>
    </>
  );
};
