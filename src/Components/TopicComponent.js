import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
export const TopicComponent = ({topic}) => {
        
    
    const [EditFormDisplay, setEditFormDisplay] = useState(false)

    const [tempTopicTitle, setTempTopicTitle] = useState(topic.title)


     
function handleEditChange(changedTitle){
    setTempTopicTitle(changedTitle)
  }
   
   
    const handleEditSubmit = (e) => {
        //e.preventDefault()
        console.log(e) 
        e.title = tempTopicTitle;
        axios.put(`http://localhost:3030/topics/${e._id}`, e)
          .then((res)=>console.log("successfully changed"))
          .catch((err)=>console.log(err))
      }


        function showEditForm(){
          setEditFormDisplay(!EditFormDisplay)
         }



  return (
    <div>    
    <>
    <p >{topic.title} </p>
    {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{topic.published_at}</Moment> */}
    <Moment format='Do, h:mm a'>{topic.published_at}</Moment>
    <p></p>
    {
      EditFormDisplay && (
        <>
        <textarea onChange={(event)=> handleEditChange(event.target.value)} type="text" value={tempTopicTitle}/>
        <input onClick={()=>handleEditSubmit(topic)} type="submit" />
        </>
      )
    }
    {
      !EditFormDisplay && <button onClick={showEditForm}>Edit</button>
    }
    {
      EditFormDisplay && <button onClick={showEditForm}>Done</button>
    }
    
    </></div>
  )
}
