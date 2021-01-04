<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="你好，世界"/> -->
    <!-- <ForAndBind /> -->
    <!-- <StyleDemo /> -->
    <!-- <ComputedDemo /> -->
    <ComputedSetAndGetDemo />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ForAndBind from './components/v-for_and_v-bind'
// import StyleDemo from './components/styleDemo'
// import ComputedDemo from './components/computedDemo'
import ComputedSetAndGetDemo from './components/computed_setterAndGetter'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ForAndBind,
    // StyleDemo,
    // ComputedDemo,
    ComputedSetAndGetDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
