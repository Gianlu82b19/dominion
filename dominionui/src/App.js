import './App.css';
import Block from './Block.js';
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
       formulas: {kind:""},
       value:"",
       outputIds:[1]
       },
       {
        idBlock:1,
        title:" Block One",
        description: "Block One receive from block Zero",
        content:"",
        actionValue: "Send to the next block",
        formulas: {kind:"addPercent"},
        value: 22,
        autoFire:true,
        outputIds:[2]
        }      
        ,
       {
        idBlock:2,
        title:" Block Two",
        description: "Block Two receive from block One",
        content:"",
        actionValue: "Send to the next block",
        formulas: {kind:""},
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

     const leverageFormulas= (inputId)=>{
      if((blocks[inputId].formulas.kind!=undefined) && (blocks[inputId].formulas.kind==="concat"))
      return blocks[inputId].value + " " + blocks[inputId].content;

      if((blocks[inputId].formulas.kind!=undefined) && (blocks[inputId].formulas.kind==="plus"))
      return (Number)(blocks[inputId].value) + (Number)(blocks[inputId].content);

      if((blocks[inputId].formulas.kind!=undefined) && (blocks[inputId].formulas.kind==="addPercent"))
      return ((Number)(blocks[inputId].content) * (Number)(blocks[inputId].value)/100)+(Number)(blocks[inputId].content);

      if((blocks[inputId].formulas.kind!=undefined) && (blocks[inputId].formulas.kind==="min"))
      return blocks[inputId].value - blocks[inputId].content;

        return blocks[inputId].value;
     }

     const handleCallButton = (inputId) =>{
        let outputId = blocks[inputId].outputIds[0];

        //applying formulas
        blocks[inputId].result = leverageFormulas(inputId)

        //setting the content (output from formulas)
        blocks[outputId].content=blocks[inputId].result;
        setBlock(blocks)

        const data =[...flow,{input:blocks[inputId], output:blocks[outputId]}]
        setFlow(data);       
        //setFlow(data);
        //valorizzo il dato nell'output
        console.log(data)
        //leveraging autofire
        if(blocks[outputId].autoFire) handleCallButton(blocks[outputId].idBlock)
        
     }

      const call=(buttonValue,id) =>{
        return(     
            <Button variant="primary"  onClick={()=>handleCallButton(blocks[id].idBlock)}>
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
          <Form.Control  onChange={(e)=>handleOnChange(e,id)} value={blocks[id].value} style={{borderStyle:"dotted"}} placeholder="input here"/>          
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

