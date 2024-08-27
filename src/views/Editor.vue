<template>

         
    
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

            <a-layout-content class="text-container" >

                <!-- <div v-for="component in content" :key="component.id" class="body-container">
                    {{component.props.text}}
                    {{component.name}}
                </div> -->



                <div class="body-container">

                    <component  v-for="component in content" :key="component.id"  :is="component.name" v-bind="component.props"/>
                    
                </div>



            </a-layout-content>

            <a-layout-sider  class="sider" width="320px">
                
                
                <a-tabs v-model:activeKey="editPage" centered >
                    <a-tab-pane key="1" tab="属性设置">
                        <a-collapse v-model:activeKey="collapseKey" :bordered="false">
                            <a-collapse-panel key="1" header="基本属性">
                                <div>文本:
                                      <a-textarea v-model:value="textValue" placeholder="Basic usage" :rows="4" style="width:85%"/>
                                </div>
                                <br/>
                                <div>字号:
                                    
                                    <a-select
                                        v-model:value="font"
                                        style="width:25%"
                                        placeholder="Tags Mode"
                                        :options="options"
                                        @change="handleFont"
                                    ></a-select>
                                </div>
                                <br/>

                                <div>
                                    <a-radio-group v-model:value="typeFace" button-style="solid" >
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
                                    <color-picker v-model="textColor" @change="handleTextColor"/>

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

<script lang="ts" >

import {computed, defineComponent, onMounted, ref,watch} from 'vue'
import { ColorInputWithoutInstance } from "tinycolor2";


import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker';

import {useRoute} from 'vue-router'

import {useStore} from 'vuex'

import {GlobalDataProps} from '../sotre/index'


import LText from '../components/LText.vue';


export default defineComponent({



    components:{


      LText
    },
    setup(){



        //右边栏选中页面
        const activeKey=ref('1')

        //编辑页选中页面
        const editPage=ref('1')

        //文本框内容
        const textValue = ref([]);

        //侧边子属性测试数据
        const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
        
        //侧边子属性展开
        const collapseKey = ref(['1']);

        //字体大小
        const font=ref<string>('5')

        //字体样式
        const typeFace=ref('a')

        //行高
        const sliderValue=ref<number>(0)

        //字体为你
        const lineValue=ref<string>('a')


        //改变字体大小
        const handleFont = (value: string) => {
            console.log(`selected ${value}`);
        };
        //提供可选择字体大小
        const options = [...Array(10)].map((_, i) => ({ value:   (i + 1)+"号" }));


        //文本的颜色
        const textColor = ref('#ff0000')

        //背景颜色
        const backgroundColor =ref("#ffd700")

        //改变文字颜色
        const handleTextColor = (e) => {
            textColor.value=e
        }



        //
        const pureColor = ref<ColorInputWithoutInstance>("red");



        const route=useRoute()

        watch(collapseKey, val => {
        console.log(val);
        });




        const store=useStore<GlobalDataProps>()

        const content=computed(()=>store.state.editor.components)


        return{

            activeKey,
            content,
            editPage,
            textValue,
            font,
            collapseKey,

            text,
            typeFace,
            sliderValue,
            lineValue,
            options,
            textColor,
            pureColor,


            handleFont,
            handleTextColor



            




        }
    }
})











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

.text-container{
    padding-top: 10px;





}

.body-container {

  padding-top: 1px;
  padding: 10px;
  margin: 0;
  min-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #fff;
}



</style>