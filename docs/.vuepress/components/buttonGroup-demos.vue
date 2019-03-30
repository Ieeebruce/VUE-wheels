<template>
    <div>
        <g-button-group>
            <g-button icon="left" icon-position="left">上一页</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
    </div>
</template>

<script>
    import Button from '../../../scripts/button/button'
    import ButtonGroup from '../../../scripts/button/button-group'
    import Icon from '../../../scripts/button/icon'

    export default {
        components: {
            'g-button': Button,
            'g-button-group': ButtonGroup
        }
    }
</script>