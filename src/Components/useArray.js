import { useState , useEffect } from "react";

export default function useArray(l) {

    const [mass,setMass] = useState(null);


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

    return [mass];
}