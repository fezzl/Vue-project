<template>
    
    <div id="search">
      <keep-alive>
       <v-back></v-back>
      </keep-alive>
      <header class="search_header header">
        <input class="search" type="search" />
      </header>

      <div class="search_content">

        <ul class="item_list clearfix">
          <li>
            <img class="item_img" src="../assets/images/1.jpg" />
            <div class="inner">
              <h3 class="title">大蒜腊肉</h3>
              <p class="price">¥26</p>
              <span>已售:351份</span>
            </div>
          </li>
          <li>
            <img class="item_img" src="../assets/images/2.jpg" />
            <div class="inner">
              <h3 class="title">大蒜腊肉</h3>
              <p class="price">¥26</p>
              <span>已售:351份</span>
            </div>
          </li>
          <li>
            <img class="item_img" src="../assets/images/3.jpg" />
            <div class="inner">
              <h3 class="title">大蒜腊肉</h3>
              <p class="price">¥26</p>
              <span>已售:351份</span>
            </div>
          </li>

        </ul>

      </div>

      <keep-alive>
          <v-navfooter></v-navfooter>
      </keep-alive>

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
  import Back from './public/Back.vue';
    export default{

        data () {
            return {
                    msg: 'Welcome to Your Vue.js App'
            }
        },components:{
        'v-navfooter':NavFooter,
        'v-back':Back
      }
    }
</script>

<style lang="scss">
  .search_header{
    height: 5rem;
    text-align: center;
    width: 100%;
    .search{
      width: 75%;
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
  .search_content{
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
