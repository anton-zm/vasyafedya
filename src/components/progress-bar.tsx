import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";

const ProgressCell = styled.div<{color: string}>`
    width: 1%;
    height: 25px;
    background-color: ${props => props.color};
`
const ProgressBarWrapper = styled.div`
    width: 100%;
    height: 25px;
    border: 3px solid grey;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 48px;
`

function getColor(value: number):string {
    if(value < 40){
        return 'green'
    }else if(value < 80){
        return 'yellow'
    }
    return 'red'
}

export const ProgressBar = observer(({value}:{value: number}) => {
    const cells = []
    
    for(let i = 0; i < value; i++){
        cells.push(i)
    }

    return (
        <ProgressBarWrapper className="flex-row">
            {cells.map((cell, i) => (
                <ProgressCell key={i} color={getColor(value)} />
            ))}
        </ProgressBarWrapper>
    )
})