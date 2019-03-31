<template>
  <button
    class="g-button"
    v-bind:class="`icon-${iconPosition} ${type} ${shape}`"
    @click="$emit('click')"
  >
    <gulu-icon v-if="icon && !load" :name="icon" class="icon"></gulu-icon>
    <gulu-icon v-if="load" name="loading" class="icon loading"></gulu-icon>
    <div class="gcontent">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  name: "gulu-button",
  components: {
    "gulu-icon": Icon
  },
  props: {
    icon: {},
    load: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default",
      validator(value) {
        return value === "default" || "primary" || "ghost" || "disabled";
      }
    },
    shape: {
      type: String,
      default: "triangle",
      validator(value) {
        return value === "triangle" || "circle";
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
<style lang='scss' scoped>
.g-button {
  > .loading {
    animation: spin 1.5s infinite linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
 $button-height: 32px;
  $font-size: 14px;
  $button-background: #fff;
  $border-radius: 4px;
  $color: #333;
  $color-primary: #fff;
  $color-hover: #5cadff;
  $color-active: #3091f2;
  $border-color: #666;
  $border-width: 1px;

  display: inline-flex;
  justify-gcontent: center;
  align-items: center;
  vertical-align: top;
  outline: none;
  font-size: 14px;
  line-height: 14px;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: $border-width solid $border-color;
  background: $button-background;
  color: $color;
  > .icon {
    fill: $color;
  }
  &:hover {
    border-color: $color-hover;
    color: $color-hover;
    > .icon {
      fill: $color-hover;
    }
  }
  &:active {
    color: $color-active;
    border-color: $color-active;
    > .icon {
      fill: $color-active;
    }
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .gcontent {
    order: 2;
  }
  &.icon-right {
    > .gcontent {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
  &.primary {
    color: $color-primary;
    background: $color-active;
    border-color: $color-active;
    > .icon {
      fill: $color-primary;
    }
    &:hover {
      background: $color-hover;
      border-color: $color-hover;
    }
  }
  &.circle {
    border-radius: $button-height;
  }
}
</style>

