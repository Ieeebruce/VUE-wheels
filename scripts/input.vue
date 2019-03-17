<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value"
     :disabled="disabled" :readonly="readonly"
     @change="$emit('change',$event.target.value)" 
     @input="$emit('input',$event.target.value)"
     @focus="$emit('focus',$event.target.value)"
     @blur="$emit('blur',$event.target.value)">
    <template v-if="error">
      <gulu-icon name="error"></gulu-icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  components: {
    "gulu-icon": Icon
  },
  name: "gulu-input",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
  }
};
</script>
<style lang="scss" scoped>
//scoped css有范围 data-v-id
$height: 32px;
$border-radius: 4px;
$font-size: 14px;
.wrapper {
  &.error {
    > svg {
      padding-top: 3px;
      fill: red;
    }
    > span {
      color: red;
      font-size: 8px;
    }
  }
  font-size: $font-size;
  display: inline-block;
  > input {
    border-radius: $border-radius;
    border: 1px solid #999;
    height: $height;
    font-size: inherit;
    padding: 0 8px;
    &:hover {
      border-color: #666;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #999;
    }
    &[disabled] {
      border-color: #999;
      color: #999;
      cursor: not-allowed;
    }
    &[readonly] {
      border-color: #777;
      color: #999;
    }
  }
}
</style>

