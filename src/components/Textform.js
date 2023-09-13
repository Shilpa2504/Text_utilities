import React, {useState}  from 'react'

export default function Textform(props)
{
    const handleupclick= () =>{
        console.log("Upper case was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoclick= () =>{
        console.log("Upper case was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

    }
    
    const handleonchange= (event) =>{
        console.log("Upper case was clicked");
        setText(event.target.value);
        }
    const [text, setText] = useState('Enter text here');
   
    return(
       <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
    <div className="mb-3">
         
<textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#4a4b60':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleupclick } >Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoclick } >Convert to lowercase</button>
            </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words {text.length} characters</p>
                <p>Time needed to read the paragraph {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
                <p>Preview</p>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
         </>

    )
}