<script lang="ts" setup name="framework-profile">
  import classNames from 'classnames';
  import { DownOutlined } from '@ant-design/icons-vue';
  import { useFrameworkContext } from '../../hooks/useFrameworkContext';

  const context = useFrameworkContext();

  const baseClass = computed(() => classNames(`${context.prefix}-header-profile`));
</script>

<template>
  <a-popover trigger="click">
    <template #content>
      <div>123</div>
    </template>
    <div :class="baseClass">
      <a-avatar
        :class="classNames(`${baseClass}-avatar`)"
        src="https://themesbrand.com/skote-symfony/layouts/assets/images/users/avatar-1.jpg"
      />
      <span :class="classNames(`${baseClass}-text`)">Skote</span>
      <DownOutlined :class="classNames(`${baseClass}-icon`)" />
    </div>
  </a-popover>
</template>

<style lang="less">

  @import "../../../../../design/theme/theme-default";
  @import "../../framework";
  @component-class-name: ~'@{framework-namespace}-header-profile';
  .@{component-class-name}{
    height:@framework-header-search-height;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding:0 14px;
    cursor: pointer;
    &-avatar{
        width:@framework-header-search-height/2;
        height:@framework-header-search-height/2;
    }
    &-text{
        margin-left: 8px;
        font-size:14px;
    }
    &-icon{
        margin-left: 5px;
        font-size:8px;
    }
  }
</style>
