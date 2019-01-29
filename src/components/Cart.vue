<template>
    
    <div id="cart">

          <div class="cart_content">
            <v-back></v-back>
            <div class="cart_info" v-if="allNum">
    
    
              <h2>购物车</h2>
    
              <div class="p_number">
                <div class="p_number_left">
                  <p>用餐人数:{{peopleMark.p_num}}</p>
                  <p>备注:<span v-if="peopleMark.p_mark">{{peopleMark.p_mark}}</span> <span v-if="!peopleMark.p_mark">无</span></p>
                </div>
                <div class="p_number_right">
                  <router-link to="/editorpeopleinfo">
                  <img src="../assets/images/edit.png"/>
                  <p>修改</p>
                  </router-link>
                </div>
    
              </div>
    
              <div class="cart_p_num">
    
                <p>购物车中总共有{{allNum}}个菜</p>
    
                <p>合计：<span class="price">¥{{allPrice}}</span></p>
              </div>
            </div>
    
    
    
            <div class="cart_list">
    
    
              <ul>
                <li class="item" v-for="(item,key) in list">
                  <div class="left_food">
                    <img :src="api+item.img_url"/>
                    <div class="food_info">
                      <p>{{item.title}}</p>
                      <p class="price">¥{{item.price}}</p>
                    </div>
    
                  </div>
    
                  <div class="right_cart">
                    <div class="cart_num">
                      <div class="input_left" @click="decNum(item,key)">-</div>
                      <div class="input_center">
                        <input type="text"  readonly="readonly" v-model="item.num" name="num" class="num" />
                      </div>
                      <div class="input_right" @click="incNum(item,key)">+</div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
            <div class="hot_food">
    
              <h3>本店顾客最常点的菜</h3>
    
              <div class="item_list_outer">
                <ul class="item_list">
                  <li>
                    <div class="inner">
                      <img src="../assets/images/2.jpg">
                      <p class="title">娃娃菜豆腐</p>
                      <p class="price">¥2</p>
                    </div>
                  </li>
    
                  <li>
                    <div class="inner">
                      <img src="../assets/images/3.jpg">
    
                      <p class="title">手撕包菜</p>
    
                      <p class="price">¥67</p>
                    </div>
    
                  </li>
    
                  <li>
                    <div class="inner">
                      <img src="../assets/images/5.jpg">
                      <p class="title">凉拌三丝</p>
                      <p class="price">¥1</p>
                    </div>
                  </li>
    
                  <li>
                    <div class="inner">
                      <img src="../assets/images/1.jpg">
    
                      <p class="title">芒果沙冰</p>
    
                      <p class="price">¥10</p>
                    </div>
    
                  </li>
    
                  <li>
                    <div class="inner">
                      <img src="../assets/images/6.jpg">
    
                      <p class="title">牛肉馅饼</p>
    
                      <p class="price">¥24</p>
                    </div>
    
                  </li>
    
    
                </ul>
    
              </div>


            </div>

            <div class="cart_empty" v-if="!allNum">您的购物车空空的，点击下面的菜单开始点菜</div>
    
          </div>

          <v-navfooter></v-navfooter>
    
          <div id="footer_book" class="footer_book">
            <router-link to="/home">
            <img src="../assets/images/menu.png">
            <p>菜单</p>
            </router-link>
          </div>
          <div id="footer_cart" class="footer_cart">
            <router-link to="order">
            <img src="../assets/images/doorder.png">
            <p>下单</p>
            </router-link>
          </div>
    </div>
</template>


<script>
    import Config from '../model/config.js'
    import Axios from 'axios';
    import NavFooter from './public/NavFooter.vue';
    import Back from './public/Back.vue';
    export default{

        data () {
            return {
                    api:Config.api,
                    list:[],
                    allPrice:0,
                    allNum:0,
                    peopleMark:[]
            }
        },
        methods:{
           requestData(){
               let api=this.api+'api/cartlist?uid=b001';
                Axios.get(api).then(response=>{
                  // console.log(response);
                  this.list=response.data.result;
                  this.getTotal();
                })
                  .catch(err=>{
                    console.log(err);
                  })
           },
          decNum(item,key){
            let product_id=item.product_id;
            let num=item.num;
            let api=this.api+'api/decCart?uid=b001&product_id='+product_id+'&num='+num;
            Axios.get(api).then(response=>{
              console.log(response);
              this.getTotal();
            })
              .catch(err=>{
                console.log(err);
              });
            if (item.num == 1) {
              this.list.splice(key,1);
            }else {
              --item.num;
            }

          },
          incNum(item){
             let product_id=item.product_id;
             let num=item.num;
             let api=this.api+'api/incCart?uid=b001&product_id='+product_id+'&num='+num;
             Axios.get(api).then( response=>{
               console.log(response);
               this.getTotal();
             })
               .catch( err=>{
                 console.log(err);
               });
             ++item.num;

          },
          getTotal(){
              let allPrice=0;
              let allNum=0;
              for (let i = 0; i < this.list.length; i++) {
                   allPrice+=parseFloat(parseInt(this.list[i].price)*this.list[i].num);
                   allNum+=this.list[i].num;
              }
              this.allPrice=allPrice;
              this.allNum=allNum
          },
          getPeopleList(){
              let api=this.api+'api/peopleInfoList?uid=b001';
              Axios.get(api).then(response=>{
                console.log(response);
                this.peopleMark=response.data.result[0];
              })
                .catch(err=>{
                  console.log(err);
                })
          }
        },components:{
          'v-navfooter':NavFooter,
          'v-back':Back
      },
      mounted() {
          this.requestData();
          this.getPeopleList();
      }
    }
</script>

<style lang="scss">
  .cart_content{
    padding: 1rem;
    .cart_info{
      background: #fff;

      padding: .5rem;
      border-radius: .5rem;
      h2{
        padding: .8rem 0;
        text-align: center;
        font-size: 1.8rem;
        border-bottom: 1px solid #eee;
      }
      .p_number{
        display: flex;
        border-bottom: 1px solid #eee;
        padding: .5rem 0;
        .p_number_left{
          flex: 1;
          p{
            line-height: 2;
            &:first-child{
              color: red;
            }
          }
        }
        .p_number_right{
          width: 4rem;
          height: 4rem;
          text-align: center;
          img{
            width: 1.8rem;
            height: 1.8rem;
            margin: 0 auto;
          }
          a{
            color: #000;
          }
        }
      }
    }
    .cart_p_num{
      border-bottom: 1px solid #eee;
      p{
        line-height: 2;
      }
      .price{
        color: red;
        font-size: 2.4rem;
      }
    }
    .cart_list{
      margin: 1rem 0;
      background: #fff;
      border-radius: .5rem;
      ul{
        .item{
          display: flex;
          border-bottom: 1px solid #eee;
          width: 100%;
          padding: 1rem 0;
          .left_food{
            flex: 1;
            display: flex;
            .food_info{
              flex: 1;
              padding-left: .8rem;
            }
            img{
              width: 4rem;
              height: 4rem;
              border-radius: .5rem;
              margin-left: .5rem;
            }
          }
          .right_cart{
            .cart_num{
              padding-top: .3rem;
              display: flex;
              width: 10rem;
              margin-right: .5rem;
              .input_left,.input_center,.input_right{
                flex: 1;
                border: 1px solid #eee;
                height: 2.8rem;
                width: 2.8rem;
                font-size: 2.4rem;
                margin-top: .5rem;
                text-align: center;
              }
              .input_left,.input_right{
                color: red;
                line-height: 2.8rem;
              }
              .input_center{
                input{
                  width: 100%;
                  text-align: center;
                  height: 2.8rem;
                  border: none;
                  float: left;
                }
              }
            }

          }

        }
      }
    }
    .hot_food{
      background: #fff;
      border-radius: .5rem;
      padding: .5rem 1rem;
      h3{
        font-size: 1.4rem;
        padding: .5rem 0;
      }
      .item_list_outer{
        overflow-x: auto;
        width: 100%;
        .item_list{
          width: 60rem;
          li{
            width: 8rem;
            padding: .5rem;
            float: left;
            box-sizing: border-box;
            .inner{
              img{
                width: 100%;
                border-radius: .5rem;
              }
            }
          }
        }
      }
    }
    .cart_empty{
      text-align: center;
      line-height: 3;
      font-size: 1.4rem;
      margin-top: 5rem;
    }
  }

</style>
