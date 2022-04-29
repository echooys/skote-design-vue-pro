<script lang="ts" setup name="framework-shortcut">
  import classNames from 'classnames';
  import { AppstoreAddOutlined } from '@ant-design/icons-vue';
  import { useFrameworkContext } from '../../hooks/useFrameworkContext';

  const context = useFrameworkContext();

  const baseClass = computed(() => classNames(`${context.prefix}-header-shortcut`));
</script>

<template>
  <a-popover trigger="click">
    <template #content>
      <div>123</div>
    </template>
    <div :class="baseClass">
      <AppstoreAddOutlined :class="classNames(`${baseClass}-icon`)" />
    </div>
  </a-popover>
</template>

<style lang="less">
  @import "../../../../../design/theme/theme-default";
  @import "../../framework";
  @component-class-name: ~'@{framework-namespace}-header-shortcut';
  .@{component-class-name}{
    height:@framework-header-search-height;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding:0 14px;
    cursor: pointer;
    &-icon{
        font-size:18px;
    }
  }
</style>
