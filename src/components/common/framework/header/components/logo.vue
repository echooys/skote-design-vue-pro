<script lang="ts" setup name="framework-logo">
import classNames from 'classnames';
import { useFrameworkContext } from '../../hooks/useFrameworkContext';

const context = useFrameworkContext();

const prefix = computed(() => `${context.prefix}-header-logo`);

const collapsed = computed(() => (context.layout === 'horizontal' ? false : context.collapsed));


console.log(context.layout);


const logoTheme = computed(() =>
    context.layout === 'vertical' ? context.theme : context.headerTheme,
);
const baseClass = computed(() =>
    classNames(prefix.value, logoTheme.value, {
        collapsed: collapsed.value,
    }),
);

</script>

<template>
    <div :class="baseClass">
        <a href="#"
           v-if="logoTheme === 'light'"
           :class="classNames(`${prefix}-${logoTheme}`)">
            <span v-if="collapsed">
                <img src="../../../../../assets/logo.svg" />
            </span>
            <span v-else>
                <img src="../../../../../assets/logo-dark.png" />
            </span>
        </a>
        <a href="#"
           v-else
           :class="classNames(`${prefix}-${logoTheme}`)">
            <span v-if="collapsed">
                <img src="../../../../../assets/logo-light.svg" />
            </span>
            <span v-else>
                <img src="../../../../../assets/logo-light.png" />
            </span>
        </a>
    </div>
</template>

<style lang="less">
@import '../../../../../design/theme/theme-default';
@import '../../framework';
@component-class-name: ~'@{framework-namespace}-header-logo';

.@{component-class-name} {
    width: @framework-sider-width;
    height: @framework-header-height;
    padding: 0 calc(@framework-sider-collapsed-width / 2 / 2);

    &.collapsed {
        width: @framework-sider-collapsed-width;
    }

    &.dark {
        background-color: @layout-header-background;
    }

    &.light {
        background-color: @component-background;
    }

    &.primary {
        background-color: @primary-color;
    }

    a {
        display: flex;
        height: @framework-header-height;
        line-height: @framework-header-height;
        justify-content: center;
        align-items: center;
    }

    img {
        height: calc(@framework-header-height / 2);
        vertical-align: middle;
    }
}
</style>
