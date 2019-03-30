<template>
    <div>
        <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">1</g-tabs-item>
                <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">content 1</g-tabs-pane>
                <g-tabs-pane name="2">content 2</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../scripts/tabs/tabs'
    import TabsHead from '../../../scripts/tabs/tabs-head'
    import TabsBody from '../../../scripts/tabs/tabs-body'
    import TabsItem from '../../../scripts/tabs/tabs-item'
    import TabsPane from '../../../scripts/tabs/tabs-pane'

    export default {
        components: {
            'g-tabs': Tabs,
            'g-tabs-head': TabsHead,
            'g-tabs-body': TabsBody,
            'g-tabs-item': TabsItem,
            'g-tabs-pane': TabsPane
        },
        data() {
            return {
                selected: '1'
            }
        }
    }
</script>