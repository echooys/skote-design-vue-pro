<script lang="ts" setup name="framework-trigger">
import classNames from 'classnames';
import { MenuOutlined } from '@ant-design/icons-vue';
import { useFrameworkContext } from '../../hooks/useFrameworkContext';

const context = useFrameworkContext();

const baseClass = computed(() => classNames(`${context.prefix}-header-trigger`));


const handleCollapsed = () => {
  context.handleToggleCollapsed?.(!context.collapsed)
}
</script>

<template>
  <div :class="baseClass"
       @click="handleCollapsed">
    <MenuOutlined :class="`${baseClass}-btn`" />
  </div>
</template>

<style lang="less">
@import "../../framework";
@component-class-name: ~'@{framework-namespace}-header-trigger';

.@{component-class-name} {
  width: @framework-header-height;
  height: @framework-header-height;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &-btn {
    font-size: @framework-header-trigger-size;
  }
}
</style>
