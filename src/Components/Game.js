import React, { useContext , useEffect, useState } from "react";
import "../Styles/game.css";
import "../images/logo1.svg";
import { global } from "./Context";
import Timer from "./Timer";
import FieldRight from "./FieldRight";
import FieldLeft from "./FieldLeft";

export default function Game() {
    
    const {level,pic01,lev,setLev,arrRight,setArrRight,timer,timerHour,setResultCount,resultCount,currentElem,setCurrentElem,compare,setCompare,setWatch,watch,state,finalElem,area,setArea,setFinalElem} = useContext(global);

    let start = null;
    let end = null;
    if (state !== undefined) {
       start = state.start;
       end = state.end;
    }

    function dragStartHandler(e,elem,c) {
        setWatch(elem);
        setCurrentElem(elem);
        setArea(c);
    }

    function dragOverHandler(e,elem) {
        e.preventDefault();
        setFinalElem(elem);

        if(area === 'field_right') {
            
            let b = arrRight.map(item => {

                console.log(finalElem)
                console.log(currentElem)

                if(item.order === null) {
                    return item } else {

                if(item.id === currentElem.id) {
                    return {id: item.id, order: finalElem.order, top:finalElem.top , left:finalElem.left}
                }

                if(item.id === finalElem.id) {
                    return {id: item.id, order: currentElem.order, top:currentElem.top , left:currentElem.left}
                } 
            }

            });
            
            setArrRight(b);
        }

    }
  
    function dragLeaveHandler(e) {
        
    }
    
    function dragEndHandler(e) {

    }

    function dropHandler(e,elem) {
        e.preventDefault();
        
        if(area === 'field_left'){
            if(elem.id === finalElem.id) {
                e.target.style.backgroundImage = `url(${pic01})`;
                e.target.style.backgroundPosition = `${currentElem.left}px ${currentElem.top}px`;
            } else {
                return;
            }


            ////////////////////////перебор левого масива при событии ondrop///////////////////////////////
            // let c = lev.map(elem => {
            //     //console.log(elem.id, currentElem.id);
            //     if(elem.id !== currentElem.id) {
            //         return {id: elem.id, order: elem.order, top:elem.top , left:elem.left}
            //     } else{
            //         return {id: elem.id}               
            //     }
            // })
            // setLev(c);

            ////////////////////////удаление текущего взятого елемента///////////////////////////////

            let c = lev.filter(elem => {
                if(elem.id !== currentElem.id) {
                    return {id: elem.id, order: elem.order, top:elem.top , left:elem.left}
                } 
            })
            setLev(c);

            ////////////////////////перебор правого масива при событии ondrop///////////////////////////////

            let b = arrRight.map((item) => {
                if(item.id === currentElem.id) {
                    return {id: item.id, order: finalElem.id, top:currentElem.top , left:currentElem.left}
                }   else {
                    return {...item}
                }
            });
            
            setArrRight(b);
        }

        if(area === 'field_right') {
            
            let b = arrRight.map(item => {
                // console.log(currentElem)
                // console.log(finalElem)
                // console.log(arrRight)

                if(item.id === currentElem.id) {
                    return {id: item.id, order: finalElem.order, top:finalElem.top , left:finalElem.left}
                }

                if(item.id === finalElem.id) {
                    return {id: item.id, order: currentElem.order, top:currentElem.top , left:currentElem.left}
                } 

            });
            
            setArrRight(b);
        }


    }

    ///////////////////////////////////////Сравнение массивов//////////////////////////////

    useEffect(() => {
        let compareMass = arrRight.every(elem => {
            return elem.id === elem.order
        });
            setCompare(compareMass);
    },[arrRight]);

    useEffect(() => {
        let StringResult = null;
        if(compare === true) {
            StringResult = `Your time is ${timerHour.toString().padStart(2, '0')}:${timer.toString().padStart(2, '0')}`;
        } 
        setResultCount(StringResult);
        setWatch(null);
    },[compare])

    // console.log(arrRight)
    // console.log(watch);
    
    if(level) {
       return(
            <div className="field">
                <FieldLeft start={start}/>
                <Timer />
                <FieldRight end={end}/>
            </div>
       )
    } else {
        return(
            <div className="gamefield">
                <div className="logo">  
                    <img src="../images/logo1.svg" alt=""></img>
                </div>
                <p className="focus">Join us on <br/>www.simulator.com.ua<br/><br/></p>
            </div>
        );
    }
}
