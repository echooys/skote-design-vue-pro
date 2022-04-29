<script lang="ts" setup name="framework-sider">
import classNames from 'classnames';
import { siderWidth, siderCollapsedWidth } from '../constant'
import { useFrameworkContext } from '../hooks/useFrameworkContext';
const context = useFrameworkContext();

const prefix = computed(() => `${context.prefix}-sider`);


const baseClass = computed(() => classNames(prefix.value, context.theme, {
    fixeder: context.fixed,
    collapsed: context.collapsed
}))

const containerClass = computed(() => classNames(`${prefix.value}-container`))
</script>
<template>
    <aside :width="siderWidth"
           :collapsedWidth="siderCollapsedWidth"
           :collapsed="context.collapsed"
           :class="baseClass">
        <div :class="containerClass">
            sss
        </div>
    </aside>
</template>

<style lang="less">
@import '../../../../design/theme/theme-default';
@import '../framework';
@component-class-name: ~'@{framework-namespace}-sider';

.@{component-class-name} {
    width: @framework-sider-width;
    height: 100%;

    &-container {
        width: @framework-sider-width;
        height: 100%;
    }

    &.collapsed {
        width: @framework-sider-collapsed-width;

        .@{component-class-name} {
            &-container {
                width: @framework-sider-collapsed-width;
            }
        }
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
        .@{component-class-name}-container {}
    }
}
</style>