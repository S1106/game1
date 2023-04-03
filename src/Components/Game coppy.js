// import React, { useContext , useState } from "react";
// import "../Styles/game.css";
// import "../images/logo1.svg";
// import { global } from "./Context";
// import { useDrag , useDrop } from 'react-dnd'

// function Card({elem}) {
//     const [{isDragging},dragRef] = useDrag({
//         type: 'card',
//         collect: (monitor) => ({isDragging:monitor.isDragging()})
//     });

//     return (
//         <div 
//             className="field_piece"
//             style = {{
//                 backgroundColor: isDragging ? '#fff' : '#990000'
//             }}
//             ref = {dragRef}
//         >{elem}</div>
//     )
// }

// function Box({card,moveCard}) {
//     const [{isOver},dropRef] = useDrop({
//         accept: "card",
//         drop:(monitor) => ({isOver:monitor.isOver()})
//     });

//     return(
//         <div
//             className="field_piece"
//             style = {{
//                 backgroundColor: isOver ? '#ccf' : '#face00'
//             }}
//             ref = {dropRef}
//             >
//             {card ? <Card/> : 't'}
//         </div>
//     )
// }

// export default function Game() {
//     const [index, setIndex] = useState();

//     console.log(index);

//     function moveCard(i) {
//         setIndex(i)
//     }
    
//     const {level,array} = useContext(global);

//     const generateField = (t) => {
//         return (
//             `${t} field_${level}`
//         )
//     }



//     return (
//         <div className="field_one">
//             <div className = {generateField('field_left')}>
//                 {array.map((elem, index) => <Card elem = {elem} key = {index}/>)}
//             </div>

//             <div className = {generateField('field_right')}>
//                 {array.map((elem, index) => <Box  card = {index} moveCard = {moveCard.bind(null, index)} key = {index}></Box> )}
//             </div>
//         </div>
//     )
// }