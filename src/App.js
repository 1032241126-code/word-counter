
import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import React, {useState} from 'react';
import Alert from './Alert';



function App() {
const[Mode,setMode]=useState('light');
const[alert,setalert]=useState(null);

const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  // time out system
  setTimeout(()=>{
    setalert(null);
  },3000);
}
const togglerMode=()=>{
  if(Mode ==='light'){
setMode('success');
document.body.style.background='#042743';
showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.background='white';
    showAlert("light mode has been enabled","danger");
  }
}
  return (
    <>

  <Navbar title ="W O R D COUNTER" mode={Mode}  togglerMode={togglerMode}/>
  <Alert alert={alert} />
  <div className="container">
    
              <Form showAlert={showAlert} heading="enter the text here to change" />
         
    </div>

</>
  );
}

export default App;
