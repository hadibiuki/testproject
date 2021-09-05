<template >
  <div class="header i">
    <Login @input="close" v-if="showmodal"/>
    <div class="container flex flex-row justify-between items-center m-auto h-full  ">
      <div class="w-9 h-9">
        <img src="/icons/logo.svg" class="w-full h-full">
      </div>
      <menu class="w-9/12 h-full m-0 ">
        <ul class="h-full flex">
          <nuxt-link to="/" class="customLink">خانه</nuxt-link>
          <nuxt-link to="/product" class="customLink">محصولات</nuxt-link>
          <nuxt-link to="/services" class="customLink">خدمات</nuxt-link>
          <nuxt-link to="/blog" class="customLink">وبلاگ</nuxt-link>
        </ul>
      </menu>
      <div>
        <Button style="width:147px;height:50px " @click="show">
            ورود
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      showmodal : true
    }
  },
  methods:{
    close(){
     this.showmodal = false
    },
    show(){
      this.showmodal = true
    }
  }
}
</script>

<style scoped>
  ul .customLink{
    @apply  text-black h-full inline-flex items-center;
    font-family: IRANYekan;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 123.6%;
    margin-right: 100px;
  }
  .header {
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  }
  a.nuxt-link-exact-active {
    @apply text-green;
    border-bottom: 5px solid var(--green);
  }

</style>
