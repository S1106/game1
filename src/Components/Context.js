import React, { createContext , useContext, useEffect, useState } from "react";
import useArray from "../Components/useArray";

export const global = createContext();

export default function Context(props) {
    
    const [modal,setModal] = React.useState(null); //відкриття та закритя вікна

    const [button,setButton] = useState(true); //сховати показати кнопку

    const [level,setLevel] = React.useState(null); // 2 = 4 or 3 = 9 or 4 = 16

    const [array] = useArray(level);
   
    // const buttonHide = function() {
    //     setModal(true);
    //     setButton(null);
    // }

    // const buttonShow = function() {
    //     setModal(null);
    //     if (!level) {
    //         setButton(true);
    //     } else {
    //         setButton(null);
    //     }
    // }

    let value = {
        modal,
        setModal,
        setLevel,
        level,
        array,
        setButton,
        button,
        // buttonHide 
    }

    return (
        <global.Provider value={value}>
            {props.children}
        </global.Provider>
    )
}