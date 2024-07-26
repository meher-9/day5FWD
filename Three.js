import {  useContext, useEffect, useState } from "react";
import { globalContext } from "./app";
import Cart from "./cart"

function Three(){
    
    const [count,setCount]=useState(0);
    const {globalCount,setglobalCount}=useContext(globalContext);
    useEffect(()=>{
        setCount(0);
        console.log("Use effect is called");},[]);

        const btu=()=>{
            setCount(count+1);
            setglobalCount(globalCount+1)
            console.log(globalCount);
        }

        const btu1=()=>{
            if(count>0){
            setCount(count-1);
            setglobalCount(globalCount-1)
            }
        }
        const addToCart=()=>{
            setCount(1);
            setglobalCount(globalCount+1)
        }
        
    return(
        
        <div>
            {
                (count===0) ?
                <button className="btn btn-success"onClick={addToCart}>AddToCart</button>
                :
                <div style={{display:'flex'}}>
                    <button className="btn btn-light"onClick={btu1}>-</button>
                    {count}
                    <button className="btn btn-light"onClick={btu}>+</button>
                </div>
            }</div>
        
      
    
    );
}
export default Three;