<template>
  <div class="homepage-container">
    <a-layout :style="{background: ''}">
      <a-layout-header class="header" >
        <div class="page-title">
          <router-link to="/"><h1>LEGO</h1></router-link>
        </div>

        <div class="page-title">
          <!-- <a-button type="primary" style="margin-right:20px">登录</a-button> -->
          <user-profile :user="user"/>
          <!-- <a-button type="primary">编辑</a-button> -->
        </div>
      </a-layout-header>


      <a-layout-content class="home-layout">

        

        <router-view></router-view>



        
      </a-layout-content>


    </a-layout>


    <a-layout-footer class="footer">
      © 版权所有 | 津ICP备20000929号-2
    </a-layout-footer>
  </div>
</template>
<script lang='ts'>
import { computed, defineComponent } from 'vue'
import UserProfileVue from '../components/UserProfile.vue'

import UserProfile from '../components/UserProfile.vue'

import {useStore} from 'vuex'
import {GlobalDataProps} from '../sotre/index'

export default defineComponent({
  components:{
    UserProfile
  },
  setup() {

    const store =useStore<GlobalDataProps>()
    const user=computed(()=>store.state.user)

    return{
      user
    }
    
  },
})
</script>



<style>


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.page-title {
  color: #fff;
  
}

.footer{
    text-align: center;
}
</style>
