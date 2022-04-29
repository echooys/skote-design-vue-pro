<script lang='ts' setup name='framework-full-screen'>
  import classNames from 'classnames';
  import { ExpandOutlined,CompressOutlined } from '@ant-design/icons-vue';
  import { useFrameworkContext } from '../../hooks/useFrameworkContext';

  const context = useFrameworkContext();
  const { isFullscreen, enter, exit, toggle } = useFullscreen()

  const baseClass = computed(() => classNames(`${context.prefix}-header-full-screen`));
</script>

<template>
  <div :class='baseClass' @click='toggle'>
    <CompressOutlined v-if='isFullscreen' :class='classNames(`${baseClass}-icon`)' />
    <ExpandOutlined v-else :class='classNames(`${baseClass}-icon`)'/>
  </div>
</template>

<style lang='less'>
  @import "../../../../../design/theme/theme-default";
  @import "../../framework";

  @component-class-name: ~'@{framework-namespace}-header-full-screen';
  .@{component-class-name} {
    height: @framework-header-search-height;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 14px;
    cursor: pointer;

    &-icon {
      font-size: 18px;
    }
  }
</style>
