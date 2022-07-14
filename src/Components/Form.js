import React from 'react'
import {useState} from 'react'
import moment from 'react-moment';

export const Form = ({Topic, setTopic,handleSubmit}) => {


  const [telError, setTelError] = useState('')
  const [maxDate,setMaxDate] = useState('')
  const [minDate,setMinDate] = useState('')
  const [apptDate,setApptDate] = useState('')



  function handleApptDateChange (e) {
   
    if(new Date(e) < new Date(maxDate) && new Date(e) > new Date(minDate)) {
      console.log("Appointment set")
    
    }
    
  }

  function handleTelChange (date) {
    if(date.length!==9){
      setTelError("Please input a valid phone number")
    }
    else {
      setTelError("")
    }
  }

function handleChange(topicTitle){
    const topic = {
        title : topicTitle,
        score : 0
    }
    setTopic(topic)
}
  return (
    <form action="/">
  <div>
  
  <label>
    Name:
  </label>
   
  <input onChange={(event)=>handleChange(event.target.value)} type="text" name="name" />

  </div>
  
  <div>
  
  <label>
    Range
  </label>

  <input onChange={(event)=>handleChange(event.target.value)} type="range" min="0" max="100" name="name"/>
  
  </div>
  
  <div class="telephone">
  
  <label>
    Telephone
  </label>

  <input onChange={(event)=>handleTelChange(event.target.value)} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
  {
  telError!=='' && <p> {telError} </p>
  }
  </div>

  <div class="max-date">
  
  <label>
    Max Date 
  </label>

  <input onChange={(event)=>setMaxDate(event.target.value)} type="datetime-local"  />
  {
  telError!=='' && <p> {telError} </p>
  }
  </div>
  <div class="telephone">
  
      <label>
        Min Date
      </label>

        <input onChange={(event)=>setMinDate(event.target.value)} type="datetime-local"  />
        {
        telError!=='' && <p> {telError} </p>
        }
  </div>


  <div class="telephone">
  
      <label>
        Appointment 
      </label>

      <input onChange={(event)=>handleApptDateChange(event.target.value)} type="datetime-local"  />
      {
      telError!=='' && <p> {telError} </p>
      }
      </div>

  <input onClick={e=>handleSubmit(e)} type="submit" value="Submit" />
  
</form>
  )
}
