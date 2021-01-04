<template>
  <div class="hello">
    <h3>v-bind使用</h3>
    <p>一般的显示</p>
    <a href="http://www.baidu.com">去百度</a>
    <img
      src="https://img-blog.csdnimg.cn/images/-402845201200901125411855.png"
      alt="一般显示图片"
      title="一般显示图片"
    />
    <p>绑定属性的显示</p>
    <a :href="bai">v-bind去百度</a>
    <img :src="imgUrl" alt="v-bind显示" title="v-bind显示" />
    <hr />
    <!-- 直接绑定一个值，使用v-bind  简写为 :   -->
    <p :class="line">{{msg}}</p>
    <!-- 对象写法 -->
    <p :class="{'line':aline,'active':active}">hello</p>
    <!-- 完善对象写法，可以写方法methods/computed,以简便书写方式 , 一般的class写法与vue中的绑定可以共存 -->
    <p class="title" :class="getClass()">world</p>
    <button  @click="change()">点击改变</button>
    <br />
    <!-- 数组中这么写，其实无太大意义，类名会是title.a,b三个 ，可以直接都写在外边的class，无需用绑定值 -->
    <p class="title" :class="['a','b']">数组方式</p>
    <!-- 数组中写成变量形式，class为title,aaaa,bbbb -->
    <p class="title" :class="[a,b]">数组方式</p>
    <p class="title" :class="getArrClass()">同样可以使用方法调用的方式绑定值</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      line: "a",
      aline: true,
      active: true,
      imgUrl:
        "https://img-blog.csdnimg.cn/images/-402845201200901125411855.png",
      bai: "http://www.baidu.com",
      a: "aaaa",
      b: "bbbb",
    };
  },
  methods: {
    change() {
      this.active = !this.active;
    },
    getClass() {
      // 在这里调用data中数据，要加this
      return { line: this.aline, active: this.active };
    },
    getArrClass() {
      // 在这里调用data中数据，要加this
      return [this.a, this.b];
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
.line {
  font-size: 30px;
}
.title {
  font-weight: 800;
}
.a {
  font-size: 40px;
  color: pink;
}
</style>
