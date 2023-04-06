import React, { createContext , useEffect, useState } from "react";
import useArray from "../Components/useArray";

export const global = createContext();

export default function Context(props) {
    
    const [modal,setModal] = React.useState(null); //відкриття та закритя вікна

    const [button,setButton] = useState(true); //сховати показати кнопку

    const [level,setLevel] = React.useState(null); // 2 = 4 or 3 = 9 or 4 = 16

    const [pic01,lev,setLev,arrRight,setArrRight,levels] = useArray(level);

    const [timer,setTimer] = useState(0);

    const [timerHour,setTimerHour] = useState(0);
    
   /////////////////////////BUTTON HIDE - SHOW////////////////////////////////////
    const buttonHide = function() {
        setModal(true);
        setButton(null);
    }

    const buttonShow = function() {
        setModal(null);
        if (!level) {
            setButton(true);
        } else {
            setButton(null);
        }
    }
  ///////////////////////TIMER//////////////////////////////////
        useEffect(() => {
            const interval = setInterval(() => {
                level &&
                    setTimer(timer => timer >= 0 && timer <59 ? timer + 1 : 0)
            }, 1000);
            return () => { clearInterval(interval) }
        }, [level]);

        useEffect(() => {
            const interval = setInterval(() => {
                level &&
                    setTimerHour(timerHour => timerHour >= 0 ? timerHour + 1 : 0)
            }, 60000);
            return () => { clearInterval(interval) }
        }, [level]);
    
//////////////////////VALUE///////////////////////////////
    let value = {
        modal,
        setModal,
        setLevel,
        level,
        
        setButton,
        button,
        buttonHide ,
        buttonShow ,
        pic01,
        lev,
        setLev,
        arrRight,
        setArrRight,
        timer,
        timerHour,
        levels
    }

    return (
        <global.Provider value={value}>
            {props.children}
        </global.Provider>
    )
}