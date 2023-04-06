import React, { useContext , useState } from "react";
import "../Styles/game.css";
import "../images/logo1.svg";
import { global } from "./Context";
import Timer from "./Timer";

export default function Game() {
    
    const {level,pic01,lev,setLev,arrRight,setArrRight,levels} = useContext(global);

    const [finalElem,setFinalElem] = useState(null);

    const [currentElem,setCurrentElem] = useState(null);

    const [area,setArea] = useState(null);

    const generateField = (t) => {
        return (
            `${t} field_${level}`
        )
    }
    
    function dragStartHandler(e,elem,c) {
        setCurrentElem(elem);
        setArea(c);
    }

    function dragOverHandler(e,elem) {
        e.preventDefault();
        setFinalElem(elem);
    }

    function dragLeaveHandler(e) {
        
    }
    
    function dragEndHandler(e) {

    }

    function dropHandler(e,elem) {
        e.preventDefault();

        if(area === 'field_left'){

            e.target.style.backgroundImage = `url(${pic01})`;
            e.target.style.backgroundPosition = `${currentElem.left}px ${currentElem.top}px`;

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

            let c = lev.filter(elem => {
                if(elem.id !== currentElem.id) {
                    return {id: elem.id, order: elem.order, top:elem.top , left:elem.left}
                } 
            })
            setLev(c);

            ////////////////////////перебор правого масива при событии ondrop///////////////////////////////

            let b = arrRight.map((item) => {
                if(item.id === currentElem.id) {
                    return {id: item.id, order: currentElem.order, top:currentElem.top , left:currentElem.left}
                }   else {
                    return {...item}
                }
            });
            setArrRight(b);

            // let etalon = [
            //     { id: 0, left: 0, top:0},
            //     { id: 1, left: -166.84, top:0},
            //     { id: 2, left: 0, top: -166.84},
            //     { id: 3, left: -166.84, top:-166.84}
            // ]
////////////////////////////////////////////////////////////////////////

            if(arrRight[0].id === levels.one[0].id && arrRight[1].id === levels.one[1].id && arrRight[2].id === levels.one[2].id && arrRight[3].id === levels.one[3].id && arrRight[0].top === levels.one[0].top && arrRight[1].top === levels.one[1].top && arrRight[2].top === levels.one[2].top)
                {
                console.log('OOOOOoooooo')
            } else {
                console.log('no')
            }


            // arrRight.forEach((item) => {
            //     etalon.forEach((item2) => {
            //         if(item.id == item2.id && item.top == item2.top) {
            //             console.log('OOOOOoooooo')
            //                 } else {
            //                     console.log('no')
            //                 }
            //         }
            //     });
            // });
///////////////////////////////////////////////////////////////////////////////
            console.log(c);
            console.log(b);

        }

        if(area === 'field_right') {
            let b = arrRight.map((item) => {

                if(item.id === currentElem.id) {
                    return {id: item.id, order: finalElem.order, top:finalElem.top , left:finalElem.left}
                }

                if(item.id === finalElem.id) {
                    return {id: item.id, order: currentElem.order, top:currentElem.top , left:currentElem.left}
                } 

            });
            setArrRight(b)
        }
    }

    if(level) {
        return (
        <div className="field">
            <div className = {generateField('field_left')}>
                {lev.map((elem,index) => 
                <div className="field_piece" key = {index} style = {{order: elem.order}}>
                   {elem.order === null ? null : (
                        <div 
                        className="piece"
                        onDragStart={(e) => dragStartHandler(e,elem, 'field_left')}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        //onDragEnd={(e) => dragEndHandler(e)}
                        //onDragOver={(e) => dragOverHandler(e)}
                        //onDrop={(e) => dropHandler(e,elem)}
                        draggable={true} 
                        style = {{
                            backgroundImage:`url(${pic01})`,
                            backgroundPosition: `${elem.left}px ${elem.top}px`,
                        }}
                    ></div>
                    )}       
                </div>
                )}

             
                
            </div>
            <Timer />
            <div className = {generateField('field_right')}>
                {arrRight.map((elem,index) => 
                <div className="field_piece" key = {index}>
                        <div className="right__card"
                            onDragStart={(e) => dragStartHandler(e,elem, 'field_right')}
                            onDragLeave={(e) => dragEndHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e,elem)}
                            onDrop={(e) => dropHandler(e,elem)}
                            draggable={true} 
                            ></div>
                    </div>)}
            </div>
        </div>
        );

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


// const left = [
//     {id:1, order: 3, top:1, left:4},
//     {id:2, },
//     {id:3,},
//     {id:4, order: 0, top:4, left:1}
// ];

// const right = [
//     {id:1, order: 1, top:2, left:3},
//     {id:2, order: 2, top:3, left:2},
//     {id:3},
//     {id:4}
// ]
