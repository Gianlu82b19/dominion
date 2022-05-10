import React from "react"
import iBlock from "./interfaces.ts"
import { useState } from "react";
import {Card, Flex, Text} from 'react-bootstrap';
import Draggable from "react-draggable";



const Block = (props: iBlock)=>{

    const [block, setValue] = useState(props.block);

    return(
        <Draggable>        
        <Card style={{ width: '18rem', margin:'25px' }}>
            <Card.Title> {block.title} ({block.idBlock}) {block.autoFire? "*":""}</Card.Title>
            <Card.Subtitle ClassName="mb-2 text-muted">I will send to {block.outputIds[0]} {block.autoFire? "in autoFire mode":" after click"}</Card.Subtitle>
            <Card.Body>                
            {props.inputFromOtherBlock(block.idBlock)}
            {props.starter(block.idBlock)}
            {block.autoFire? "" : props.action(block.actionValue, block.idBlock)}      
           </Card.Body>
        </Card>    
        </Draggable>
    );
}



export default Block;