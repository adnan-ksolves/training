import React from 'react';
import { useState } from 'react';
import Card from './Card';
import Header from './Header';


const App = () => {
const [data,setData]=useState(['Welcome here. Create your first note.']);
const[display,setDisplay]=useState({display:"none"});
const [note,setNote]=useState();

const del = (e) => {
  let n=parseInt(e.target.name);
 setData(data.filter((val,i)=>{
return i!=n;
 }));
}

const handleNote = (e) => {
  setNote(e.target.value);
}

const submit = () => {
  setData([note,...data]);
  setNote("");
  hide();
}

const show = () => {
  setDisplay({display:"block"})
}

const hide = () => {
  setDisplay({display:"none"});
  setNote("");
}


  return (
  <>
  <Header show={show}/>


 <div className="card text-center" style={display}>
  <div className="card-body text-center">
    <p className="card-text">
      <textarea maxLength="80" className="w-75 rounded" value={note} onChange={handleNote} placeholder="Type here" autoFocus></textarea>
      </p>
    <button className="btn btn-outline-success btn-sm" onClick={submit}>Save </button>
    <button className="btn btn-outline-danger btn-sm mx-1" onClick={hide}>Cancel</button>
  </div></div>
  

<div className="container">
  <div className="row gy-2">
{data.map((val,i)=>{
   return( <div key={i} className='col col-6'> 
   <Card note={val} id={i} delete={del}/>
   </div>)
})}  
  </div>
</div>
  </>  
  
  )
}

export default App
