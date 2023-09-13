import React from 'react'

 function Alert(props){
    const capitalize=(word)=>{
            const lower=word.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice(1);//1k bad sara print karega
            }
    return(
      
        //similar to if else if props .alert value is there then only the value will be evaluated
//  this wil be used here to change the color type specifies the color
<div style={{height:'50px'}}>
{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  
  <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

       </div> }</div>

    )
}
export default Alert