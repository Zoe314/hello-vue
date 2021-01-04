<template>
  <div id="eg">
      <p>v-bind绑定style:封装组件时，
          公共组件可以绑定值，使用的人根据自己要用的颜色样式，传值。
          来达到不同的效果。</p>
      <!-- <h2 :style="key(属性值，如font-size):value(属性值，如40px)">{{msg}}</h2> -->
      <!-- 有对象和数组两种方式，在对象中，50px必须带引号，如果不然会看做变量 -->
      <h3>对象方式</h3>
      <!-- <h2 :style="{fontSize:'50px'}">{{msg}}</h2> -->
      <!-- finalSize和finalColor 当做变量使用 ，别人使用是可以传不同的参数，来自定义使用-->
      <h2 :style="{fontSize:finalSize+'px',backgroundColor:finalColor}">{{msg}}</h2>
      <!-- 通过方法绑定style -->
      <h2 :style="getStyle()">{{msg}}</h2>

      <hr>
      <h3>数组方式</h3>
      <!-- 不能加引号，在此的数组中放的应是多个对象，而baseStyle,baseStyle1就是对象，可以随意写样式 -->
        <p :style="[baseStyle,baseStyle1]">{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "eg",
  data() {
    return {
       msg:'helle world',
        finalSize:100,
        finalColor:'red',
        baseStyle:{
            fontSize:'40px'
        },
        baseStyle1:{
            color:'blue'
        }
    };
  },
  methods:{
    //   通过方法绑定style，记得加this
      getStyle(){
          return {fontSize:this.finalSize+'px',backgroundColor:this.finalColor}
      }
  }
};
</script>

<style scoped>

</style>
