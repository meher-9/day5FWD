import Data from "./data";
import First from "./first";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcome from "./welcome";
import Home from "./home";
import Profile from "./profile"
//import Four from "./Four";
import { createContext, Profiler, useState } from "react";
import Cart from "./cart";
//import Profile from "./Profile";
export const globalContext=createContext({ globalCount: 0 });


function App(){
    const [globalCount,setglobalCount]=useState(0);
    const [globalUserObject, setGlobalUserObject]= useState({});
    const [globalIsLogin , setGlobalIsLogin] = useState(false);
    const [cart,setcart]=useState([])
    return(
        <globalContext.Provider value={{globalCount,setglobalCount,globalUserObject,setGlobalUserObject,globalIsLogin , setGlobalIsLogin,cart,setcart}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Data/>}/>
            <Route path="/tabs" element={<First/>}/>
            <Route path="/welcome" element={<Welcome/>}/> 
            <Route path="/profile" element={<Profile/>}/> 
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
        </globalContext.Provider>
    );
}
export default App;