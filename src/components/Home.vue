<template>
    
    <div id="home">

      <header class="index_header">

            <div class="hlist">
              <router-link to="hot">
              <img src="../assets/images/rexiao.png"/>
              <p>热销榜</p>
              </router-link>
            </div>

        <div class="hlist">
          <router-link to="order">
          <img src="../assets/images/caidan.png" />
          <p>点过的菜</p>
          </router-link>
        </div>

            <div class="hlist">
              <router-link to="search">
              <img src="../assets/images/sousuo.png"/>
              <p>搜你喜欢</p>
              </router-link>
            </div>

      </header>
      <aside class="left_cate" id="left_cate">
        <ul>

          <li v-for="(item,key) in list" @click="changeList(key)">{{item.title}}</li>

        </ul>

        <div id="nav_cate" class="nav_cate">
          <img src="../assets/images/nav.png"/>
          <p>菜单</p>
        </div>
      </aside>

      <div class="content">
        <div class="item" v-for="item in list">
          <h3 class="item_cate" >{{item.title}}</h3>
          <ul class="item_list">
            <li v-for="food in item.list">
              <router-link :to="'/pcontent?id='+food._id">
                  <div class="inner">
                    <img class="item_img" :src="api+food.img_url" >

                    <p class="title">{{food.title}}</p>

                    <p class="price">¥{{food.price}}/份</p>
                  </div>
              </router-link>
            </li>

          </ul>
        </div>

        <div class="bg" id="bg" ></div>

         <keep-alive>
            <v-navfooter></v-navfooter>
         </keep-alive>

        <div id="footer_cart" class="footer_cart">
          <router-link to="/cart">
          <img src="../assets/images/cart.png"/>
          <p>购物车</p>
          <span class="num" v-if="cartNum">{{cartNum}}</span>
          </router-link>
        </div>

      </div>


    </div>
</template>


<script>
    import Config from '../model/config.js'
    import Axios from 'axios';
    import NavFooter from './public/NavFooter.vue';
    export default{

        data () {
            return {
                    list:[],
                    api:Config.api,
                    cartNum:0
            }
        },methods:{
           asideDomInit(){
             let leftCate=document.getElementById('left_cate');
             let navCate=document.getElementById('nav_cate');
             let bg=document.getElementById('bg');
             let flag=true;
             bg.onclick=navCate.onclick=function () {
               if (flag) {
                 flag=false;
                 leftCate.style.transform='translate(0,0)';
                 bg.style.display='block'
               }else{
                 flag=true;
                 leftCate.style.transform='translate(-100%,0)';
                 bg.style.display='none';
               }
             }
           },
          upDataList(){
              let api=this.api+'api/productlist';
              Axios.get(api).then( response=>{
                this.list=response.data.result;

              })
                .catch( err=>{
                  console.log(err);
                })
          },
        changeList(key){
             let itemCateDom=document.querySelectorAll('.item_cate');
             document.documentElement.scrollTop=itemCateDom[key].offsetTop;
             let leftCate=document.getElementById('left_cate');
             let bg=document.getElementById('bg');
             leftCate.style.transform='translate(-100%,0)';
             bg.style.display='none';

        },
        getCartNum(){
          let api=this.api+'api/cartCount?uid=b001';
          Axios.get(api).then(response=>{
            this.cartNum=response.data.result;
            console.log(response);
          })
            .catch(err=>{
              console.log(err);
            })
        }
      },
      mounted() {
          this.upDataList();
          this.asideDomInit();
          this.getCartNum();
      },
      components:{
          'v-navfooter':NavFooter
      }
    }
</script>

<style lang="scss">
  .index_header{
    width: 96%;
    background: #fff;
    height: 4.4rem;
    padding-top: .2rem;
    margin: 1rem auto 0;
    display: flex;
    border-radius: .5rem;
    .hlist{
      flex: 1;
      text-align: center;
      border-right: 1px solid #eee;
      img{
        width: 2rem;
        height: 2rem;
        margin: 0 auto;
      }
      a{
        color: #000;
      }
      &:last-child{
        border-right: none;
      }
    }
  }
  .left_cate{
    transition: all .5s ;
    transform: translate(-100%,0);
    height: 100%;
    width: 7rem;
    background: #eee;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    ul{
      position: absolute;
      height: 100%;
      padding: .5rem;
      background: #eee;
      z-index: 2;
      li{
        line-height: 4.4rem;
      }
    }
    .nav_cate{
      position: absolute;
      top: 42%;
      right: -3.5rem;
      background: rgba(132, 128, 128, 0.9);
      width: 4rem;
      height: 4rem;
      text-align: center;
      border-radius: 0 50% 50% 0;
      z-index: 1;
      img{
        margin-top: .3rem;
        width: 1.8rem;
        height: 1.8rem;
      }
      p{
        margin-top: -0.4rem;
        margin-left: -0.2rem;
        color: #fff;
      }
    }
  }
  .content{
    .item{
      .item_cate{
        text-align: center;
        padding: .5rem;
      }
      .item_list{
        display: flex;
        flex-wrap: wrap;
        padding: 0 .5rem;
        a{
          color: #666;
          text-decoration: none;
        }
        li{
          width: 33.3%;
          padding: .5rem;
          box-sizing: border-box;

          .inner{
            background: #fff;
            width: 100%;
            border-radius: .5rem;
            overflow: hidden;
            img{
              height: 9rem;
              width: 100%;
            }
            p{
              padding: .2rem .5rem;
            }
            .title{
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  .bg{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(132, 128, 128, 0.4);
    z-index: 1;
    display: none;
  }
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
          left: 21%;
        }
        &:nth-child(3){
          bottom: 7.8rem;
          left: 40%;
        }
        &:nth-child(4){
          bottom: 1rem;
          left: 43%;
        }
        &:nth-child(5){
          bottom: 1rem;
          left: 2rem;
        }
      }
    }

  }
  .footer_cart{
    position: fixed;
    width: 5rem;
    height: 5rem;
    right: 2rem;
    bottom: 1rem;
    color: #fff;
    background: red;
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
    a{
      color: #fff;
    }
  }

</style>
