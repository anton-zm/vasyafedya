import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Content } from "./content-wrapper";
import { Item } from "./item";
//@ts-ignore
import fePhoto from '../assets/img/fe.png'
//@ts-ignore
import vaPhoto from '../assets/img/va.png'
import { useStore } from "../store/use-store";

export const Main = observer(() => {
    const store = useStore()

    const [fe, setFe] = useState(0)
    const [va, setVa] = useState(0)

    useEffect(() => {
        setFe(store.Fe)
        setVa(store.Va)
    },[store.Fe, store.Va])

    return (
        <Content>
            <div style={{width: '60%'}} className="flex-row between wrap">
                <Item name="fe" value={fe} photo={fePhoto} />
                <Item name="va" value={va} photo={vaPhoto} />
            </div>
        </Content>
    )
})