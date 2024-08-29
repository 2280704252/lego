<template>
    <div @click="setActiveOnClick(id)" class="edit-wrapper" :class="{active: active}">
        <slot></slot>
    </div>
</template>


<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
    props:{

        id:{

            type:String,
            required:true
        },
        active:{

            type:Boolean,
            required:true
        }

    },

    emits:['setActive'],

    setup(props,context){

        const setActiveOnClick=(id:string)=>{

            context.emit('setActive',id)

        }
        return{

            setActiveOnClick
        }
    }


})



</script>

<style scoped>

.edit-wrapper{

    padding: 0px;
    cursor:pointer;
    border:1px solid transparent;
    user-select: none;
}
.edit-wrapper:hover{
    border: 1px dashed #ccc;
}

.active{
    border: 1px solid #1890ff;
    user-select: none;
    z-index: 1500;
}





</style>