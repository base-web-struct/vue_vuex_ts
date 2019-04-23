<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/imgs/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {

  created ():void {
    this.$store.dispatch('home/setId').then(res => {
      console.log(res)
    })
  }
}
</script>
