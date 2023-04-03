import React from "react";
import Menu from "./Components/Menu";
import Game from "./Components/Game";
import Modal from "./Components/Modal";
import "./Styles/global.css";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  
  return (
    <div className="wrapper">
      {/* <DndProvider backend={HTML5Backend}> */}
        <Game/>
      {/* </DndProvider> */}
      <Menu/>
      <Modal/>
    </div>
  );
}


