<template>

<a-row :gutter= "[16,24]" class="row-position">
    <a-col :span="8" class="poster-item"><div class ="grid-box">


       

        <a-card  hoverable  class="card-style" style="height:500px">
            <template #cover>
                <img src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" alt="example">

            </template>

            <a-card-meta title="HHH">

                <template #description>abcdefg</template>
            </a-card-meta>

        </a-card>


     </div></a-col>

    <a-col :span="8"><div class ="grid-box">

        <a-card hoverable class="card-style" style="height:500px" }>

            <template #cover>
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" @click="useTemplate"/>
                <div class=".hover-item" >
                    <a-button  type="primary" >使用该模版</a-button>
                </div>
            </template>


            <a-card-meta title="Europe Street beat">
                <template #description>www.instagram.com</template>
            </a-card-meta>



        </a-card>

        
        
        
        
        </div></a-col>
    <a-col :span="8"><div class ="grid-box">
        
        

        <a-card hoverable class="card-style" style="height:500px">
            <template #cover>
                <img alt="example" src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"/>
            </template>

            <a-card-meta title="xxx">
                <template #description>xxxxxxxx</template>
            </a-card-meta>




        </a-card>
       
        
        
        </div></a-col>
    
</a-row>



</template>


<script lang="ts" setup>
import { onMounted, ref } from 'vue';
const visible = ref(false);


const hoverBoolean=ref(false)


const useTemplate=()=>{

    hoverBoolean.value=!hoverBoolean.value
    console.log(hoverBoolean.value)
}

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

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  background: rgba(0, 0, 0, .8);
  align-items: center;
  justify-content: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
</style>
