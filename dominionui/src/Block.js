import React from "react"
import iBlock from "./interfaces.ts"
import { useState } from "react";
import {Card, Flex, Text} from 'react-bootstrap';

const Block = (props: iBlock)=>{

    const [block, setValue] = useState(props.block);

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Title> {block.title}</Card.Title>
            <Card.Subtitle ClassName="mb-2 text-muted">{block.description}</Card.Subtitle>
            <Card.Body>                
            {props.inputFromOtherBlock(block.idBlock)}
            {props.starter(block.idBlock)}
            {props.action(block.actionValue, block.idBlock)}      
           </Card.Body>
        </Card>
    );
}



export default Block;