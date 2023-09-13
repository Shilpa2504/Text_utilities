import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

 
function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showAlert =(message,type) =>{
    //type signifies type of alert warning,danger,success;
    setalert({
      msg:message,
      type:type
     } )
     setTimeout(() =>{
     setalert(null);
    },1500);

  }
  const  togglemode=()=>{
if(mode==='light'){
  setmode('dark')
  document.body.style.backgroundColor='#152f59';
  showAlert("Dark mode has been enabled","success");
  document.title ="Textutils-Darkmode";
}else{
  setmode('light')
  document.body.style.backgroundColor='white';
showAlert("Light mode has been enabled","success");
document.title ="Textutils-lightmode";
}
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
          
          
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
   
   </Routes>

    </div>
    </Router>
    </> 
  );
}

export default App;