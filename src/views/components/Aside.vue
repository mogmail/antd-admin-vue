<template>
  <div class="aside">
    <div class="title">标题</div>
     <!-- <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button> -->
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <PieChartOutlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <DesktopOutlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <InboxOutlined />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span><MailOutlined /><span>Navigation One</span></span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span><AppstoreOutlined /><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import Store from '@/store/store'
// reactive,
import { computed, inject,  ref, toRefs, watchEffect } from 'vue'
import {
  // MenuFoldOutlined,
  // MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    // MenuFoldOutlined,
    // MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  data() {
    return {
      collapsed: Store.state.collapsed,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val, oldVal) {
      this.preOpenKeys = oldVal;
    },
  },
  mounted(){
    console.log(this.Store)
  },
   setup(){
    const memberData = inject('memberData')
    const homeData = inject('homeData')
    const userInfo = inject('userInfo') // 模块内部组合响应式变量  getUserInfo 方法
    // watch 页面组合两个响应式变量
    const nameAndAge = ref('')
    watchEffect(()=>{
      nameAndAge.value =  memberData.age + homeData.name
    })
    // computed 页面组合两个响应式变量
    const nameAgeComputed = computed(() =>  memberData.age + homeData.name)

    const data = {...toRefs(memberData),...toRefs(homeData),...toRefs(userInfo), nameAndAge,nameAgeComputed}
    return data
  },
  methods: {
    // toggleCollapsed() {
    //   this.collapsed = !this.collapsed;
    //   this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    // },
  },
};
</script>
<style>
.aside{
  width: 300px;
  height: 100vh;
  background-color: #001529;
  position: absolute;
  top: 0;
  left: 0;
}
.title{
  text-align: center;
  color: #ffffff;
  font-size: 36px;
}
</style>