import { makeAutoObservable } from "mobx"

export class Storage {
   _va = 0
   _fe = 0

    constructor() {
        makeAutoObservable(this)
        const v = localStorage.getItem('va')
        const f = localStorage.getItem('fe')
        if(v) this._va = +v
        if(f) this._fe = +f
    }

    increase(name: string){
        console.log('increase')
        const value = localStorage.getItem(name)
        if(value){
            localStorage.setItem(name, (+value + 1).toString())
            name === 'va' && this.setVa(+value + 1)
            name === 'fe' && this.setFe(+value + 1)
        }else{
            localStorage.setItem(name, '1')
            name === 'va' && this.setVa(1)
            name === 'fe' && this.setFe(1)
        }
    }

    decrease(name: string){
        console.log('decrease')
        const value = localStorage.getItem(name)
        if(value && +value > 0){
            localStorage.setItem(name, (+value - 1).toString())
            name === 'va' && this.setVa(+value - 1)
            name === 'fe' && this.setFe(+value - 1)
        }
    }

    setVa(v:number){
        this._va = v
    }
    setFe(v:number){
        this._fe = v
    }

    get Va (){
        return this._va
    }
    get Fe (){
        return this._fe
    }
}