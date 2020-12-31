<template>
  <div class="header">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
  </div>
</template>
<script>
import store from '@/store/index.js'
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  data(){
      return {
          collapsed: store.state.collapsed
      }
  },
  methods: {
    toggleCollapsed() {
      store.setCollapsedAction(!store.state.collapsed)
    }
  }
};
</script>
<style>
.header {
  width: calc(100vw - 300px);
  height: 100px;
  background-color: aqua;
  position: absolute;
  top: 0;
  right: 0;
}
</style>