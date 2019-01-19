<template>
    
    <div id="hot">
      <header class="hot_header header">
        <p class="title">本店热销榜</p>
      </header>

      <div class="hot_content">

        <ul class="item_list clearfix">
          <li>
            <img class="item_img" src="../assets/images/1.jpg" />
            <div class="inner">
              <h3 class="title">芒果沙冰</h3>
              <p class="price">¥10</p>
              <span>已售:351份</span>
            </div>
          </li>
          <li>
            <img class="item_img" src="../assets/images/2.jpg" />
            <div class="inner">
              <h3 class="title">娃娃菜顿豆腐</h3>
              <p class="price">¥26</p>
              <span>已售:351份</span>
            </div>
          </li>
          <li>
            <img class="item_img" src="../assets/images/3.jpg" />
            <div class="inner">
              <h3 class="title">手撕包菜</h3>
              <p class="price">¥26</p>
              <span>已售:351份</span>
            </div>
          </li>

        </ul>

      </div>




      <v-navfooter></v-navfooter>


      <div id="footer_book" class="footer_book">

        <router-link to="home">
        <img src="../assets/images/menu.png"/>
        <p>菜单</p>
        </router-link>
      </div>



      <div id="footer_cart" class="footer_cart">
        <router-link to="cart">
          <img src="../assets/images/cart.png"/>
          <p>购物车</p>
        </router-link>
      </div>

    </div>
</template>


<script>
   import NavFooter from './public/NavFooter.vue';
    export default{

        data () {
            return {
                    msg: 'Welcome to Your Vue.js App'
            }
        },components:{
        'v-navfooter':NavFooter
      }
    }
</script>

<style lang="scss">
  .hot_header{
    height: 5rem;
    text-align: center;
    width: 100%;
    line-height: 5rem;
    .search{
      width: 90%;
      height: 3.8rem;
      line-height: 3.8rem;
      border-radius: 0.5rem ;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(238, 238, 238);
      border-image: initial;
      margin-top: .5rem;
    }
  }
  .hot_content{
    .item_list{
      background: #fff;
      li{
        display: flex;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #eee;
        img{
          width: 6rem;
          height: 6rem;
          margin-left: .5rem;
          border-radius: .5rem;
        }
        .inner{
          flex: 1;
          margin-left: 1rem;
        }
      }
    }
  }


</style>
