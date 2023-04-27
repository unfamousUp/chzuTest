<template>
  <div id="root">
    <!-- <Main>
    </Main> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Main from './components/Main'
  export default {
    name: 'App',
    components: {
      Main
    },
    data() {
      return {

      }
    },
    methods: {
      toLogin() {
        const name = "toLogin"
        this.$router.push({
          name: name
        })
      },
      toPicture(){
        const name = "toPicture"
        this.$router.push({
          name: name
        })
      }
    },
    mounted() {
      this.toLogin();
      // this.toPicture();
    },
  }
</script>

<style>
  html,
  body {
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    /* background-color: pink; */
  }
</style>