<template>
  <div id="back">
    <div class="back" @click="back()">返回</div>
  </div>
</template>

<script>
    export default {
        data(){
          return{

          }
        },
      methods:{
        back(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped lang="scss">
  .back{
    width: 3.8rem;
    height: 3.8rem;
    line-height: 3.8rem;
    background: #000;
    color: #fff;
    border-radius: 50%;
    top: .5rem;
    left: .5rem;
    position: fixed;
  &:before{
     content: '';
     height: .8rem;
     width: .8rem;
     display: inline-block;
     border-left: 2px solid #fff;
     border-bottom: 2px solid #fff;
     transform: rotate(45deg);
     margin-left: .4rem;
     margin-right: -.2rem;
   }
  }
</style>
