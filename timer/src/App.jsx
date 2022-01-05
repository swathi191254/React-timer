import {Timer} from './components/time';
import { useState } from 'react';
import './App.css'

function App() {
const [show,setShow] = useState(false);
return(
    <div className="App">
        <div className="content">
        <h2>Timer</h2>
        {show ? <Timer /> : null} 
        <button onClick={()=>{setShow(!show)}}>{show ? 'hide':'show'}</button>
        </div>
    </div>
)
}
export default App;