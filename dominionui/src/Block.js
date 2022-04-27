import React from "react"
import iBlock from "./interfaces.ts"
import { useState } from "react";
import {Card, CardBody, CardHeader, Flex, Text} from '@fluentui/react-northstar';

const Block = (props: iBlock)=>{

    const [block, setValue] = useState(props.block);

    return(
        <Card>
            <CardHeader>
                <Text content={block.title} weight="bold"/>
                <Text content={block.description} size="small"/>
            </CardHeader>
            <CardBody>
            <Flex column>            
            {props.type(block.content)}
            {props.starter(block.idBlock)}
            {props.action(block.actionValue, block.idBlock)}
           </Flex>
           </CardBody>
        </Card>
    );
}



export default Block;