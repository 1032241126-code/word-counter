import React, {useState} from 'react'

export default function Form(props) {
    const handleUpClick= ()=>{
        console.log("enter the text" + Text);
        let newText=Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");

    }

    const handleDwClick= ()=>{
        console.log("enter the text" + Text);
        let newText=Text.toLowerCase();
        setText(newText);
props.showAlert("Converted to lower case", "success");

    }
    const handleClearClick= ()=>{
        console.log("enter the text" + Text);
        let newText="";
        setText(newText);
        props.showAlert("all clear", "primary");

    }

    const handleCopyClick= ()=>{
     let newText=document.getElementById("myBox");
     newText.select();
    navigator.clipboard.writeText(newText.value);
props.showAlert("All copied of clipboard", "success");

    }

      const handleUndoClick= () => {
  setText(prevText);
};
    const handleSpaceClick= ()=>{
let newTex=Text.split(/[ ]+/);
      setText(newTex.join(" "));
    }

   

    const handleOnChange=(event)=>{
        console.log("on change");
        setPrevText(Text);  
        setText(event.target.value);
    }

  


    const[Text,setText]=useState('');
    const [prevText, setPrevText] = useState("");
  return (
    <>
    <div>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control text-dark"  value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-danger mx-3" onClick={handleUpClick} >Convert to Uppercase</button>
<button className="btn btn-success mx-3" onClick={handleDwClick} >Convert to Lowercase</button>
<button className="btn btn-dark mx-3" onClick={handleClearClick} >All Clear</button>
<button className="btn btn-primary mx-3" onClick={handleCopyClick} >Copy text</button>
<button className="btn btn-danger mx-3" onClick={handleSpaceClick} >remove space</button>
<button className="btn btn-primary mx-3" onClick={handleUndoClick} >UNDO</button>
    </div>
    <div className="container my-3">
      <h2 style={{ color: "purple" }}>Your text summarry</h2>
      <p  >{Text.split(" ").length} Words and {Text.length} character</p>
      <p>{0.008*Text.split("").length} words read </p>
     <h2 > Preview </h2>
<p>{Text}</p>
    </div>
   
    </>
  )
}
