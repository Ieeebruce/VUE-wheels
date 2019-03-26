<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "gulu-tabsBody",
        inject: ['eventBus'],
        created(){
        }
    }
</script>
<style scoped>
    .tabs-body {}
</style>