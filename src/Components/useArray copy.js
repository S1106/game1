import { useState , useEffect } from "react";

export default function useArray(l) {

    const [mass,setMass] = useState(null);

    const [massObj,setMassObj] = useState([]);

    const genNum = () => {
        return Math.floor(Math.random()*(l**2));
    }
    
    useEffect(() => {
        let arr = [];
        let i = 0;

        while (i < l**2) {
            let n = genNum();
            if(!arr.includes(n)) {
            arr.push(n);
            i++;
            }
        }
        setMass(arr);

    },[l]);


    useEffect(() => {

        let arr = [mass];
        let arr2 = [];
        let i2 = 0;
        let obj = {};

        while (i2 < l**2) {
            arr2.push(obj);
            i2++;
            }

        arr2.sort(sortCard).map((elem,index) => {
            elem.id = index;
            elem.title = genNum();
            elem.order = 0;
        })
        setMassObj(arr2)
            // mass && setMassObj([...massObj, obj]);
    },[mass])

       const sortCard = function(a,b) {
        if(a > b) {
            return 1;
        } else {
            return -1;
        }
    }
    
    console.dir(mass);
    console.log(massObj);

    return [mass , massObj, setMass];
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


