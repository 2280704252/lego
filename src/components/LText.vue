<template>
    <component :is="tag" :style="styleProps">{{text}}</component>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'

import {pick} from 'lodash-es'



export default defineComponent({


    props:{

        text:{

            type:String
        },
        fontSize:{

            type:String
        },
        tag:{

            
            type:String,
            default:'div'
           
        }
    },
    setup(props) {

        const styleProps=computed(()=>pick(props,["fontSize"]))

        onMounted(()=>{


            console.log(styleProps.value.text)
        })
        return{

            styleProps
        }
        
    },
})
</script>
