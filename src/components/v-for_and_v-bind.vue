<template>
  <div id="eg">
      <ul>
          <li
           v-for="(m,i) in movies" 
           :key="i" 
           @click="tip(i)"
           :class="color"
          >{{i}} {{m}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "eg",
  data() {
    return {
        movies:[
            '大长今',
            '还珠格格',
            '大神探',
            '西游记',
            '水浒传',
        ],
        color:'active'
    };
  },
  methods:{
      tip(i){
          alert('index'+i)
      }
  }
};
</script>

<style scoped>
.active{
    color: red;
}
</style>
