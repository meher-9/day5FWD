import { useState } from 'react';
import Register from './register';
import Log from './login';
import Navigation from './navigation';

function First() {
    const [currentTab, setCurrentTab] = useState(true);

    const button = () => {
        setCurrentTab(true);
    };

    const button1 = () => {
        setCurrentTab(false);
    };

    return (
        <div>
            <Navigation />
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <button className="btn btn-link" style={{ fontSize: 20, fontFamily: 'cursive', marginRight: 20,color:"black" }} onClick={button}>Login</button>
                <button className="btn btn-link" style={{ fontSize: 20, fontFamily: 'cursive',color:"black" }} onClick={button1}>Register</button>
            </div>
            <div>
                {currentTab ? <Log /> : <Register />}
            </div>
        </div>
    );
}

export default First;