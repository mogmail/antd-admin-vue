 <template>
  <div class="main">
    <tags />
    <div class="contents">
      <!-- <transition name="fade-transform" mode="out-in"> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
import Tags from "./Tags.vue";
export default {
  components: {
    Tags
  }
};
</script>
<style>
.main{
    width: calc(100vw - 300px);
    height: calc(100vh - 100px);
    background-color: yellow;
    position: absolute;
    top: 100px;
    left: 300px;
}
</style>