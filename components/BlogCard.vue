<template>
  <div class="cardWrapper flex flex-row overflow-hidden">
    <div class="" style="width:420px" >
      <img :src="post.introImageUrl.host + post.introImageUrl.path" class="w-full h-full"/>
    </div>
    <div class="body flex flex-row mr-16">
      <div class="flex flex-col w-8/12">
<!--        <h3 >{{ post.title }}</h3>-->
        <p  v-html="post.body.substr(0,400)+'...'"></p>
        <div class="flex flex-row mt-10">
          <div class="flex flex-row ml-4">
            <img src="/icons/calender.svg">
<!--            <span class="mr-2">20 اردیبهشت 1400</span>-->
            <span class="mr-2">{{post.createdAt}}</span>
          </div>
          <div class="flex flex-row ml-4">
            <img src="/icons/comment.svg">
            <span class="mr-2" >{{ post.commentCount }} نظر</span>
          </div>
          <div class="flex flex-row ml-4">
            <img src="/icons/person.svg">
            <span class="mr-2"> {{ post.author }}</span>
          </div>
        </div>
      </div>
      <div class="w-4/12 items-end justify-end flex mb-5 ml-5">

        <NuxtLink :to="'/blog/'+post._id">
          <Button style="width:157px;height:58px " mode="flat" >بیشتر</Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props : {
    post : {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.cardWrapper{
  background: #FFFFFF;
  box-shadow: 0px 0px 30px rgba(0, 200, 83, 0.05);
  border-radius: 15px;
  width: 1080px;
  height: 250px ;

}

H3{
  font-family: IRANYekan;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 123.6%;
  text-align: right;
    color: var(--black);
}

p{
  font-family: IRANYekan;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 3rem;
  /* or 16px */

  display: flex;
  align-items: center;
  text-align: right;
}
</style>
