<template>
  <div id="computedBox">
      <!-- 使用拼接的方法，可读性不佳，多个的话写起来繁琐 -->
      <h2>{{firstName + ' ' + lastName}}</h2>
      <h2>{{firstName}} {{lastName}}</h2>
      <!-- 可以调用方法显示，不过不够简洁 -->
      <h2>{{getFullName()}}</h2>
      <!-- 计算属性，直接mustache语法显示新的值 -->
      <h2>{{fullName}}</h2>
      <ul>
          <li v-for="(item,index) in books" :key="index">{{item.name}}</li>
      </ul>
      <h2>总价：{{totalPrise}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
       firstName:'Lit',
       lastName:'Jenney',
       books:[
           {
               id:1,name:'明日',prise:150
           },
           {
               id:2,name:'喜洋洋灰太狼',prise:197
           },
           {
               id:3,name:'网球小子',prise:200
           },
           {
               id:4,name:'灌篮高手',prise:130
           }
       ]
    };
  },
//   计算属性，是一个属性
  computed:{
      fullName(){
          return this.firstName + ' ' + this.lastName
      },
      totalPrise(){
          let res = 0 ;
        //   for循环
        //   for (let i=0; i<this.books.length;i++){
        //       res += this.books[i].prise
        //   }

        // for in遍历的是数组的索引（即键名），
          for(let i in this.books){
              // console.log(i)  //索引 0 1 2 3
              // console.log(this.books[i].prise)
              // 取值还需要this.books[i]
              res += this.books[i].prise
          }
          
          //而for of遍历的是数组元素值。直接出来每个对象的value
          // for(let i of this.books){
            //   console.log(i.prise)
            //  res += i.prise
          // }
          return res
      }
  },
  methods:{
    //   通过方法获取值，里面的值需要加this
      getFullName(){
          return this.firstName + ' ' + this.lastName
      }
  }
};
</script>

<style scoped>

</style>
