<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">设置</g-button>
        <g-button icon="download" icon-position="right">下载</g-button>
        <g-button :load="true">登录中</g-button>
    </div>
</template>

<script>
    import Button from '../../../scripts/button/button'
    import ButtonGroup from '../../../scripts/button/button-group'

    export default {
        components: {
            'g-button': Button,
            'g-button-group': ButtonGroup
        }
    }
</script>
