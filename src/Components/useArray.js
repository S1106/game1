import { useState , useEffect , useReducer } from "react";
import "../images/pic01.png";

export default function useArray(l) {

    const pic01 = "../images/pic09.png";

    const [mass,setMass] = useState([]);

    const [lev , setLev] = useState([]);

    const [arrRight,setArrRight] = useState([]);

    // const [widthPic,setWidthPic] = useState();

    // useEffect(() => {
    //     let wp = document.querySelector('.field_piece');
    //     setWidthPic(wp);
    // },l)

    const levels2 = {
        one: {
            start: [{ id: 0, left: 0, top:0},
                    { id: 1, left: -166.84, top:0},
                    { id: 2, left: 0, top: -166.84},
                    { id: 3, left: -166.84, top:-166.84}],
            end:   [
                    { id: 0},
                    { id: 1},
                    { id: 2},
                    { id: 3}]
        }
    }
 
    const levels = {
        one:[
            { id: 0, left: 0, top:0},
            { id: 1, left: -166.84, top:0},
            { id: 2, left: 0, top: -166.84},
            { id: 3, left: -166.84, top:-166.84}
        ],
        two: [
            { id: 0, left: 0, top:0},
            { id: 1, left: -103.00, top:0},
            { id: 2, left: -206.00, top: 0},

            { id: 3, order:3, left: 0, top: -103.00},
            { id: 4, order:4, left: -103.00, top: -103.00},
            { id: 5, order:5, left: -206.00, top: -103.00},

            { id: 6, order:6, left: 0, top: -206.00},
            { id: 7, order:7, left: -103.00, top:-206.00},
            { id: 8, order:8, left: -206.00, top:-206.00}

        ],
        three: [
            { id: 0, order:0, left: 0, top:0},
            { id: 1, order:1, left: -80.00, top:0},
            { id: 2, order:2, left: -160.00, top:0},
            { id: 3, order:3, left: -240.00, top:0},

            { id: 4, order:4, left: 0, top:-80.00},
            { id: 5, order:5, left: -80.00, top:-80.00},
            { id: 6, order:6, left: -160.00, top:-80.00},
            { id: 7, order:7, left: -240.00, top:-80.00},

            { id: 8, order:8, left: 0, top:-160.00},
            { id: 9, order:9, left: -80.00, top:-160.00},
            { id: 10, order:10, left: -160.00, top:-160.00},
            { id: 11, order:11, left: -240.00, top:-160.00},

            { id: 12, order:12, left: 0, top:-240.00},
            { id: 13, order:13, left: -80.00, top:-240.00},
            { id: 14, order:14, left: -160.00, top:-240.00},
            { id: 15, order:15, left: -240.00, top:-240.00}

        ],
    }

    const reducer = (state,action) => {
        switch(action.type){
            case "DRAGGABLE" : {
                return {...state}
            }

            case "DRAGGABLEREVERS" : {
                return {...state}
            }

            case "SORTABLE" : {
                return {...state}
            }

            case "FILL" : 
                return action.payload;
                // const start = levels[action.payload];
                {
                    // const start = levels2[l];
                    // const end = levels2[l];

                    // return {start, end}
                }
            

            default : return {...state};
        }
    }


    const [state,dispatch] = useReducer(reducer,[]);

    const genNum = () => {
        let c = 0;
        if (l === 'one') {
            c = 4;
        }
        if (l === 'two') {
            c = 9;
        }
        if (l === 'three') {
            c = 16;
        }

        return Math.floor(Math.random()*c);
    }

    useEffect(() => {
        let arr = [];
        let i = 0;
        let c =0;
        if (l === 'one') {
            c = 4;
        }
        if (l === 'two') {
            c = 9;
        }
        if (l === 'three') {
            c = 16;
        }

        while (i < c) {
            let n = genNum();
            if(!arr.includes(n)) {
            arr.push(n);
            i++;
            }
        }
        setMass(arr);
        
    },[l]);
  
    useEffect(() => {
        let start = null;
        let end = null;
        let arr = null;
        if(levels2[l]!==undefined) {
            start = levels2[l].start;
            end = levels2[l].end;

            start = start.map((elem, index) => ({...elem, order:mass[index]}));
            arr = {start, end};
            
        }
        console.log(arr);

        if((l !== null || l !== undefined) && arr !== null) {
            dispatch({type:"FILL" , payload:arr})
        }
    },[mass])

    useEffect(()=>{
        let c = [];
        if (l) {
            levels[l].forEach((el, index) => {                      
                c = [...c, {...el, order: mass[index]}]
            })
            setLev(c);
        }     
        
    }, [mass]);

    useEffect(()=>{
        let c = [];
        if (l) {
            levels[l].forEach((el, index) => {                      
                c = [...c, {id:el.id}]
            })
            setArrRight(c);
        }     
        
    }, [mass]);

    return [pic01, lev,setLev,arrRight,setArrRight,levels,state,dispatch];
}








// function check(a,x) {
//     let state = null;
//     a.map(i => i === x ? state = true : null){
//         if(state === true) {
//             return state;
//         } else {
//             return false;
//         }
//     }
// }


