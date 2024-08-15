<template>
  <a-row :gutter= "[16,24]" class="row-position">
    <a-col :span="8" class="poster-item"><div >

        <router-link to='/template/1'>
​        <a-card hoverable style="width: 240px">
            <template #cover>
                <img alt="example" src="https://sns-webpic-qc.xhscdn.com/202408131534/de3652d4d3e75c9cf54ae9b879a9eb12/1000g0082qd9jne4ji00g5nm03dug8dg8o52ijjo!nd_dft_wlteh_webp_3" />
                <div class="hover-item">
                    <a-button size="large" type="primary">使用该模版创建</a-button>
                </div>
            </template>
            <a-card-meta title="Europe Street beat">
            <template #description>www.instagram.com</template>
            </a-card-meta>
        </a-card>
        </router-link>


​     </div></a-col>

​    <a-col :span="8"><div >

    <router-link to="template/2">

​       <a-card hoverable style="width: 240px">
            <template #cover>
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                <div class="hover-item">
                    <a-button size="large" type="primary">使用该模版创建</a-button>
                </div>
            </template>
            <a-card-meta title="Europe Street beat">
            <template #description>www.instagram.com</template>
            </a-card-meta>
        </a-card>
    </router-link>

​        
​        
​        
​        </div></a-col>
​    <a-col :span="8"><div >
​        
​        <a-card hoverable style="width: 240px">
            <template #cover>
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                <div class="hover-item">
                    <a-button size="large" type="primary">使用该模版创建</a-button>
                </div>
            
            </template>
            <a-card-meta title="Europe Street beat">
            <template #description>www.instagram.com</template>
            </a-card-meta>
        </a-card>

​       
​       
​       
​        
​    </div></a-col>
​    
</a-row>



</template>


<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import {useRouter} from 'vue-router'
const visible = ref(false);


const hoverBoolean=ref(false)


const useTemplate=()=>{

    hoverBoolean.value=!hoverBoolean.value
    console.log(hoverBoolean.value)
}

const router=useRouter()




    router.push({name:'template',params:{ postId: 1}})
    




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
