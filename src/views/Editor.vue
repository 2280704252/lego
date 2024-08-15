<template>

    <pre>{{route}}</pre>     
    
    <a-layout>
        <a-layout-header :style="headerStyle" class="header">Lego</a-layout-header>
        <a-layout>
            <a-layout-sider :style="siderStyle" class="sider" width="320px">
                <a-tabs v-model:activeKey="activeKey" centered >
                    <a-tab-pane key="1" tab="文本" >
                        
                        <div>
                            <a-button type="text" class="large-title" size="large" >大标题</a-button>
                        </div>
                        
                        <div>
                            <a-button type="text">楷体副标题</a-button>
                        </div>
                        <div>
                            <a-button type="text">正文内容</a-button>
                        </div>

                        <div>
                            <a-button type="text">宋体正文内容</a-button>
                        </div>
                        <div>
                            <a-button type="text">链接内容</a-button>
                        </div>

                        <div>
                            <a-button type="text">按钮内容</a-button>
                        </div>
                        
                        
                        
                        </a-tab-pane>
                    <a-tab-pane key="2" tab="图片" force-render>Content of Tab Pane 2</a-tab-pane>
                    <a-tab-pane key="3" tab="形状">Content of Tab Pane 3</a-tab-pane>
                </a-tabs>

                
            </a-layout-sider>

            <a-layout-content :style="contentStyle">Content</a-layout-content>

            <a-layout-sider :style="siderStyle" class="sider" width="320px">
                
                
                <a-tabs v-model:activeKey="editPage" centered >
                    <a-tab-pane key="1" tab="属性设置">
                        <a-collapse v-model:activeKey="collapseKey" :bordered="false">

                            <a-collapse-panel key="1" header="基本属性">


                                <div>文本:
                                      <a-textarea v-model:value="values" placeholder="Basic usage" :rows="4" style="width:85%"/>
                                </div>
                                <br/>
                                <div>字号:
                                    
                                    <a-select
                                        v-model:value="value"
                                        
                                        style="width:25%"
                                        placeholder="Tags Mode"
                                        :options="options"
                                        @change="handleChange"
                                    ></a-select>


                        
                                </div>
                                <br/>

                                <div>
                                    <a-radio-group v-model:value="value1" button-style="solid" >
                                        <a-radio-button value="a" >常规</a-radio-button>
                                        <a-radio-button value="b">粗体</a-radio-button>
                                        <a-radio-button value="c">斜体</a-radio-button>
                                    </a-radio-group>
                                </div>
                                <br/>
                                <div>行高：

                                    <a-slider id="test" v-model:value="sliderValue" style="width:100%"/>
                                </div>
                                <div>对其：

                                    <a-radio-group v-model:value="lineValue">
                                        <a-radio-button value="a" style="margin:5px">左</a-radio-button>
                                        <a-radio-button value="b" >中</a-radio-button>
                                        <a-radio-button value="c" style="margin:5px">右</a-radio-button>
                                    </a-radio-group>
                                </div>
                                <div>文字颜色：
                                    <color-picker v-model="textColor" @change="handleChangeColor"/>

                                </div>
                                <br/>
                    
                                <div>背景颜色：

                                    <color-picker v-model:pureColor="backgroundColor"/>

                                </div>



                            </a-collapse-panel>

                            <a-collapse-panel key="2" header="尺寸">
                            <p>{{ text }}</p>
                            </a-collapse-panel>

                            <a-collapse-panel key="3" header="边框" >
                            <p>{{ text }}</p>
                            </a-collapse-panel>

                            <a-collapse-panel key="4" header="阴影与透明度" >
                            <p>{{ text }}</p>
                            </a-collapse-panel>
                        </a-collapse>

                    </a-tab-pane>
                    <a-tab-pane key="2" tab="图层设置"></a-tab-pane>
                    <a-tab-pane key="3" tab="页面设置"></a-tab-pane>
                </a-tabs>
                
                
                </a-layout-sider>
        </a-layout>
        <a-layout-footer :style="footerStyle" class="footer">© 版权所有 | 津ICP备20000929号-2</a-layout-footer>
    </a-layout>


</template>

<script lang="ts" setup>

import {ref,watch} from 'vue'
import { ColorInputWithoutInstance } from "tinycolor2";


import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker';

import {useRoute} from 'vue-router'


const activeKey=ref('1')

const editPage=ref('1')

const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const collapseKey = ref(['1']);

const value=ref<string>('')

const value1=ref('a')

const sliderValue=ref<number>(0)

const lineValue=ref<string>('a')



const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const values = ref([]);
const options = [...Array(10)].map((_, i) => ({ value:   (i + 1)+"号" }));

const textColor = ref('#ff0000')
const backgroundColor =ref("#ffd700")
const handleChangeColor = (e) => {
//   console.log(`颜色值改变事件：${e}`)

//   console.log("e",e)
    backgroundColor.value=e

}


const pureColor = ref<ColorInputWithoutInstance>("red");



const route=useRoute()

watch(collapseKey, val => {
  console.log(val);
});


</script>




<style scoped>

.header{
    color: #fff;
    background: rgb(13, 149, 212);
    font-size: 50px;
}

.text{

    text-align: center;
}

.sider{
    margin: 10px;
    background: #fff;
    height: 650px;

}

.footer{

    text-align: center;
}


.large-title{

    font-size: xx-large;
    margin-left: 80px;
    
}



</style>