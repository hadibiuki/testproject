<template>

  <div  class="container m-auto mt-10">
    <Breadcrumb :adress="adress"/>
    <h1 class="font-bold mt-10 text-center" style="font-size: 34px;">وبلاگ</h1>
    <Search class="mt-10 mx-auto " style="width:760px;height:60px" @input="chngeSearchItem"/>
    <div class="mt-10 flex flex-row">
      <div class="category">
        <h3 class="mb-6">دسته بندی</h3>
        <Checkbox :label="item.name" :name="item._id"  class="checkboxes" @CheckChange="chckboxChange" v-for="item in categories"/>
      </div>
      <div class="mr-8" :key="blogKey">
        <BlogCard class="blogCard" v-for="post in posts" :post="post" />


        <Pagination class="my-10 mx-auto mb-64" @input="changePaginate" :count="postsCount" :size="size"/>
      </div>

    </div>

  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  layout:'site',
  data(){
    return {
      adress: ['خانه','وبلاگ'],
      categories: [],
      posts : [],
      postsCount : 0,
      categoryItemChcked : null,
      searchValue: "",
      blogKey: false,
    //  *********
      page:1,
      size:4
    }
  },
  mounted() {
    this.getPostCategoriesApi();
    this.getPostsApi();
    this.getPostsCountApi();
  },
  methods : {
    async getPostCategoriesApi() {
      const query = gql`query x{
        getPostCategories {
          _id
          name
        }
      }`
      await this.$query({query}).then(data => {
        this.categories = data.data.getPostCategories;
      })
    },
    async getPostsApi() {
      const categoryTemp = this.categoryItemChcked === null ? null : `"${this.categoryItemChcked}"`;
      // const search = this.searchValue ;
      const query = gql`query x{
          getPosts(pagination : {
            limit : ${this.size},
            skip : ${this.page}
          } ,
          filters : {
            category: ${categoryTemp},
          }
          ) {
            _id
            title
            body
            author
            commentCount
            category {
              _id
              name
            }
            introImageUrl {
              host
              path
            }
            previousPost {
              _id
            }
            nextPost {
              _id
            },
            createdAt
          }
        }`
      await this.$query({query}).then(data => {
        this.posts = data.data.getPosts;
      })
    },
    async getPostsCountApi() {
      let query = null
      if(this.categoryItemChcked !== null){
         query = gql`query x{getPostsCount(filters : { category : "${this.categoryItemChcked}" } ) }`;
      }else {
         query = gql`query x{
              getPostsCount
        }`
      }
      await this.$query({query}).then(data => {
        this.postsCount = data.data.getPostsCount;
      })
      console.log(this.postsCount)
    },
    //*********
    changePaginate(item){
      this.page = item;
      this.getPostsApi();
    },
    chckboxChange(item){
      if(this.categoryItemChcked !== item.id) {
        this.categoryItemChcked = item.id
      } else{
        this.categoryItemChcked = null
      }
      this.getPostsCountApi();
      this.getPostsApi();
      this.blogKey = !this.blogKey;
    },
    chngeSearchItem(item){
      this.searchValue = item;
      this.getPostsCountApi();
      this.getPostsApi();
      this.blogKey = !this.blogKey;
    }
  }
}
</script>

<style scoped>
  .category{
    background: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    width: 372px;
    height: 100%;
    padding: 30px 10px;
    border-radius: 15px 0px 0px 15px;
  }

  .category h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 123.6%;
    coler:var(--black);

  }
  .checkboxes{
    @apply mt-6 w-11/12 mx-auto
  }
  .blogCard{
    @apply mb-24
  }
</style>
