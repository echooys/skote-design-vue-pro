<template>
  <div class='test'>
    <a-alert content='ok'>ssss</a-alert>
    <a-button type='primary' @click='()=>changeBaseTheme("theme-default")'>default</a-button>
    <a-button type='primary' @click='()=>changeBaseTheme("theme-default-dark")'>default-dark</a-button>
    <a-button type='primary' @click='()=>changeBaseTheme("theme-skote")'>skote</a-button>
    <a-button type='primary' @click='()=>changeBaseTheme("theme-skote-dark")'>skote-dark</a-button>
    <a-button type='danger'>text</a-button>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang='ts' setup>
  import { message } from 'ant-design-vue';
  import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
  const activeKey = ref('1')

  const changeBaseTheme = (scopeName:string)=>{
    toggleTheme({
      scopeName: scopeName,
      // 可选，link的href处理，看情况用， 当启用 themePreprocessorPlugin 的 extract后才需要
      customLinkHref: (href) => href,
      // 可选，默认对应 themePreprocessorPlugin 的 themeLinkTagId
      themeLinkTagId: "theme-link-tag",
      // 可选 "head" || "body"
      themeLinkTagInjectTo: "head",
      // 可选，对应 themePreprocessorPlugin 的 multipleScopeVars
      // multipleScopeVars
    });
  }
  message.success('ok')
</script>
<style lang='less'>
  .test{
    padding:100px;
  }
</style>
