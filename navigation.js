import {  useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "./app";
function Navigation(){
    const {globalCount,setglobalcount}=useContext(globalContext);
    return(
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:'#e5e5e5',padding:'10px',margin:'5px'}}>
                <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
                <Link to="/">Home</Link>         
                <Link to ="/products">Products</Link>
                </div>
                <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
                <Link to="/cart">Cart({globalCount}) </Link>
                <Link to ="/profile">Profile</Link>
                </div>
            </div>
        
    );
}
export default Navigation;