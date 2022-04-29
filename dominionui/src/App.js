import './App.css';
import Block from './Block.js';
import iBlock from './interfaces.ts'
import {Button, Form} from 'react-bootstrap';
import { useState } from 'react';


const App= () =>{

  const [flow, setFlow] = useState(
    [
      //{data:"value one", input:"block one"},
      //{data:"value two", input:"block two"}
    ]
  )

  const [BlockInput, setInput] = useState('');

    //Example of configuration Workflow
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
        content:"",
        actionValue: "Send to the next block",
        value:"",
        outputIds:[2]
        }      
        ,
       {
        idBlock:2,
        title:" Block Two",
        description: "Block Two receive from block One",
        content:"",
        actionValue: "Send to the next block",
        value:"",
        outputIds:[0]
        }
      ]);

      
     
       const handleSubmit=()=>{
         alert("clicked");
       }

     const showValue =(id) => {
       return (

         <Form.Text disabled>{blocks[id].content} </Form.Text>
       );
     }

     const handleCallButton = (inputId, outputId) =>{
      console.log(inputId,outputId)

        //example formulas concat
        blocks[inputId].evaluation = blocks[inputId].value +" "+ blocks[inputId].content;

        blocks[outputId].content=blocks[inputId].evaluation;
        setBlock(blocks)

        const data =[...flow,{input:blocks[inputId], output:blocks[outputId]}]
        setFlow(data);       
        //setFlow(data);
        //valorizzo il dato nell'output
        console.log(data)
        
     }

      const call=(buttonValue,id) =>{
        return(     
            <Button variant="primary" onClick={()=>handleCallButton(blocks[id].idBlock,blocks[id].outputIds[0])}>
              {buttonValue}</Button>             
        );
      }

      const handleOnChange= (e, id)=>{
        const data= blocks.slice();        
        data[id].value = e.target.value;
        setBlock(data);
                
      }

      const starterAction = (id) =>{        
        return(
          <Form.Control onChange={(e)=>handleOnChange(e,id)} value={blocks[id].value} style={{borderStyle:"dotted"}} placeholder="input here"/>          
        );
      }
  

  return (
    <div>
    <Block block={blocks[0]} inputFromOtherBlock={showValue} action={call} starter={starterAction} />
    <Block block={blocks[1]} inputFromOtherBlock={showValue} action={call} starter={starterAction} />
    <Block block={blocks[2]} inputFromOtherBlock={showValue} action={call} starter={starterAction} />
    </div>
  );
}

export default App;

