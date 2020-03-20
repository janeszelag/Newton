import React from "react";
import useVisualMode from "../../hooks/useVisualMode"
import Form from "./Form"
import Topics from "./Topics"


export default function Signup(props) {
  const FORM = "SIGNUPFORM"
  const TOPICS = "TOPICS"

  const storedMode = localStorage.getItem('mode');

  const { mode, transition } = useVisualMode(storedMode? storedMode : FORM);

  const userCreated = () => {
    transition(TOPICS)
  }
  
  return (
    <article>
      {mode === FORM && <Form userCreated={userCreated} setUserCookie={props.setUserCookie} setUser={props.setUser}/>}
      {mode === TOPICS && <Topics />}
    </article>
  ) 
}