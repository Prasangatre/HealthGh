import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import'./Loginpage.css'
const getDatafromLS=()=>{
    const data = localStorage.getItem('doctors');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }
  
const LoginPage = () => {

const [doctors, setDoctors]=useState(getDatafromLS());


const [name, setName]=useState('');
const [age, setAge]=useState('');
const [gender, setGender]=useState('');
const [date, setDate]=useState('');
const [notes, setNotes]=useState('');
const [details, setDetails]=useState('');


const handleDoctorsSubmit=(e)=>{
  e.preventDefault();

  let Doctorz={
   name,
   age,
   gender,
   date,
   notes,
   details
  }
  setDoctors([...doctors,Doctorz]);
  setName('');
  setAge('');
  setGender('');
  setDate('');
  setNotes('');
  setDetails('');
}

useEffect(()=>{
  localStorage.setItem('doctors',JSON.stringify(doctors));
},[doctors])

const navigate=useNavigate();
function navigatation(){
    navigate('./detail')
}
return (
  <div className='wrapper'>
    <h1>Doctors prescription</h1>
    <p>Add patients details and prescription</p>
    <div className='main'>

      <div className='form-container'>
        <form autoComplete="off" className='form-group'
        onSubmit={handleDoctorsSubmit}>
          <label>Patient name</label>
          <input type="text" className='form-control' required
          onChange={(e)=>setName(e.target.value)} value={name}></input>
          <br></br>
          <label>Patient Age</label>
          <input type="number" className='form-control' required
          onChange={(e)=>setAge(e.target.value)} value={age}></input>
          <br></br>
          <label>Patient Gender</label>
          <input type="text" className='form-control' required
          onChange={(e)=>setGender(e.target.value)} value={gender}></input>
          <br></br>
          <label>Date</label>
          <input type="date" className='form-control' required
          onChange={(e)=>setDate(e.target.value)} value={date}></input>
          <br></br>
          <label>Medical notes</label>
          <input type="text" className='form-control' required
          onChange={(e)=>setNotes(e.target.value)} value={notes}></input>
             <br></br>
             <label>Details of Medicine</label>
          <input type="text" className='form-control' required
          onChange={(e)=>setDetails(e.target.value)} value={details}></input>
             <br></br>

          <button onClick={()=>{
setTimeout(navigatation,1000)
          }}type="submit" className='btn btn-success btn-md'>
            ADD
          </button>
        </form>
      </div>

      

    </div>
  </div>
)
}

export default LoginPage