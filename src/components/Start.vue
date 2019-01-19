<template>

  <div id="start">
    <div class="start_content">


      <header class="start_header">

        <img src="../assets/images/canju.png"/> 用餐人数
      </header>


      <p class="notice">请选择正确的用餐人数 ，小二马上给你送餐具</p>


      <div class="content">

        <ul class="user_list">
          <li v-for="(item,key) in userList" :class="{'active':key==0}">
            <span>{{item}}</span>
          </li>
        </ul>

        <div class="mark">
          <input type="text" class="mark_text" placeholder="请备注您的口味要求,谢谢！" v-model="p_mark">
          <ul class="mark_list">
            <li><span>打包带走</span></li>
            <li><span>不要辣椒</span></li>
            <li><span>微辣</span></li>
          </ul>
        </div>
      </div>

    </div>


      <div id="startMenu" class="start" @click="addPeopleInfo()">

                  <span>
                          开始点菜
                  </span>

      </div>

  </div>
</template>


<script>
  import Axios from 'axios';
  import Config from '../model/config.js';
  export default {

    data() {
      return {
        p_num:'1人',
        p_mark:'',
        api:Config.api,
        userList:[]
      }
    },
    methods: {
      onChangeList() {
        let that=this;
        let lis = document.querySelectorAll('.user_list li');
        for (let i = 0; i < lis.length; i++) {
          lis[i].onclick = function () {
            for (let j = 0; j < lis.length; j++) {
              lis[j].className = '';
            }
            this.className = 'active';
            that.p_num=this.querySelector('span').innerHTML.trim();
            console.log(that.p_num);
          }
        }

      },

      onChangeMark() {
        let that=this;
        let lis = document.querySelectorAll('.mark_list li');
        for (let i = 0; i < lis.length; i++) {
          lis[i].onclick = function () {
            for (let j = 0; j < lis.length; j++) {
              lis[j].className = '';
            }
            this.className = 'active';
            that.p_mark=that.p_mark+'  '+this.querySelector('span').innerHTML.trim();
            console.log(that.p_mark);
          }
        }

      },
      addPeopleInfo(){
        let api=this.api+'api/addPeopleInfo';
        Axios.post(api,{
          uid:'b001',
          p_num:this.p_num,
          p_mark:this.p_mark
        }).then( response=>{
          console.log(response);
          if (response.data.success) {
            this.$router.push({path:'home'});
          }
        })
          .catch( err=>{
            console.log(err);
          })
      }
    },
    mounted() {
      for (let i = 0; i < 12; i++) {
        this.userList.push(i+1+'人');
      }
      this.$nextTick(function () {
        this.onChangeList();
        this.onChangeMark();
      })

    }
  }
</script>

<style lang="scss">

  .start_content {
    .start_header {
      height: 3.2rem;
      line-height: 3.2rem;
      width: 10rem;
      margin: 5rem auto 0 auto;
      background: #000;
      color: #fff;
      border-radius: .5rem;

      img {
        height: 2.2rem;
        line-height: 2.2rem;
        position: relative;
        top: .5rem;
        margin-left: 1rem;
      }
    }

    .notice {
      color: red;
      text-align: center;
      margin: .8rem 0;
    }

    .mark {
      padding: 1rem;
      text-align: center;

      .mark_text {
        width: 90%;
        height: 3rem;
        line-height: 3rem;
        border: 1px solid #eee;
        border-radius: .5rem;
      }
    }

    .user_list, .mark_list {
      display: flex;
      flex-wrap: wrap;
      padding: .5rem;

      li {
        width: 25%;
        padding: .6rem;
        box-sizing: border-box;

        span {
          display: block;
          width: 100%;
          height: 3.2rem;
          line-height: 3.2rem;
          text-align: center;
          background: #fff;
          border-radius: .5rem;
          border: 1px solid #ccc;
        }

      }

      li.active {
        span {
          color: #fff;
          background: red;
        }
      }

    }
  }

  .start {
    position: fixed;
    left: 50%;
    margin-left: -3rem;
    bottom: 6rem;
    background: red;
    width: 7rem;
    height: 7rem;
    color: #fff;
    border-radius: 50%;

    span {
      display: block;
      width: 3.4rem;
      margin: 0 auto;
      position: relative;
      top: 2rem;
      padding-left: 1rem;
    }
  }
</style>
