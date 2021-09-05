<template>
    <div :key="pageKey">
      <div v-if="pagineateSize > 5" style="direction:ltr" class="flex items-center justify-center">
        <span class="selector" @click="prevPage">
               <img src="/icons/rightIconGreen.svg" />
        </span>
        <span v-for="item in 3"  class="number ml-2" :class="activeIndex === item  ? 'active':''" @click="goPage(item)">{{ item }}</span>
        <span class="dots" v-if="rangeItem[0] > 3 && rangeItem[2] < pagineateSize +2" >
          <i></i>
          <i></i>
          <i></i>
        </span>
        <div class="inline-flex" v-if="rangeItem[0] > 3 && rangeItem[2] < pagineateSize +2  ">
          <span class="number active" >{{ activeIndex }}</span>
        </div>
        <span class="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span class="number ml-2" :class="activeIndex === (pagineateSize -1) ? 'active':''" @click="goPage(pagineateSize -1)">{{ pagineateSize -1 }}</span>
        <span class="number ml-2" :class="activeIndex === pagineateSize ? 'active':''" @click="goPage(pagineateSize)">{{ pagineateSize }}</span>
        <span class="selector ml-2" @click="nextPage">
             <img src="/icons/leftIconGreen.svg" />
        </span>
      </div >
      <div v-else style="direction:ltr" class="flex items-center justify-center">
        <span class="selector" @click="prevPage">
               <img src="/icons/rightIconGreen.svg" />
        </span>
        <span v-for="item in pagineateSize"  class="number ml-2" :class="activeIndex === item  ? 'active':''" @click="goPage(item)">{{ item }}</span>
        <span class="selector ml-2" @click="nextPage">
             <img src="/icons/leftIconGreen.svg" />
        </span>
      </div >
    </div>

</template>

<script>
export default {
  props:{
    count : {
      type : Number,
      required : true
    },
    size : {
      type : Number,
      requireed : true
    }
  },
  watch:{
    pagineateSize(){
      console.log('paginateSize');
      console.log(this.pagineateSize)
    }
  },
  data(){
    return{
      activeIndex : 1,
      pagineateSize :0,
      rangeItem : [],
      pageKey : false
    }
  },
  mounted() {
   this.init();
   setTimeout(()=>{
   this.pagineateSize = Math.ceil(this.count / this.size );
     this.pageKey = !this.pageKey
   },1000)
  },
  methods:{
    nextPage(){
      if(this.activeIndex === this.pagineateSize){
        return;
      }
      this.activeIndex = this.activeIndex +1;
      this.init();
    },
    prevPage(){
      if(this.activeIndex === 1){
        return
      }
      this.activeIndex = this.activeIndex -1;
      this.init();
    },
    goPage(item){
      this.activeIndex = item;
      this.init();

    },
    init(){
      this.rangeItem = [this.activeIndex , this.activeIndex +2 , this.activeIndex +3]
      this.$emit("input",this.activeIndex)
      this.pageKey = !this.pageKey
    }
  }
}
</script>

<style scoped>
  .selector{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 200, 83, 0.1);
    border-radius: 15px;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
  }
  .selector img{
    width: 25px;
    height: 25px;
  }

  .number{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--green);
    box-sizing: border-box;
    border-radius: 15px;
    width: 50px;
    height: 50px;
    color: var(--green);
    user-select: none;
    cursor: pointer;
  }
  .dots {
    display: inline-flex;
    flex-direction: row;
    margin-left: 2px;
    margin-right: 2px;
  }
  .dots i {
    width: 5px;
    height: 5px;
    border: 1px solid var(--green);
    border-radius: 50%;
    margin:0px 2px;
  }
  .active{
    background:var(--green);
    color: white;
  }
</style>
