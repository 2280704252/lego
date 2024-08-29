<template>
    <component :is="tag" :style="styleProps" class="l-text-component" @click="handleClick">{{text}}</component>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'

import {pick} from 'lodash-es'

import {textDefaultProps,transformToComponentProps} from '../defaultProps'

import {textStylePropNames} from '../defaultProps'

import useComponentCommon from '../hooks/useComponentCommon'

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

        const {styleProps,handleClick}=useComponentCommon(props,textStylePropNames)

        onMounted(()=>{


            console.log(styleProps.value)
        })
        return{

            styleProps,
            handleClick
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
