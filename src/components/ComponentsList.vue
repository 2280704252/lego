<template>
    <div v-for="(item, index) in list" :key="index" class="component-item" @click="onItemClick(item)">
        <l-text  v-bind="item" ></l-text>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import LText from '../components/LText.vue'

import {GlobalDataProps} from '../sotre/index'



export default defineComponent({

    name:'components-list',

    emits:['onItemClick'],

    props:{
        list:{
            type:Array,
            required:true
        }
    },

    components:{

        LText

    },
    setup(props,context) {


        const store=useStore<GlobalDataProps>()

        

        const onItemClick=(data:any)=>{


            //提交事件
            context.emit('onItemClick',data)

            //越过edito提交事件
            //store.commit('addComponent',data)

        }

        return{


            onItemClick
        }
        
    },
})
</script>

<style scoped>
.component-item {
  width: 100px;
  margin: 0 auto;
  margin-bottom: 15px;
}
.component-item > * {
  position: static !important;
}
</style>
