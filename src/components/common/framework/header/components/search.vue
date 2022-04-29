<script lang='ts' setup name='framework-trigger'>
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { useFrameworkContext } from '../../hooks/useFrameworkContext';

  const context = useFrameworkContext();

  const value = ref('');

  const prefix = computed(() => `${context.prefix}-header-search`);
</script>

<template>
  <div :class='prefix'>
    <a-input v-model:value='value' :class='`${prefix}-input`' placeholder='Search...'>
      <template #prefix>
        <SearchOutlined />
      </template>
    </a-input>
  </div>
</template>

<style lang='less'>
  @import "../../../../../design/theme/theme-default";
  @import "../../framework";

  @component-class-name: ~'@{framework-namespace}-header-search';
  .@{component-class-name} {
    height: @framework-header-search-height;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    &-input {
      width: @framework-header-search-width;
      height: @framework-header-search-height;
      background-color: @background-color-base;
      border-radius: calc(@framework-header-search-height / 2);
      border: none !important;
      box-shadow: none !important;

      .@{ant-prefix}-input {
        background-color: transparent;
      }
    }
  }
</style>
