<template>
  <h1>hi</h1>
</template>

<script>
export default {
  layout:'site',
  data(){
    return {
      id : ''
    }
  },
  mounted(){
    this.id = this.$route.params.id;
    this.getPostApi();
  },
  methods : {
    getPostApi(){

    }

  }
}
</script>

<style scoped>

</style>
