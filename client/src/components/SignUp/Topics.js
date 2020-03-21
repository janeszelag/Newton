import React, {useState} from "react";
import TopicCheckBoxes from "./TopicsChoice"




export default function Topics(props) {


  //call this after post
  // localStorage.removeItem("mode");
  return (
    <main>
       
        
     
        <TopicCheckBoxes topics={props.topics}/>
       
       
       
        
  
      
    </main>
  );
}