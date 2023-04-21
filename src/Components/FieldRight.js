import { useContext } from "react";
import { global } from "./Context";

export default function FieldRight ({elem,dragStartHandler,dragLeaveHandler,dragEndHandler,dragOverHandler,dropHandler}) {
    console.log(elem.order)
    
    return(
            <div className="right__card" 
                onDragStart={(e) => dragStartHandler(e,elem, 'field_right')}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e,elem)}
                onDrop={(e) => dropHandler(e,elem)}
                draggable={true}
            ></div>
    );
   
}







