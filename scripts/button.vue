<template>
  <button class="g-button" v-bind:class="`icon-${iconPosition}`">
    <svg v-if="icon" class="icon">
      <use v-bind:xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  // props: ["icon", "iconPosition"]
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>
<style lang='scss'>
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  outline: none;
  font-size: var(--font-size);
  line-height: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-background);
  &:hover {
    border-color: var(--button-color-hover);
  }
  &:active {
    background: var(--button-active-background);
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
}
</style>

