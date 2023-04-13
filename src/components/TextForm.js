import React from 'react'
import {useState} from 'react'

export default function TextForm(props) {
  function handleUpClick(){
    // console.log("Uppercase Button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleCopy(){
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    window.alert("Text Copied");
  }

  function handleLowClick(){
    // console.log("Uppercase Button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  function clear(){
    // console.log("Uppercase Button was clicked");
    setText('');
  }

  function handleOnChange(event){
    console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // useState will return text and settext
  // setText will be able to change text
  //set the 'text' to the first parameter of array returned by useState
  // set the 'settext' to the second parameter of array returned by useState

  // to change text
  // setText("New text"); 
  return (
    <>
    <div>
        <h3 style={props.myStyle} >{props.heading}</h3>
        <div className="mb-3">
        <textarea style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='light'?'black':'white'}} className="form-control  my-2" value={text} id="myBox" rows="8" onChange={handleOnChange} placeholder='Enter your text here'></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={clear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    </div>

    <div className='container my-2' style={props.myStyle}>
      <h5 className = "container" >Your text summary</h5>
      <p> {text.split(" ").length -1 } word(s) and {text.length} character(s)</p>
      <p>It's a {0.008*(text.split(" ").length - 1)} minutes read</p>
      <h5>Preview</h5>
      <p>{text===""?'Enter the text to preview it':text}</p>
    </div>

    </>
  )
}