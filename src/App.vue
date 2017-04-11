<template>
  <div id="app">
    <search></search>
    <mynav></mynav>
  </div>
</template>

<script type="es6">
  import search from './components/search'
  import mynav from './components/nav'
  export default {
    name: 'app',
    components: {
      search,mynav
    }
  }
</script>



<style>
#app {
	width: 100%;
	height: 100vh;
	max-width: 640px;
	min-width: 300px;
	margin: 0 auto;
	position: relative;
}
body{
	margin: 0;
	background: #e5e5e5;
	font-size: 14px;
}
</style>
