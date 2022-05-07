<script lang="ts" setup name="framework">
import classNames from 'classnames'
import { useDesign } from './hooks/useDesign'
import FrameworkSider from './sider/index.vue'
import FrameworkHeader from './header/index.vue'
import FrameworkContent from './content/index.vue'
import FrameworkFooter from './footer/index.vue'
import { createFrameworkProviderContext } from './hooks/useFrameworkContext'

interface FrameWorkProps {
  layout?: 'vertical' | 'horizontal' | 'mix'
  theme?: 'dark' | 'light' | 'primary'
  fixed?: boolean
  collapsed?: boolean
  fixedHeader?: boolean
  headerTheme?: 'dark' | 'light' | 'primary'
  contentWidth?: 'fluid' | 'fixed'
}

const props = withDefaults(defineProps<FrameWorkProps>(), {
  layout: 'vertical',
  theme: 'dark',
  fixed: true,
  collapsed: true,
  fixedHeader: true,
  headerTheme: 'light',
  contentWidth: 'fluid',
})

const { prefix } = useDesign('framework')

const scope = effectScope()
// mobile
const isMobileScreen = useMediaQuery('(max-width: 768px)')

const state = reactive({
  ...toRaw(props),
  prefix,
  media: unref(isMobileScreen),
})

const contextState = computed(() => ({
  ...toRefs(state),
  handleToggleCollapsed,
}))

scope.run(() => {
  watchEffect(() => {
    state.media = isMobileScreen.value
  })
})

const handleToggleCollapsed = (collapsed: boolean) => {
  state.collapsed = collapsed
}

createFrameworkProviderContext(contextState.value)

onUnmounted(() => {
  scope.stop()
})
</script>

<template>
  <section :class="classNames(prefix, 'flex', 'flex-col')">
    <framework-header />
    <section :class="classNames(prefix, 'flex', 'flex-row', 'flex-1')">
      <framework-sider />
      <section :class="classNames(prefix, 'flex', 'flex-col', 'flex-1')">
        <framework-content />
        <framework-footer />
      </section>
    </section>
  </section>
</template>
<style lang="less">
@import './framework.less';

@component-class-name: ~'@{framework-namespace}';

.@{component-class-name} {
  height: 100%;
}
</style>
