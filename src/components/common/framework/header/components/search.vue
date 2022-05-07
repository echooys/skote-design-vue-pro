<script lang="ts" setup name="framework-trigger">
import classNames from 'classnames'
import { SearchOutlined } from '@ant-design/icons-vue'
import { useFrameworkContext } from '../../hooks/useFrameworkContext'

const context = useFrameworkContext()
const visible = ref(false)
const value = ref('')
const prefix = computed(() => `${context.prefix}-header-search`)
const handleToggleSearch = () => {
  visible.value = true
}
</script>

<template>
  <div :class="prefix">
    <a-input
      v-if="!context.media"
      v-model:value="value"
      :class="`${prefix}-input`"
      placeholder="Search..."
    >
      <template #prefix>
        <SearchOutlined />
      </template>
    </a-input>
    <div
      v-else
      :class="
        classNames(
          `${prefix}-mobile-icon`,
          'flex',
          'items-center',
          'justify-center'
        )
      "
    >
      <SearchOutlined @click="handleToggleSearch" />
    </div>
  </div>
  <a-modal
    v-model:visible="visible"
    :footer="null"
    :class="`${prefix}-modal`"
    title="Search"
  >
    <div :class="prefix" style="width: 100%">
      <a-input
        v-model:value="value"
        :class="`${prefix}-input`"
        placeholder="Search..."
      >
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
    </div>
  </a-modal>
</template>

<style lang="less">
@import '../../../../../design/theme/theme-default';
@import '../../framework';

@component-class-name: ~'@{framework-namespace}-header-search';

.@{component-class-name} {
  height: @framework-header-height;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &-input {
    height: @framework-header-search-height;
    background-color: @background-color-base;
    border-radius: calc(@framework-header-search-height / 2);
    border: none !important;
    box-shadow: none !important;

    .@{ant-prefix}-input {
      background-color: transparent;
    }
  }

  &-mobile-icon {
    width: @framework-header-height;
    height: @framework-header-height;
    font-size: 18px;
  }

  &-modal {
    top: @framework-header-height+10px;
  }
}
</style>
