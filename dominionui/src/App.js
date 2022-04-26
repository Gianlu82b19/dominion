import './App.css';
import Block from './Block.js';
import iBlock from './interfaces.ts'
import {Button, Input, TextArea} from '@fluentui/react-northstar';
import { useState } from 'react';


const App= () =>{

  const [flow, setFlow] = useState(
    [
      {data:"value one", input:"block one"},
      {data:"value two", input:"block two"}
    ]
  )

  const [input, setInput] = useState('');

      const block={
       title:"Starter Title",
       description: "Starter Block Description",
       content:"Contenuto disabilitato",
       actionValue: "Send to the next block"
       }
     
       const handleSubmit=()=>{
         alert("clicked");
       }

     const textarea =(content) => {
       return (
         <TextArea disabled value={content}/> 
       );
     }

     const handleCallButton = (value, id) =>{
        const data =[...flow,{data:value,input:id}]
        setFlow(data);
        console.log(data);
     }

      const call=(buttonValue) =>{
        return(     
            <Button onClick={()=>handleCallButton(input,14)} content={buttonValue} /> 
            
        );
      }

      const handleOnChange= (e)=>{
        setInput(e.target.value);        
      }

      const starterAction = () =>{
        return(
          <Input onChange={handleOnChange} value={input} style={{borderStyle:"dotted"}} placeholder="input here"/>
        );
      }
  

  return (
    <Block block={block} type={textarea} action={call} starter={starterAction} />
  );
}

export default App;

