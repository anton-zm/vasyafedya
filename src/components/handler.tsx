import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #623de7;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
`

export const Handler = observer(({action, onClick}:{action: string, onClick: () => void}) => {
    return (
        <Button onClick={onClick}>
            {action}
        </Button>
    )
})