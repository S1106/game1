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

    const [resultCount,setResultCount] = useState(null);

    const [currentElem,setCurrentElem] = useState(null);

    const [compare,setCompare] = useState(null);

    // const [timerActive,setTimerActive] = useState(true);


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
  /////////////////////TIMER//////////////////////////////////

        useEffect(() => {
            var interval = setInterval(() => {
                currentElem &&
                    setTimer(timer => timer >= 0 && timer <59 ? timer + 1 : 0)
            }, 1000);
            return () => { clearInterval(interval) }

        }, [currentElem]);


        useEffect(() => {
            const interval = setInterval(() => {
                currentElem &&
                    setTimerHour(timerHour => timerHour >= 0 ? timerHour + 1 : 0)
            }, 60000);
            return () => { clearInterval(interval) }
        }, [currentElem]);

    
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
        levels,
        setResultCount,
        resultCount,
        currentElem,
        setCurrentElem,
        setTimer,
        setTimerHour,
        compare,
        setCompare
    }

    return (
        <global.Provider value={value}>
            {props.children}
        </global.Provider>
    )
}