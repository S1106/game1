import React, { useContext , useState } from "react";
import "../Styles/game.css";
import "../images/logo1.svg";
import { global } from "./Context";

export default function Game() {
    
    const {setLevel,level,array} = useContext(global);

    // const [cardList,setCardList] = useState([
       
    // ]);

    const [currentElem,setCurrentElem] = useState(null);

    const generateField = (t) => {
        return (
            `${t} field_${level}`
        )
    }

    function dragStartHandler(e,elem) {
        setCurrentElem(elem);
    }

    function dragOverHandler(e) {
        e.preventDefault();
        e.target.style.background = '#fff';
    }

    function dragEndHandler(e) {
        e.target.style.background = '#ccf';
    }

    function dropHandler(e,elem) {
        e.preventDefault();

        // setCardList(cardList.map(c => {
        //     if(c.id === elem.id) {
        //         return {...c, order: currentElem.order}
        //     }

        //     if(c.id === currentElem.id) {
        //         return {...c, order: elem.order}
        //     }

        //     return c;
        // }))
    }

    console.log(level)

    if(level) {
        return (
        <div className="field_one">
            <div className = {generateField('field_left')}>
                {array.map(elem => 
                <div 
                    onDragStart={(e) => dragStartHandler(e,elem)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e,elem)}
                    draggable ={true}
                    key = {Date.now() } className="field_piece">{elem}</div>)}
            </div>
            <div className = {generateField('field_right')}>
                {array.map(elem => 
                <div 
                    onDragStart={(e) => dragStartHandler(e,elem)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e,elem)}
                    draggable={true} 
                    key = {Date.now() } className="field_piece"></div>)}
            </div>
        </div>
        );

    } else {

    return(
        <div className="gamefield">
            <div className="logo">
                <img src="../images/logo1.svg" alt=""></img>
            </div>
            <p>Join us on <br/>www.simulator.com.ua<br/><br/></p>
        </div>
    );
}
}