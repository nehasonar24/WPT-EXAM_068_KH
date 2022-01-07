// import logo from './logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
// import { ListGroupItem } from 'react-bootstrap';

function App() {
  return (
    <MyComponant/>
  );
}

function MyComponant(){
const[username,setusername] =useState("");
const[list,setlist]=useState([]);
const handleusername=(e) =>{
  setusername(e.target.value);
}
const addUser =async () => {
  if (username===""){
    alert("invalid message..");
    return;
  }

const url ="http://localhost:4000/adduser";
const data={
  username:username,
}
 axios.post(url,data);
const newlist =[username,...list];
setlist(newlist);
setusername("");
}
// const getuser= async()=>{
//   const url ="http://localhost:4000/user";
//   const result=await fetch(url);
//   const list= await result.json();
//   let newList=[username,...list];
//   setlist(newList);
// }

//  useEffect(() => getuser());

  return(
  <div className='container-fluid'>
<div className='row text-light bg-dark p2 m-4'>
  <div className='col-4 m-4'>My Chat App </div>
  <div className='col-4 m-4'> By - NEHA SONAR_068_KH</div>
</div>
<div className='row mt-3 p-5'>
  <input className='col-4 m-2 p-2' type="text" value={username}
  placeholder="Let's chat here.." 
  onChange={handleusername}/>
  <input className='col-4 m-2 p-2'  type="button" value="Send" onClick={addUser} />
</div>
<div>
{
  list.map((item)=>(
    <div className='form-control my-3 alert-info'>{item}</div>
  ))
}
</div>

  </div>)
}






export default App;
