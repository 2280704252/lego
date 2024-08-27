
import  type{ Module } from 'vuex'

import type{GlobalDataProps}from './index'

import {v4 as uuidv4} from 'uuid'



interface ComponentData{

    props: {[key:string]:any}

    id:string

    name:string


}


export interface EditorProps{

    components:ComponentData[]

    currentElement:string


}

export const testComponents:ComponentData[]=[


    {id: uuidv4(),name:'l-text',props:{text: 'hello1',fontSize:'60px'}},
    {id: uuidv4(),name:'l-text',props:{text: 'hello2',fontSize:'50px'}},
    {id: uuidv4(),name:'l-text',props:{text: 'hello3',fontSize:'40px'}},
    {id: uuidv4(),name:'l-text',props:{text: 'hello4',fontSize:'30px'}},
    {id: uuidv4(),name:'l-text',props:{text: 'hello5',fontSize:'20px'}},
    {id: uuidv4(),name:'l-text',props:{text: 'hello6',fontSize:'10px'}},
]


const editor:Module<EditorProps,GlobalDataProps>={
    state:{
        components:testComponents,

        currentElement:''
    }
}

export default editor





