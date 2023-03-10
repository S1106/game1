import React from "react";
import Menu from "./Components/Menu";
import Game from "./Components/Game";
import Modal from "./Components/Modal";
import "./Styles/global.css";

export default function App() {
  
  return (
    <div className="wrapper">
      <Game/>
      <Menu/>
      <Modal/>
    </div>
  );
}


