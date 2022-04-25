import './App.css';
import Block from './Block.js';
import {Button, Input, TextArea} from '@fluentui/react-northstar';


const App= () =>{

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

      const call=(buttonValue) =>{
        return(     
            <Button content={buttonValue} />       
        );
      }

      const starterAction = () =>{
        return(
          <Input style={{borderStyle:"dotted"}} placeholder="input here"/>
        );
      }
  

  return (
    <Block block={block} type={textarea} action={call} starter={starterAction} />
  );
}

export default App;

