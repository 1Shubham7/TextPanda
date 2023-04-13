import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {

  const [alert,setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('green');
  const [myStyle,setMyStyle] = useState({
      color: '#212529'
    })

  function setTheAlert(message, type){
      setAlert({
        msg: message,
        type: type
      })
  }

  function toggleMode(props){
    if(mode ==='light'){
      setMode('dark');
      setColor('black');
      document.body.style.backgroundColor = '#343a40';
      setMyStyle({
        color: 'white',
      })
      setTheAlert("Dark Mode has been enabled", "Success");
    }
    else {
      setMode('light');
      setColor('white');
      document.body.style.backgroundColor = 'white';
      setMyStyle({
        color: 'black',
      })
      setTheAlert("Light Mode has been enabled","Success");
    }
  }

  // const[mode, setMode] = useState('light');
  // const[xtext, setXText] = useState('Dark Mode');
  // const[myCSS, setMyCSS] = useState({
  //   color: 'black',
  //   backgroundColor : 'white',
  // })

  // function darkMode(){
  //   if (myCSS.backgroundColor === 'white'){
  //     setMyCSS({
  //         backgroundColor: 'black',
  //         color:'white',
  //     })
  //     setXText('Enable Light Mode');
  //     // setMode('dark');
  //     Navbar.toggleMode();
  //   } else {
  //     setMyCSS({
  //       backgroundColor: 'white',
  //       color:'black',
  //   })
  //    setMode('light');
  //   setXText('Dark Mode');
  //   }
  // }



  return (
    <>
<Navbar xxx="TextPanda.com" mode={mode} toggleMode={toggleMode} myStyle={myStyle}/>
<Alert alert={alert}/>
{/* <About /> */}
<div className="container my-2 ">
<TextForm heading = "Enter the text to analyze below" mode={mode} myStyle={myStyle} />
{/* <button className='btn btn-primary' >{xtext}</button> */}
</div>
</>
);
}

export default App;
