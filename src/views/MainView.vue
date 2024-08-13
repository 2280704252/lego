<template>
  <div class="homepage-container">
    <a-layout :style="{background: ''}">
      <a-layout-header class="header" >
        <div class="page-title">
          <router-link to="/">首页</router-link>
        </div>
        <div class="page-title">
          <router-link to="/about">关于</router-link>
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
<script lang="ts" setup>

import type { CSSProperties } from 'vue';
const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
  

};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};


const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
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
