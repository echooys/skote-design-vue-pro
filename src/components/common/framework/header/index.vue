<script lang="ts" setup name="framework-header">
import classNames from 'classnames'
import { useFrameworkContext } from '../hooks/useFrameworkContext'
import Logo from './components/logo.vue'
import Trigger from './components/trigger.vue'
import Search from './components/search.vue'
import MagaMenu from './components/maga-menu.vue'
import Profile from './components/profile.vue'
import Notice from './components/notice.vue'
import Shortcut from './components/shortcut.vue'
import FullScreen from './components/full-screen.vue'
import LangSelect from './components/lang-select.vue'

const context = useFrameworkContext()

const prefix = computed(() => `${context.prefix}-header`)

const baseClass = computed(() =>
  classNames(prefix.value, context.headerTheme, context.contentWidth, {
    fixeder: context.fixedHeader,
  })
)

const containerClass = computed(() =>
  classNames(
    `${prefix.value}-container`,
    'flex',
    'flex-row',
    'justify-between',
    {
      [`${context.contentWidth}`]: context.layout !== 'vertical',
    }
  )
)
</script>

<template>
  <header :class="baseClass">
    <div :class="containerClass">
      <div class="flex flex-row items-center">
        <Logo v-if="!context.media" />
        <Trigger v-if="context.layout === 'vertical'" />
        <Search />
        <MagaMenu v-if="!context.media" />
      </div>
      <div class="flex flex-row items-center">
        <LangSelect />
        <Shortcut />
        <FullScreen v-if="!context.media" />
        <Notice />
        <Profile />
      </div>
    </div>
  </header>
</template>

<style lang="less">
@import '../../../../design/theme/theme-default';
@import '../framework';

@component-class-name: ~'@{framework-namespace}-header';

.@{component-class-name} {
  width: 100%;
  height: @framework-header-height;
  padding: 0;

  &-container {
    width: 100%;
    height: @framework-header-height;
    margin: 0 auto;
    padding: 0 12px 0 0;
    box-shadow: 0 10px 12px rgb(18 38 63 / 3%);
  }

  &.dark {
    .@{component-class-name} {
      &-container {
        background-color: @layout-header-background;
        color: @text-color-dark;
      }
    }
  }

  &.light {
    .@{component-class-name} {
      &-container {
        background-color: @component-background;
        color: @text-color;
      }
    }
  }

  &.primary {
    .@{component-class-name} {
      &-container {
        background-color: @primary-color;
        color: @text-color-dark;

        // bradge 会覆盖icon的字体颜色
        .anticon {
          color: @text-color-dark;
        }
      }
    }
  }

  &.fixeder {
    .@{component-class-name}-container {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: @framework-header-index;
    }
  }
}
</style>
