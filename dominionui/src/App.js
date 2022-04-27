import './App.css';
import Block from './Block.js';
import iBlock from './interfaces.ts'
import {Button, Input, TextArea} from '@fluentui/react-northstar';
import { useState } from 'react';


const App= () =>{

  const [flow, setFlow] = useState(
    [
      //{data:"value one", input:"block one"},
      //{data:"value two", input:"block two"}
    ]
  )

  const [BlockInput, setInput] = useState('');

    //starter development block. Drafted and incremental
      const [blocks, setBlock]=useState([
        {
       idBlock:0,
       title:"Starter Block",
       description: "Insert data into block Zero",
       content:"Contenuto disabilitato",
       actionValue: "Send to the next block",
       value:"",
       outputIds:[1]
       },
       {
        idBlock:1,
        title:" Block One",
        description: "Block One receive from block Zero",
        content:"Data from block Zero",
        actionValue: "Send to the next block",
        value:"",
        outputIds:[1]
        }      
      ]);

      
     
       const handleSubmit=()=>{
         alert("clicked");
       }

     const textarea =(content) => {
       return (
         <TextArea disabled value={content}/> 
       );
     }

     const handleCallButton = (value, inputId, outputId) =>{
        const data =[...flow,{data:value, input:inputId, output:outputId}]
        setFlow(data);
        console.log(data);
     }

      const call=(buttonValue,id) =>{
        return(     
            <Button onClick={()=>handleCallButton(blocks[id].value,blocks[id].idBlock,blocks[id].outputIds[id])} content={buttonValue} />             
        );
      }

      const handleOnChange= (e, id)=>{
        const data= blocks.slice();        
        data[id].value = e.target.value;
        setBlock(data);        
      }

      const starterAction = (id) =>{        
        return(
          <Input onChange={(e)=>handleOnChange(e,id)} value={blocks[id].value} style={{borderStyle:"dotted"}} placeholder="input here"/>          
        );
      }
  

  return (
    <div>
    <Block block={blocks[0]} type={textarea} action={call} starter={starterAction} />
    <Block block={blocks[1]} type={textarea} action={call} starter={starterAction} />
    </div>
  );
}

export default App;

