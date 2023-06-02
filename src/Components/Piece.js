import {react, useContext } from "react";
import { global } from "./Context";

export default function Card({elem}) {

    const {pic01,dragStartHandler,dragLeaveHandler} = useContext(global);

    if(elem.order !== null ) {
        return(
            <div className="piece"     
                            // onDragStart={(e) => dragStartHandler(e,elem, 'field_left')}
                            // onDragLeave={(e) => dragLeaveHandler(e)}                      
                            draggable={true} 
                            style = {{
                                backgroundImage:`url(${pic01})`,
                                backgroundPosition: `${elem.left}px ${elem.top}px`,
                            }}
            ></div>
        )}

        else return null;
        
    }
    
