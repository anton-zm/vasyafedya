import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { ProgressBar } from "./progress-bar";
//@ts-ignore
import gift from '../assets/img/gift.png'
import { Handler } from "./handler";
import { useStore } from "../store/use-store";

type Name = 'va' | 'fe'

const ItemWrapper = styled.div`
    width: 45%;
    border: 1px solid #7e7575;
    border-radius: 8px;
    padding: 20px;
`
const Photo = styled.img`
    width: 60%; 
`
const Gift = styled.div<{opacity: number}>`
    background-image: url(${gift});
    background-size: cover;
    width: 20%;
    padding: 20%;
    margin-top: 48px;
    opacity: ${props => props.opacity};
`
const ValueText = styled.span`
    color: black;
    font-size: 22px;
`
const Clear = styled.div`
    background-color: #2c55ad;
    padding: 10px 25px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    margin-top: 28px;
`

function getOpacity(value: number):number {
    return ((100 - value) / 100)
}



export const Item = observer(({photo, value, name}:{photo: string, value: number, name: Name}) => {
    const store = useStore()

    function ClearStorage(name: Name){
        localStorage.setItem(name, '0')
        window.location.reload()
    }

    return (
        <ItemWrapper className="flex-column centered">
            <Photo alt='' src={photo} />
            <ProgressBar value={value} />
            <div style={{marginTop: 32}} className="flex-row between w100">
                <Handler onClick={() => store.increase(name)} action="+" />
                <ValueText>{value} / 100</ValueText>
                <Handler onClick={() => store.decrease(name)} action="-" />
            </div>
            <Gift opacity={getOpacity(value)} />
            <Clear onClick={() => ClearStorage(name)}>Сбросить</Clear>
        </ItemWrapper>
    )
})