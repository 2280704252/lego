<template>
    <a-row>
        <a-col :span=12>
            <div class="img-view">
                <a-card>
                    <template #cover >   
                            <img  alt="example" src="https://sns-webpic-qc.xhscdn.com/202408131534/de3652d4d3e75c9cf54ae9b879a9eb12/1000g0082qd9jne4ji00g5nm03dug8dg8o52ijjo!nd_dft_wlteh_webp_3" />
                    </template>
                </a-card>
            
            </div>
        </a-col>

        <a-col :span=12 style="margin-top:20px">
            

            <a-row><h1>喜欢从来不是类型而是感觉</h1></a-row>
            <a-row><h2>#把生活拍出电影感 #情绪写真 #氛围感 #广州约拍 #夜景人像</h2></a-row>
            <a-row><h3>作者：kk</h3></a-row>


            <a-row>
                <div style="margin:20px">
                    <a-qrcode :value="text"/>
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


<script setup>

import {useRoute} from 'vue-router' 

import {ref} from 'vue'

const text=ref('https://sns-webpic-qc.xhscdn.com/202408131534/de3652d4d3e75c9cf54ae9b879a9eb12/1000g0082qd9jne4ji00g5nm03dug8dg8o52ijjo!nd_dft_wlteh_webp_3')


const route=useRoute()


</script>


<style scoped>

.img-view{

    width: 450px;
    margin-top: 20px;
    margin-left: 80px;
   
}





</style>