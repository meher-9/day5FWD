import {  useContext, useState } from "react";
import { globalContext } from "./app";

function Register(){
    const [firstref,setFirst]=useState('');
    const [secondref,setSecond]=useState('');
    const [emailref,setEmail]=useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectGender,setSelectedGender]=useState('');
    //const [user,setUser]=useState({})
    //use context provided by app.js
    const {globalUserObject, setGlobalUserObject}= useContext(globalContext);
    const getPassword=(event)=>{
        setSecond(event.target.value)
        console.log(firstref);
    }
    const getEmail=(event)=>{
        setEmail(event.target.value)
        console.log(secondref);
    }
    const getCollege=(event)=>{
        setFirst(event.target.value)
        console.log(emailref);
    }
    const getGender=(event)=>{
        setSelectedGender(event.target.value)
        console.log(selectGender);
    }
    

    const handleChange = (event) => {
        setSelectedBranch(event.target.value);
        console.log(event.target.value);
    };
    const getYear = (event) => {
        setSelectedYear(event.target.value);
        console.log(event.target.value);
    };
   const sumbitData=(event)=>{
    event.preventDefault();
    const ob={
        firstref,secondref,emailref,selectedBranch,selectedYear,selectGender
    }
    //setUser(ob);
    setGlobalUserObject(ob);
    console.log(ob);
    
    //console.log(user);
   }
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <div className="card" style={{width:"20rem"}}>
            <h4 style={{margin:"10px"}}>Register</h4>
            <p style={{margin:"10px"}}>Provide your Details to login</p>
            <div className="card-body">
                <h6 className="card-title"style={{margin:"5px"}}>College Id</h6>
                <form onSubmit={sumbitData} style={{display:"flex",flexDirection:"column"}}>


                    <input type="text" onChange={getCollege} placeholder="College Id" style={{borderRadius:"5px",margin:"5px"}}/>
                    <h6 className="card-title" style={{margin:"5px"}}>Password</h6>
                    <input type="password" onChange={getPassword} placeholder="Password" style={{borderRadius:"5px",margin:"5px"}}/>
                    <h6 className="card-title" style={{margin:"5px"}}>Email</h6>
                    <input type="email" onChange={getEmail} placeholder="Email address" style={{borderRadius:"5px",margin:"5px"}}/>
                    <h6 className="card-title" style={{margin:"5px"}}>Branch</h6>
                    <select className="form-select" aria-label="Default select example" defaultValue={selectedBranch} onChange={handleChange}>
                        <option value="">Select a branch</option>
                        <option value="cse">Computer Science Engineering</option>
                        <option value="it">Information technology</option>
                        <option value="ds">Data Science</option>
                        <option value="EcE">Electronics Communication Engineering</option>
                        <option value="ML">Machine Learning</option>
                        <option value="civil">Civil</option>
                    </select>
                    <h6 className="card-title" style={{margin:"5px"}}>Year</h6>
                    <select className="form-select" aria-label="Default select example" defaultValue={selectedYear} onChange={getYear}>
                        <option value="">Select a Year</option>
                        <option value="1">2023</option>
                        <option value="2">2022</option>
                        <option value="3">2021</option>
                    </select>
                    <h6 className="card-title" style={{margin:"5px"}}>Year</h6>
                    <div>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="1" onChange={getGender} value="Male"/>
                            <label className="form-check-label" htmlFor="1" style={{margin:"2px"}} value="Male" >
                                Male</label >
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="2" onChange={getGender} value="Female"/>
                            <label className="form-check-label" htmlFor="2" style={{margin:"2px"}} value="Female">Female</label>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="3" onChange={getGender} value="Other"/>
                            <label className="form-check-label" htmlFor="3" style={{margin:"2px"}} value="Other">Other</label>
                    </div>   
                    <br></br>
                    <button className="btn btn-dark" type="submit" onClick={sumbitData}style={{margin:'5px'}}>Register</button>
                    
                </form>

            </div>
        </div>
        </div>
    );
}
export default Register;