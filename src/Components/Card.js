import {react, useContext } from "react";
import { global } from "./Context";
import Piece from "./Piece";

export default function Card({elem}) {
    
    const {pic01,dragStartHandler,dragOverHandler} = useContext(global);
console.log(elem);
    if(elem.order !== null) {
    return(
        <div className="field_piece" style = {{order:elem.order}}>
                <Piece elem={elem}/>
        </div>
    );
} else {
    return (<div className="field_piece"></div>)
}
}