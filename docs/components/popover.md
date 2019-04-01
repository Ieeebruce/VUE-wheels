---
title: Popover 弹出层
---
# 弹出层
## 点击

#### 浏览
#
<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 代码

```html
<g-popover>
    <g-button>上方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="bottom">
    <g-button>下方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="left">
    <g-button>左边弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="right">
    <g-button>右边弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
```
## hover

#### 浏览
#
<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 代码

```html
<g-popover trigger="hover">
    <g-button>上方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="bottom" trigger="hover">
    <g-button>下方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="left" trigger="hover">
    <g-button>左边弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="right" trigger="hover">
    <g-button>右边弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
```
### 内部关闭

#### 浏览
#
<ClientOnly>
<popover-demo-3></popover-demo-3>
</ClientOnly>

#### 代码

```html
<g-popover>
    <template slot="content" slot-scope="{close}"> 弹出内容
        <g-button @click="close">关闭</g-button>
    </template>
    <g-button>内部关闭</g-button>
</g-popover>
```