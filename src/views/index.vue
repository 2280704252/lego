<template>
    <div class="content-container">
    <a-row :gutter="16">
        <template-list :list="testData"></template-list>
    </a-row>


    
    </div>

</template>

<script lang="ts">
import { format } from 'path'
import { defineComponent } from 'vue'
import { computed } from 'vue'

import {useStore} from 'vuex'

import {GlobalDataProps} from '../sotre/index'


import TemplateList from './GridView.vue'


export default defineComponent({

    components:{
        TemplateList

    },
    setup() {

        const store = useStore<GlobalDataProps>()
        const testData =computed(()=> store.state.templates.data)

        return{
            testData


        
        }
        
    }

  
})
</script>




<style>
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>