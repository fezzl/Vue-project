<template>
    <div id="navfooter">
          <div id="footer_nav" class="footer_nav" @click="flag=!flag">
            <img src="../../assets/images/navigation.png"/>
            <p>导航</p>
          </div>

          <div class="footer_nav_show" v-if="flag">

            <ul class="list">

              <li>
                <router-link to="start">
                <img src="../../assets/images/home.png">
                <p>开始</p>
                </router-link>

              </li>

              <li>
                <router-link to="home">
                <img src="../../assets/images/menu.png">
                <p>菜单</p>
                </router-link>
              </li>

              <li>
                 <router-link to="order">
                <img src="../../assets/images/order.png">
                <p>订单</p>
                 </router-link>

              </li>

              <li>
                 <router-link to="cart">
                <img src="../../assets/images/wallet.png">
                <p>结账</p>
                 </router-link>

              </li>

              <li @click="flag=!flag">
                <img src="../../assets/images/close.png">
                <p>返回</p>
              </li>
            </ul>

          </div>

    </div>
</template>

<script>
    export default {
        data(){
          return{
            flag:false
          }
        }
    }
</script>

<style scoped lang="scss">

  .footer_nav{
    position: fixed;
    width: 5rem;
    height: 5rem;
    left: 2rem;
    bottom: 1rem;
    color: #fff;
    background: #000;
    text-align: center;
    border-radius: 50%;
  img{
    width: 1.8rem;
    height: 1.8rem;
    margin-top: .8rem;
  }
  p{
    margin-top: -.1rem;
  }
  }
  .footer_nav_show{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    left: 0;
    top: 0;
    z-index: 3;
  .list{

  li{
    position: absolute;
    width: 5rem;
    height: 5rem;

    left: .5rem;
    color: #fff;
    background: #000;
    text-align: center;
    border-radius: 50%;
  img{
    width: 1.8rem;
    height: 1.8rem;
    margin-top: .8rem;
  }
  p{
    margin-top: -.1rem;
    font-size: 1rem;

  }
  &:nth-child(1){
     bottom: 15.4rem;
     left: 0;
   }
  &:nth-child(2){
     bottom: 12.6rem;
     left: 19%;
   }
  &:nth-child(3){
     bottom: 7.8rem;
     left: 35%;
   }
  &:nth-child(4){
     bottom: 1rem;
     left: 43%;
   }
  &:nth-child(5){
     bottom: 1rem;
     left: 2rem;
   }
    a{
      color: #fff;
    }
  }
  }

  }
</style>
