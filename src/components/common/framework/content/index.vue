<script lang="ts" setup name="framework-content">
import classNames from 'classnames';
import { useFrameworkContext } from '../hooks/useFrameworkContext';

const context = useFrameworkContext();

const baseClass = computed(() => classNames(`${context.prefix}-content`, {
    [`${context.contentWidth}`]: context.layout !== 'vertical'
}));


</script>
<template>
    <main :class="baseClass">
        <router-view />
    </main>
</template>
<style lang="less">
@import "../../../../design/theme/theme-default";
@import "../framework";

@component-class-name: ~'@{framework-namespace}-content';

.@{component-class-name} {}
</style>