<template>
    <a-row>
        <a-col :span=12>
            <div class="img-view">
                <a-card>
                    <template #cover >   
                            <img  alt="example" :src="template.coverImg" />
                    </template>
                </a-card>
            
            </div>
        </a-col>

        <a-col :span=12 style="margin-top:20px">
            

            <a-row><h1>{{template.title}}</h1></a-row>
            <br/>
            <a-row><h3>作者：{{template.author}}</h3></a-row>


            <a-row>
                <div style="margin:20px">
                    <a-qrcode :value="template.coverImg"/>
                </div>
            
            </a-row>
            <a-row><div style="margin-top:10px">
                <a-button type="primary">使用该模版</a-button>
                <a-button style="margin-left:5px">下载该照片</a-button>
                </div>
                
            </a-row>
            


        </a-col>

    </a-row>

</template>


<script lang='ts'>

import {useRoute} from 'vue-router' 

import {computed, defineComponent, ref} from 'vue'

import {useStore} from 'vuex'

import {GlobalDataProps} from '../sotre/index'


export default defineComponent({


    setup(){
        const route=useRoute()
        const store=useStore<GlobalDataProps>()
        const currentId =route.params.postId as string

        const template = computed(()=> store.getters.getTemplateById(parseInt(currentId)))


        return{

            template
        }


    }
    


})












</script>


<style scoped>

.img-view{

    width: 450px;
    margin-top: 20px;
    margin-left: 80px;
   
}





</style>