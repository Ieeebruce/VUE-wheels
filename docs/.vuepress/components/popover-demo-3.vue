<template>
    <div>
        <g-popover>
            <template slot="content" slot-scope="{close}"> 弹出内容
                <g-button @click="close">关闭</g-button>
            </template>
            <g-button>内部关闭</g-button>
        </g-popover>
    </div>
</template>

<script>
    import Popover from '../../../scripts/popover'
    import Button from '../../../scripts/button/button'

    export default {
        components: {
            'g-popover': Popover,
            'g-button': Button
        }
    }
</script>