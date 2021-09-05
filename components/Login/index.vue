<script src="../../../../oghat/ovqat-admin-panel-nuxt/ovqat-admin-panel/store/index.js"></script>
<template>
  <div class="modal ">
      <div class="loggin container p-4 flex flex-row relative">
              <img src="/icons/close.svg" class="absolute closeIcon" @click="close"/>
          <div class="w-4/12 h-full flex flex-col  justify-center relative p-5">
              <h3 class="mb-10">ورود به حساب کاربری</h3>
              <div class="inputBox">
                <label>نام کاربری</label>
                <div class="input">
                  <img src="/icons/personFade.svg">
                  <input  type="text" placeholder="نام کاربری خود را وارد کنید" v-model="username.value"/>
                </div>

              </div>
              <div class="inputBox">
                <label> رمز عبور</label>
                <div class="input">
                  <img src="/icons/lock.svg">
                  <input  type="text" placeholder="رمز عبور خود را وارد کنید" v-model="password.value"/>
                  <img src="/icons/eye.svg" class="ml-2 mt-2 cursor-pointer">

                </div>
              </div>
              <div @click="login">
                <Button mode="flat" class="w-full " style="height: 60px;margin-top:20px" @click="login">ورود</Button>
              </div>

              <div class="mt-4 absolute errors" v-if="hasError">
                <span class="text-red">{{error}}</span>
              </div>
          </div>
          <div class="imgLogin w-8/12 h-full flex justify-center items-center">
            <img src="/icons/loginImg.svg" />
          </div>
      </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "index",
  data(){
    return {
      username:{
        value:'test_user'
      },
      password:{
        value:'test_password'
      },
      error : '',
      hasError : false
    }
  },
  methods : {
    close(){
      this.$emit('input')
    },
    async login(){
      const mutation = gql`mutation x{
          userLogin(
            inputs : {
              userName : "test_user",
              password : "test_password"
            }
          ){
            _id
            fullName
            userName
            token {
              accessToken
              refreshToken
            }
          }
        }`
      await this.$mutation({mutation}).then(data => {
        if(data.error){
          this.hasError = true;
          this.error = data.error.message.replace('GraphQL error:','');
        }else {
          const dataREesponce = data.data.userLogin;
          this.hasError = false;
           this.$store.dispatch('saveUserInfo',({
            accessToken:dataREesponce.token.accessToken,
            refreshToken: dataREesponce.token.refreshToken,
            fullName: dataREesponce.fullName,
            userName: dataREesponce.userName,
            id: dataREesponce._id,
          }))
          this.close();
        }
      })
    }
  }
}
</script>

<style scoped>
  .errors{
    top: 80%;
  }
  .modal{
      width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index : 100
  }
  .closeIcon{
    left: 2%;
    top: 4%;
    cursor: pointer;
  }
  .loggin{
    width: 100%;
    height: 80%;
    background: white;

  }

  h3{
    font-family: IRANYekan;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 78px;
    /* identical to box height */


    color: #000000;
  }

  .inputBox{
    @apply flex flex-col text-right;
  }
  .inputBox labe {
    font-family: IRANYekan;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    /* identical to box height */
    color: #000000;

  }

  .input{
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 15px;
    margin: 20px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .input img{
    width: 20px;
    height: 20px;
    margin-right: 10px;

  }
  .input input{
    width: 90%;
    height: 90%;
    padding: 15px;
    outline: none;
  }

  .imgLogin{
    background: #FAFAFA;
  }
  .imgLogin img{
    width: 627px;
    height: 606px;
  }
</style>
