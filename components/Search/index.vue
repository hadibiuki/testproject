<template>
  <div>
      <div class=" inputWrapper flex flex-row px-4">
        <input name="search" type="text" v-model="search" placeholder="جستجو کنید..." class="mr-6">
        <img src="/icons/search.svg"  class="absolute iconSearch" v-if="search === ''"/>
        <span class="w-1 h-8 bg-green my-auto showBar absolute" v-if="search === ''"></span>
        <img src="/icons/search.svg"  class="absolute iconSearchGreen" v-if="search !== ''"/>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      search : ''
    }
  },
  watch:{
    search(){
      this.$emit('input',this.search);
    }
  }
}
</script>

<style scoped>
.inputWrapper{
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  background: #FFFFFF;
  position: relative;
}
input {
  width: 90%;
  height: 100%;
  display: inline-flex;
  font-family: IRANYekan;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150.6%;
  outline: none;
  min-height: 60px;
}
.iconSearch{
  top:50%;
  left:98%;
  transform: translate(-100% , -50%);
  transition: all 1s ease-in-out;
}
.inputWrapper input ~ .showBar{
  opacity: 0;
  display: none;
  top:50%;
  transform: translate(-100% , -50%);
}
.inputWrapper input:focus + .iconSearch
{
  left:5%;
  filter:invert(54%) sepia(89%) saturate(1725%) hue-rotate(103deg) brightness(95%) contrast(101%)
}
.iconSearchGreen{
  top:50%;
  left:5%;
  transform: translate(-100% , -50%);
  filter:invert(54%) sepia(89%) saturate(1725%) hue-rotate(103deg) brightness(95%) contrast(101%)
}
.inputWrapper input:focus ~ .showBar{
  opacity: 1;
  display: inline-flex;
}
</style>
