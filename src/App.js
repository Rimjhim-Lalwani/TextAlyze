import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)},1500
    )
  }
  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Dark Mode has been disabled", "success")
      
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor="black"
      showAlert("Dark Mode has been enabled", "success")
     
    }
  }
  
  return (

  
<>
<NavBar title="TextAlyze" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-5"><TextForm showAlert={showAlert} heading="Enter the text to analyze here!" mode={mode}/>
 </div></>
  // <Router>{/* <Routes>
  //         <Route exact path="/about" element={<About mode={mode}/>}/>
          
  //         <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze here!" mode={mode}/>}/>
          
  // </Routes> */}</Router>
 


  );
}

export default App;
