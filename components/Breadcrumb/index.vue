<template>
  <div>
    <div v-for="(item,index) in adress" :key="index" class="inline-flex " >
      <span :class="adress.length-1 === index ? 'text-green' : ''" class="bread">
        {{item}}
      </span>
      <img  src="/icons/arrow.svg" v-if="adress.length-1 !== index" class="mx-2.5  ">

    </div>
  </div>
</template>

<script>
export default {
  props :{
    adress : {
      type: Array,
      required : true
    }
  }

}
</script>

<style scoped>
  .bread {
    font-family: IRANYekan;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 123.6%;
  }
</style>
