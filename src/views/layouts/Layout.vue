<template>
  <div class="wrapper">
    <Aside class="aside-container" />
    <div class="main-container">
       <!-- :class="isCollapse==true?'container_collapse':''" -->
      <Header />
      <Main />
    </div>
  </div>
</template>
<script>
import Aside from "@/views/components/Aside";
import Header from "@/views/components/Header.vue";
import Main from "@/views/components/Main.vue";
// import { mapState } from "vuex";
export default {
  name: "Layout",
  components: {
    Aside,
    Header,
    Main
  },
  computed: {
    // ...mapState(["isCollapse"])
  },
  mounted(){
    
  }
};
</script>
<style>
.wrapper{
  margin: 0;
  background-color: #f7f7f7;
}
</style>

