
<template>

    <div>
        <div v-for="(value,key) in finalProps" :key="key"
        class="prop-item"
        >

     
            <span v-if="value.text" class="lable">{{value.text}}</span>
            <component v-if="value" :is="value.component" :[value.valueProp]="value.value"
            :value="value.value" 
            v-bind="value.extraProps" 
             v-on="value.events"
            class="prop-component">
            
            
            <template v-if="value.options">
                <component :is="value.subComponent" 
                            v-for="(option,k) in value.options"
                            :key="k"
                            v-bind="option"
                          
                           
                
                >
                {{option.text}}
              
               
                </component>



            </template>
            
            
            
            
            </component>

        
        </div>
    </div>
</template>


<script lang="ts">
import { reduce, result } from 'lodash-es'
import { computed, defineComponent, PropType } from 'vue'
import { TextComponentProps } from '../defaultProps'

import {mapPropsToForms, PropsToForms} from '../propsMap'



interface FormProps{
    component: string;
    subComponent?: string;
    value: string;
    extraProps?: { [key: string]: any };

    options?: { text: string , value: any }[];
    valueProp: string;
    eventName: string;
    
    events: { [key: string]: (e: any) => void };


}

export default defineComponent({


    props:{
        props:{
            type:Object as PropType<TextComponentProps>
        }
    },

    emits:['change'],
    setup(props,context) {

        const finalProps =computed(()=>{

            return reduce(props.props,(result,value,key)=>{
                const newKey= key as keyof TextComponentProps
                const item=mapPropsToForms[newKey]

                if(item){
                    const { valueProp = 'value', eventName = 'change', initalTransform, afterTransform } = item


                    const newItem: FormProps = {
                        ...item,
                        value: initalTransform ? initalTransform(value) : value,
                        valueProp,
                        eventName,
                        events: {
                        [eventName]: (e: any) => { context.emit('change', { key, value: afterTransform? afterTransform(e) : e })}
                        }
                    }

                    result[newKey]=newItem
                }

                return result
            },{} as PropsToForms)
        })


        return{

            finalProps
        }

     


        
    },
})
</script>

<style scoped>

.prop-item{


    display:flex;
    margin-bottom: 10px;
    align-items: center;
}



.lable{
    width: 22%;
}
.prop-component{

    width: 78%;
}
</style>





