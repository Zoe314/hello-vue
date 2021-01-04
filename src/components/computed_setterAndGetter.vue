<template>
  <div class="computedBox">
    <!-- 计算属性，直接mustache语法显示新的值 -->
    <h2>{{fullName}}</h2>
<!-- 如果没有别的操作，可以直接写到方法中 -->
    <h2>{{count}}</h2>
    <!-- <button v-on:click="count++">+</button>
    <button v-on:click="count--">-</button> -->
    <!-- 简写 v-on:click 简写为@click -->
    <!-- <button @click="count++">+</button>
    <button @click="count--">-</button> -->
    <!-- 方法,若无参数，方法后可以不加()小括号 -->
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
<!-- 可以换成 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Lit",
      lastName: "Jenney",
      count:0
    };
  },
  //   计算属性，是一个属性
  computed: {
    //   简写形式
    //   fullName(){
    //       return this.firstName + ' ' + this.lastName
    //   },
    // name:'haha',
    // 全部的计算属性应是这么写的：
    fullName: {
      // 计算属性一般是没有set方法，只读属性
      get: function () {
          console.log('执行get')
        return this.firstName + " " + this.lastName;
      },
      //   如果想设置值，就要写上setter
      set: function () {
        console.log("set方法执行---------");
        // const name = newValue.split(" ");
        // // console.log(name);
        // this.firstName = name[0];
        // this.lastName = name[1];
      },
    },
    // 只有get方法，所以可以简写
    // fullName: function () {
    //   return this.firstName + " " + this.lastName;
    // },
  },
  methods: {
    increase(){
      this.count++;
    },
    decrease(){
      this.count--;
    }
  },
};

</script>

<style scoped>
</style>
