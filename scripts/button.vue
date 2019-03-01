<template>
  <button class="g-button" v-bind:class="`icon-${iconPosition} icon-${type} icon-${shape}`">
    <g-icon v-if="icon" :name="icon" class="icon"></g-icon>
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
    type: {
      type: String,
      default: "default",
      validator(value) {
        return value === "default" || "primary" || "ghost" || "disabled";
      }
    },
    shape: {
      type: String,
      default: "default",
      validator(value) {
        return value === "default" || "circle";
      }
    },
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
  color: var(--color);
  > .icon {
    fill: var(--color);
  }
  &:hover {
    border-color: var(--button-color-hover);
    color: var(--color-hover);
    > .icon {
      fill: var(--color-hover);
    }
  }
  &:active {
    color: var(--color-active);
    border-color: var(--color-active);
    > .icon {
      fill: var(--color-active);
    }
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
  &.icon-primary {
    color: var(--color-primary);
    background: var(--color-active);
    border-color: var(--color-active);
    > .icon {
      fill: var(--color-primary);
    }
    &:hover {
      background: var(--color-hover);
      border-color: var(--color-hover);
    }
  }
  &.icon-circle{
    border-radius: var(--button-height);
  }
}
</style>

