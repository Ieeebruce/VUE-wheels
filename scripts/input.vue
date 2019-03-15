<template>
  <div class="wrapper">
    <input type="text">
  </div>
</template>
<script>
export default {
  name: "gulu-input",
  props:{
  }
};
</script>
<style lang="scss" scoped>//scoped css有范围 data-v-id
.wrapper{
    >input{
        border-radius: 4px;
        border: 1px solid #999;
        height: 32px;
        &:hover{
            border-color: #666;
        }
        &:focus{
            outline: none;
            box-shadow: inset 0 0 1px 1px #555;
        }

    }
}
</style>

