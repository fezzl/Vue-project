<template>
    
    <div id="pcontent">
      <keep-alive>
          <v-back></v-back>
      </keep-alive>
      <div class="p_content">
            <div class="p_info">
              <img :src="api+list.img_url" style="height: 28rem" alt=""/>
              <h2>{{list.title}}</h2>
              <p class="price">¥{{list.price}}/份</p>
            </div>
            <div class="p_detial">
              <h3>
                商品详情
              </h3>
              <div class="p_content" v-html="list.content">


              </div>
            </div>
          </div>
          <footer class="pfooter">

            <div class="cart">
              <strong>数量:</strong>
              <div class="cart_num">
                <div class="input_left" @click="decNum()">-</div>
                <div class="input_center">
                  <input type="text" readonly="readonly" v-model="num" name="num" id="num">
                </div>
                <div class="input_right" @click="incNum()">+</div>
              </div>

            </div>

                <button class="addcart" @click="addCart()">加入购物车</button>

          </footer>

    </div>
</template>


<script>
    import Axios from 'axios';
    import Config from '../model/config.js';
    import Back from './public/Back.vue';
    export default{

        data () {
            return {
                    api:Config.api,
                    list:[],
                    num:1
            }
        },
      methods:{
          requestData(id){
            let api=this.api+'api/productcontent?id='+id;
            Axios.get(api).then(response=>{
              this.list=response.data.result[0];
              console.log(response.data.result[0]);
            })
              .catch(err=>{
                console.log(err);
              })
          },
        decNum(){
            if (this.num>1) {
              --this.num;
            }
        },
        incNum(){
            ++this.num;
        },
        addCart(){
            let api=this.api+'api/addcart';
            Axios.post(api,{
              uid:'b001',
              title:this.list.title,
              price: this.list.price,
              product_id:this.list._id,
              img_url:this.list.img_url,
              num:this.num
            }).then(response=>{
                console.log(response);
                if (response.data.success) {
                  this.$router.push({path:'home'});
                }
            })
              .catch(err=>{
                console.log(err);
              })
        },

      },mounted() {
          let id=this.$route.query.id;
          this.requestData(id);
      },
      components:{
          'v-back':Back
      }

    }
</script>

<style lang="scss">
  .p_content{

    .p_info{
      background: #fff;
      img{
        width: 100%;
        height: 18rem;
      }
      h2{
        padding: .1rem .5rem;
      }
      p{
        padding: .1rem .5rem;
        color: red;
      }
    }
    .p_detial{
      background: #fff;
      margin-top: 1rem;
      h3{
        padding: .5rem;
      }
      .p_content{
        padding: 1rem;
        img{
          display: block;
          max-width: 100%;
          margin: 0 auto;
        }
        *{
          line-height: 1.5;
          color: #666;

        }
      }
    }
  }
  .pfooter{
    position: fixed;
    bottom: 0;
    height: 4.4rem;
    line-height: 4.4rem;
    background: #fff;
    left: 0;
    width: 100%;
    border-top: 1px solid #eee;

    .cart{
      display: flex;
      float: left;
      .cart_num{
        padding-top: .3rem;
        display: flex;
        width: 10rem;
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
      strong{
        flex: 1;
        padding: 0 .5rem;
        font-size: 1.6rem;
      }
    }
    .addcart{
      float: right;
      background: red;
      color: #fff;
      height: 3rem;
      border: none;
      padding: 0 .5rem;
      border-radius: .5rem;
      margin-top: .8rem;
      margin-right: .5rem;
    }
  }
</style>
