
import  type{ Module } from 'vuex'

import type{GlobalDataProps}from './index'

import {v4 as uuidv4} from 'uuid'
import store from './index'



export interface ComponentData{

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
    {id: uuidv4(),name:'l-text',props:{text: 'hello2',fontSize:'50px',color:'red',actionType:'url',url:'https://www.baidu.com'}},
    {id: uuidv4(),name:'l-text',props:{text: 'hello3',fontSize:'40px'}},
    {id: uuidv4(),name:'l-text',props:{text: 'hello4',fontSize:'30px'}},
    {id: uuidv4(),name:'l-text',props:{text: 'hello5',fontSize:'10px'}},
    {id: uuidv4(),name:'l-text',props:{text: 'hello6'}},
]


const editor:Module<EditorProps,GlobalDataProps>={
    state:{
        components:testComponents,

        currentElement:''
    },
    mutations:{

        addComponent(state,props){

            const newComponent:ComponentData={


                id:uuidv4(),
                name:'l-text',
                props:props

            }

           state.components.push(newComponent)

          

    
        },

        deleteComponent(state,props){


            const currentComponent=state.components.find((component)=>component.id===props)
            if(currentComponent){

               // const currentIndex=state.components.findIndex((component)=>component.id===props)

                state.components=state.components.filter(component =>component.id !== props)
            }

        },

        setActive(state,props:string){


            state.currentElement=props



        }

    },
    getters:{

        getCurrentElement:(state)=>{

            return state.components.find(component=>component.id===state.currentElement)

        }

    }
}

export default editor





