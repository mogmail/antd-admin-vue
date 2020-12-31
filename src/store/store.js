import user from './user'
import common from './index'

const store = createStore({
    user,
    common
})

function createStore(parmas) {
    return {
      install(app) {
        this.provide(app)
      },
      provide(app) {
        const keys = parmas&&Object.keys(parmas)
        keys&&keys.forEach((item) => { 
          // 注册
          app.provide(item,parmas[item])
        })
      }
    }
  }

export default store