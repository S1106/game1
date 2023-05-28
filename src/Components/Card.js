import {react, useContext } from "react";
import { global } from "./Context";

export default function Card({elem}) {
    console.log(elem);
    const {pic01} = useContext(global)
    return(
        <div className="field_piece" style = {{order:elem.order}}>
                <div className="piece"                           
                        draggable={true} 
                        style = {{
                            backgroundImage:`url(${pic01})`,
                            backgroundPosition: `${elem.left}px ${elem.top}px`,
                        }}
                    ></div>
        </div>
    );
}