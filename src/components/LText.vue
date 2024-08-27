<template>
    <component :is="tag" :style="styleProps" class="l-text-component">{{text}}</component>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'

import {pick} from 'lodash-es'

import {textDefaultProps,transformToComponentProps} from '../defaultProps'

import {textStylePropNames} from '../defaultProps'

const defaultProps=transformToComponentProps(textDefaultProps)




export default defineComponent({


    props:{
        tag:{     
            type:String,
            default:'div'
        },
        ...defaultProps
    },
    setup(props) {

        const styleProps=computed(()=>pick(props,textStylePropNames))

        onMounted(()=>{


            console.log(styleProps.value)
        })
        return{

            styleProps
        }
        
    },
})
</script>


<style scoped>
.l-text-component{


    box-sizing: border-box;
    white-space: pre-wrap;
    position: relative !important;
}




</style>
