<script lang="ts" setup name="framework-notice">
import classNames from 'classnames';
import { BellOutlined } from '@ant-design/icons-vue';
import { useFrameworkContext } from '../../hooks/useFrameworkContext';

const context = useFrameworkContext();

const baseClass = computed(() => classNames(`${context.prefix}-header-notice`));
</script>

<template>
  <a-popover trigger="click">
    <template #content>
      <div>123</div>
    </template>
    <a-badge count="3"
             :offset="[-10, 10]">
      <div :class="baseClass">
        <BellOutlined :class="classNames(`${baseClass}-icon`)" />
      </div>
    </a-badge>
  </a-popover>
</template>

<style lang="less">
@import "../../../../../design/theme/theme-default";
@import "../../framework";
@component-class-name: ~'@{framework-namespace}-header-notice';

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
