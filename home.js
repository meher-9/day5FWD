import { createContext, useState } from "react";
import Welcome from "./welcome";
import First from "./first";
import { globalContext } from "./app";
import { useContext } from "react";
export const UserContext=createContext();
function Home(){
    //const [isLogin,setLogin]=useState(false);
    const [globalcount,setglobalCount]=useState(0);
    const{globalIsLogin , setglobalIsLogin} = useContext(globalContext);
    return (
    /*<UserContext.Provider value={{isLogin,setLogin,globalcount,setglobalCount}}>
    </UserContext.Provider>*/
        <div>
            { globalIsLogin?<div><Welcome/></div>:<div> <First/></div>}
        </div>
    
    );
}
export default Home;