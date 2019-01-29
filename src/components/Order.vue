<template>
    
    <div id="order">

        <div class="order_content">
          <v-back></v-back>

          <div class="order_info">

            <div class="order_top">
              <img src="../assets/images/timer.png">
              <div class="order_info_right">
                <h2>b001号桌待门店接单</h2>
                <p>请及时联系服务员确认一点菜品信息!</p>
              </div>
            </div>


            <h3>已点菜品6份,合计 : <span class="price">60元</span> </h3>

          </div>

          <!--订单列表-->

          <div class="order_list">

            <h3>菜品详情:</h3>
            <ul class="list">
              <li>
                <div class="title">
                  烧茄子
                </div>

                <div class="num">

                  1份
                </div>


                <div class="price">

                  12元
                </div>

              </li>

              <li>
                <div class="title">
                  烧茄子
                </div>

                <div class="num">

                  1份
                </div>


                <div class="price">

                  12元
                </div>

              </li>
              <li>
                <div class="title">
                  手撕包菜
                </div>

                <div class="num">

                  1份
                </div>


                <div class="price">

                  12元
                </div>

              </li>

            </ul>

          </div>


        </div>

    </div>
</template>


<script>
  import Back from './public/Back.vue';
    export default{

        data () {
            return {
                    msg: 'Welcome to Your Vue.js App'
            }
        },
      components:{
          'v-back':Back
      }
    }
</script>

<style lang="scss">
  .order_content{
    padding: 1rem;
    .order_info{
      padding: 2rem 0 0 2rem;
      background: #fff;
      border-radius: .5rem;
      .order_top{
        display: flex;
        img{
          width: 5.6rem;
          height: 5.6rem;
        }
        .order_info_right{
          flex: 1;
          padding: .5rem 0;
        }

      }
      h3{
        padding: 1rem .5rem;
        .price{
          font-size: 2rem;
          color: red;
        }
      }
    }
    .order_list{
      background: #fff;
      margin-top: 1rem;
      border-radius: .5rem;
      padding: 1rem .5rem 1rem 2rem;
      .list{
        li{
          display: flex;
          padding: 1rem 0;
          .title{
            flex: 2;
          }
          .num{
            text-align: center;
            flex:1;
          }
          .price{
            text-align: center;
            flex: 1;
          }
        }
      }
    }
    .order_pay{
      background: #fff;
      border-radius: .5rem;
      h3{
        text-align: center;
        font-size: 2rem;
        padding: 2rem 0 .5rem 0;
      }
      .order_pay_detail{
        display: flex;
        padding: .5rem;
        border-bottom: 1px solid #eee;
        .d_num,.p_num,.order_time{
          flex: 1;
        }
      }
      .order_pay_info{
        line-height: 2;
        display: flex;
        margin-top: 1rem;
        padding:1rem .5rem;
        .price_list{
          flex: 1;
        }
        .pay_button{
          width: 10rem;
          border-radius: .5rem;
          background: red;
          color: #fff;
          text-align: center;
          height: 3rem;
          line-height: 3rem;
          position: relative;
          top: 0.5rem;
        }
        .price_list{
          .price{
            color: red;
            font-size: 2rem;
          }
        }
      }
    }
  }

</style>
