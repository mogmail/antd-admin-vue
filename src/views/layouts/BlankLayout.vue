<template>
<!-- ant-design-vue版本和vue3.0冲突 待解决 -->
  <div>
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo" >
          <img src="" />
        </div>
        <a-menu
          theme="light"
          mode="horizontal"
          :default-selected-keys="[selectIndex == -1 ? '1' : menuList[selectIndex].pkey.toString()]"
          :style="{ lineHeight: '60px' }"
          @click="selectMenu"
          class=""
        >
          <a-menu-item key="1">
            首页
          </a-menu-item>
          <a-menu-item key="2">
            用户管理
          </a-menu-item>
          <a-menu-item key="3">
            店铺管理
          </a-menu-item>
          <a-menu-item key="4">
            订单管理
          </a-menu-item>
          <a-menu-item key="5">
            财务管理
          </a-menu-item>
          <a-menu-item key="6">
            数据统计
          </a-menu-item>
          <a-menu-item key="7">
            平台管理
          </a-menu-item>
          <a-menu-item key="8">
            权限管理
          </a-menu-item>
          <a-menu-item key="9">
            系统管理
          </a-menu-item>
        </a-menu>
        <right-content :top-menu="settings.layout === 'topmenu'" :is-mobile="isMobile" :theme="settings.theme" />
      </a-layout-header>
      <a-layout style="min-height: calc(100vh - 60px)">
        <a-layout-sider v-if="submenu.length > 0" width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :default-selected-keys="defaultSelectedKeys"
            :selectedKeys="selectedKeys"
            :style="{ height: '100%', borderRight: 0 }" 
            @click="titleClick"
          >
            <a-menu-item v-for="item in submenu" :key="item.key.toString()" style="height: 60px;line-height: 60px">{{item.title}}</a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <!-- <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item></a-breadcrumb-item>
          </a-breadcrumb> -->
          <a-layout-content
            :style="{ background: '#F4F5F5', padding: '10px', margin: 0, minHeight: '280px' }"
          >
             <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// import { SettingDrawer, updateTheme } from '@ant-design-vue/pro-layout'
// import RightContent from '@/components/GlobalHeader/RightContent'
// import { i18nRender } from '@/locales'
import { mapState } from 'vuex'
// import { CONTENT_WIDTH_TYPE, TOGGLE_MOBILE_TYPE } from '@/store/mutation-types'

// import defaultSettings from '@/config/defaultSettings'

export default {
  name: 'BlankLayout',
  components: {
    // SettingDrawer,
    // RightContent
  },
  data() {
    return {
      defaultSelectedKey: [],
      defaultSelectedKeys: [], //默认的二级路由即左侧
      selectedKeys: [],
      defaultOpenKeys: '',
      selectIndex: '0', //当前路由匹配menulist
      // collapsed: false,
      // base
      menuList: [
        {key: '1', pkey: '2', title: '车主管理', path: '/usermanage/carowner/list'},
        {key: '2', pkey: '2', title: '商家用户管理', path: '/usermanage/user/list'},
        {key: '3', pkey: '3', title: '店铺列表', path: '/shopmanage/shop/list'},
        {key: '4', pkey: '4', title: '订单列表', path: '/orderlist/list'},
        {key: '5', pkey: '5', title: '交易列表', path: '/finance/transaction'},
        {key: '6', pkey: '5', title: '提现列表', path: '/finance/withdraw/list'},
        {key: '7', pkey: '6', title: '平台统计', path: '/statistics/platform'},
        {key: '8', pkey: '6', title: '店铺统计', path: '/statistics/shop'},
        {key: '9', pkey: '6', title: '用户统计', path: '/statistics/user'},
        {key: '10', pkey: '7', title: '活动管理', path: '/platform/act'},
        {key: '11', pkey: '7', title: '会员卡管理', path: '/platform/member'},
        {key: '12', pkey: '7', title: '消息管理', path: '/platform/news'},
        {key: '13', pkey: '7', title: '用户反馈', path: '/platform/feedback'},
        {key: '14', pkey: '7', title: '首页banner管理', path: '/platform/banner'},
        {key: '15', pkey: '8', title: '成员管理', path: '/power/user'},
        {key: '16', pkey: '8', title: '操作日志', path: '/power/daily'},
        {key: '17', pkey: '9', title: '关于我们', path: '/system/about'},
        {key: '18', pkey: '9', title: '服务协议', path: '/system/agreement'},
      ],
      submenu: [],
      // 侧栏收起状态
      // collapsed: false,
      hideHintAlert: false,
      hideCopyButton: false,
      // 媒体查询
      query: {},

      // 是否手机模式
      isMobile: false
    };
  },

  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: state => state.permission.addRouters
    })
  },
  created () {
    const routes = this.mainMenu.find(item => item.path === '/')
    this.selectIndex = this.menuList.findIndex(item => item.path == this.$route.path)
    if(this.selectIndex == -1){
      this.submenu = []
    }else{
      this.submenu = this.menuList.filter(tem => tem.pkey == this.menuList[this.selectIndex].pkey)
    }
  
    this.menus = (routes && routes.children) || []
    this.defaultSelectedKeys = [this.submenu.length > 0 ? this.submenu[0].key : '']
    this.selectedKeys = [this.submenu.length > 0 ? this.submenu[0].key : '']

    // 处理侧栏收起状态
    // this.$watch('collapsed', () => {
    //   this.$store.commit(SIDEBAR_TYPE, this.collapsed)
    // })
    this.$watch('isMobile', () => {
      // this.$store.commit(TOGGLE_MOBILE_TYPE, this.isMobile)
    })
  },
  mounted () {
    // const userAgent = navigator.userAgent
    // if (userAgent.indexOf('Edge') > -1) {
    //   this.$nextTick(() => {
    //     this.collapsed = !this.collapsed
    //     setTimeout(() => {
    //       this.collapsed = !this.collapsed
    //     }, 16)
    //   })
    // }

    // first update color
    // TIPS: THEME COLOR HANDLER!! PLEASE CHECK THAT!!
    // if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
    //   updateTheme(this.settings.primaryColor)
    // }
  },
  methods: {
    // i18nRender,
    // 
    titleClick({ item, key, keyPath }){
      console.log('选择菜单', item, key, keyPath)
      let path = this.menuList.find(tem => tem.key == key).path
      this.selectedKeys = [ key.toString() ]
        // 获取到当前的key,并且跳转
      
      this.$router.push({
        path: path
      })
    },
    // 选择菜单
    selectMenu({ item, key, keyPath }){
      console.log('选择菜单', item, key, keyPath)
      let path = '/dashboard'
      this.submenu = []
      if(key != '1'){
        this.submenu = this.menuList.filter(tem => tem.pkey == key)
        // 获取到当前的key,并且跳转
        path = this.submenu[0].path
        this.selectedKeys = [this.submenu[0].key]
      }
      this.$router.push({
        path: path
      })
    },
    handleMediaQuery (val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        // this.collapsed = false
        // this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid
        // this.settings.fixSiderbar = false
      }
    },
    // handleCollapse (val) {
    //   this.collapsed = val
    // },
    handleSettingChange ({ type, value }) {
      type && (this.settings[type] = value)
      switch (type) {
        case 'contentWidth':
          this.settings[type] = value
          break
        case 'layout':
          if (value === 'sidemenu') {
            // this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid
          } else {
            this.settings.fixSiderbar = false
            // this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fixed
          }
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ant-layout-header{
  height: 60px;
  display: flex;
  padding: 0 50px 0 0;
  background: #3B80FF;
}
.header{
  .ant-menu{

    font-size: 17px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #3B80FF;
  }
  .ant-menu-horizontal{
    border-bottom: none;
  }
  .ant-menu-horizontal > .ant-menu-item-active{
    font-size: 17px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    border-bottom: none;
    margin-top: 0;
    top:-2px;
  }
  .ant-menu-horizontal > .ant-menu-item-selected{
    font-size: 17px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    background: #1D60D9;
    border-bottom: none;
    margin-top: 0;
    top:-2px;
  }
}

#components-layout-demo-top-side-2 .logo {
  width: 160px;
  height: 60px;
  float: left;
  img{
    width: 160px;
    height: 60px;
  }
}
</style>
