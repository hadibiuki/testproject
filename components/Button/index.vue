<template>
  <button  :class="mode">
    <slot></slot>
  </button>

</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: "outline"
    },
  }
};
</script>


<style scoped>
button,

button {
  border-radius: 15px;
  font-size: 18px;
  line-height: 20px;
  transition: all 0.2s ease-in;
  font-family: IRANYekan
}
.outline
 {

  border: 1px solid var(--green);
  color: var(--green);
}


.flat {
  background:var(--green);
  color:white;
}

</style>
