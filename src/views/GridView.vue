<template>
  <a-row :gutter= "[16,24]" class="row-position">
    <a-col :span="8" v-for ="item in list" :key="item.id" class="poster-item"><div >

        <router-link :to="{name:'template',params:{postId:item.id}}">
​        <a-card hoverable style="width: 240px">
            <template #cover>
                <img alt="example" :src="item.coverImg" />

                <!-- <div class="hover-item">
                    <a-button size="large" type="primary">使用该模版创建</a-button>
                </div> -->
            </template>
            <a-card-meta :title="item.title">
            <template #description>

                <span>作者：{{item.author}}</span>
            </template>
            </a-card-meta>
        </a-card>
        </router-link>


​     </div></a-col>
 
​    
</a-row>



</template>


<script lang="ts" >
import { defineComponent, onMounted, PropType, ref } from 'vue';

import {TemplateProps} from '../sotre/index'

import {useRouter} from 'vue-router'

export default defineComponent({
    name:'template-list',
    props:{

        list:{
            type:Array as PropType<TemplateProps[]>,
            require:true
        }
    }

})
    const visible = ref(false);
    const hoverBoolean=ref(false)


    const useTemplate=()=>{

        hoverBoolean.value=!hoverBoolean.value
        console.log(hoverBoolean.value)
    }

    const router=useRouter()




    // router.push({name:'template',params:{ postId: 1}})

</script>


<style>

.poster-item{

    position: relative;
}


.grid-box {
  opacity: 1;

  color: #fff;
  text-align: center;
  padding:10px 0px;
}

.row-position{

    padding-top: 1%;

    padding:10px;
}


.card-style{
   width: 250px;

    margin-left: 50px;
}

.hover-item{

  position:absolute;
  margin-left: 20%;
  margin-top: 60%;
  left: 0;
  top: 0;
  width: 0%;
  height: 0%;
  display: none;
  background: rgba(0, 0, 0, .8);
  align-items: center;
  justify-content: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
</style>
