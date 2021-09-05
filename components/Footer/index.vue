<template>
  <div style="background:#2C8167">
    <div class="container mx-auto text-white pt-24">
        <div class="flex flex-row">
          <div class="w-6/12">
            <h3>تست برنامه نویسی فرانت</h3>
            <p class="w-5/12">شما با انجام این تست مهارت خود را به ما نشان داده و در صورت تحویل آن، بعد از داوری به مرحله بعد راه پیدا میکنید</p>
            <p class=" w-5/12 mt-2">تهران، میدان آرژانتین، خیابان احمد قصیر(بخارست)، خیابان مقدس(چهارم)، پلاک 22، واحد 5</p>
            <div class="flex flex-row social">
              <img src="/icons/instagram.svg">
              <img src="icons/twiiter.svg">
              <img src="/icons/linkedin.svg">
              <img src="/icons/facebook.svg">
            </div>
          </div>

          <div class="w-3/12">
            <h3>نحوه امتیازگیری</h3>
            <ul>
              <li>پیاده سازی مطابق دیزاین</li>
              <li>استفاده از Vuex</li>
              <li>استفاده از Tailwind CSS</li>
              <li>استفاده از Git</li>
              <li>دیجیتال مارکتینگ</li>
              <li>طراحی وب اپلیکیشن</li>
            </ul>
          </div>

          <div class="w-3/12">
            <h3>مزیت ها</h3>
            <ul>
              <li>تلاش و پشتکار</li>
              <li>احساس مسئولیت</li>
              <li>علاقه مند به کار گروهی</li>
              <li>آموزش و یادگیری در حین کار</li>
              <li>منابع انسانی توانمند و متخصص</li>
            </ul>
          </div>
        </div>

        <div class="mt-24 flex flex-row items-center pb-8">
          <p class="w-6/12">تمامی حقوق برای فودینو محفوظ میباشد.</p>
          <div class="w-3/12">
            <img  src="/icons/webjar.svg" style="width:205px;height:57px">
          </div>
          <p class="w-3/12">Copyright 2021. All Right By WebJar <span style=" font-size: 16px;">&copy;</span></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  h3,p ,span , li{
    color : white
  }
  h3{
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 123.6%;
    text-align: right;
    margin-bottom: 17px;
  }
  p ,span , li{
    font-family: IRANYekan;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 2rem;
    /* or 34px */

    text-align: right;
   }
  .social{
    margin-top: 40px;
  }
  .social img{
    margin-left: 35px;
  }

</style>
