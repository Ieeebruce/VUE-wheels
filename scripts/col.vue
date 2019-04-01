<template>
  <div class="col" :class="classRow" :style="styleCol">
    <div style="border:1px solid red">
      <slot></slot>
    </div>
  </div>
</template>
<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "gulu-col",
  data() {
    return {
      gap: 0
    };
  },
  props: {
    span: {
      type: [Number, String],
      default: 24
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
  },
  methods: {
    createClasses(obj, str = "") {
      if (!obj) {
        return [];
      }
      let array = [];
      if (obj.span) {
        array.push(`span-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`);
      }
      return array;
    }
  },
  computed: {
    styleCol() {
      return {
        paddingLeft: this.gap / 2 + "px",
        paddingRight: this.gap / 2 + "px"
      };
    },
    classRow() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let createClasses = this.createClasses;
      return [
        ...createClasses({ span, offset }),
        ...createClasses(ipad, "ipad-"),
        ...createClasses(narrowPc, "narrow-pc-"),
        ...createClasses(pc, "pc-"),
        ...createClasses(widePc, "wide-pc-")
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  $class-pre: span-;
  @for $n from 1 through 24 {
    &.#{$class-pre}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-right: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: span-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    // 770
    $class-prefix: span-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: span-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
