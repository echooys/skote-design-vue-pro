<script lang="ts" setup name="framework-maga-menu">
  import classNames from 'classnames';
  import { DownOutlined } from '@ant-design/icons-vue';
  import { useFrameworkContext } from '../../hooks/useFrameworkContext';

  const context = useFrameworkContext();

  const baseClass = computed(() => classNames(`${context.prefix}-header-maga-menu`));
</script>
<template>
  <a-popover trigger="click">
    <template #content>
      <p>Content</p>
      <p>Content</p>
    </template>
    <div :class="baseClass">
      <span :class="`${baseClass}-text`">超级菜单</span>
      <DownOutlined :class="`${baseClass}-icon`" />
    </div>
  </a-popover>
</template>

<style lang="less">
  @import "../../framework";
  @component-class-name: ~'@{framework-namespace}-header-maga-menu';
  .@{component-class-name}{
    height:@framework-header-search-height;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding:0 12px;
    &-text{
      font-size:12px;
      margin-right: 5px;
    }
    &-icon{
      font-size:10px;
    }
  }
</style>
