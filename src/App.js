import axios from 'axios';
import { useState, useEffect } from 'react';
import { Form } from './Components/Form';
import { TopicComponent } from './Components/TopicComponent';
function App() {

  const apiUrl = 'http://localhost:3030';

  const [List, setList] = useState([]);
  const [Topic, setTopic] = useState({})

  useEffect(()=>{fetchTopics()},[]);
 
  async function fetchTopics(){
    let discoverData = await fetch(`${apiUrl}/topics`);
    let discoverJson = await discoverData.json();
    setList(discoverJson);
  } 

  useEffect(()=>{fetchTopics()},[List]);


  
    const handleSubmit = (e) => {

    e.preventDefault()
        axios
        .post(`${apiUrl}/topics`,Topic)
        .then((res)=>{
          console.log("successfully posted")
        })
        .catch((err)=>{
          console.log(err)
        })

  } 

  const topicList = List.map((topic,key)=>{

    return (
    <>
      <TopicComponent topic={topic}/>
    </>
    )
  })


  return (
    <>
    <div>
      <Form Topic={Topic} setTopic={setTopic} handleSubmit={handleSubmit}/> 
      
     
            {topicList}
      </div>
    </>
  )
}

export default App;