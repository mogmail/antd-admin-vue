import { reactive } from 'vue'

const common = {
    collapsed: false,
    setCollapsedAction(newValue) {
        this.collapsed = newValue
    }
}

export default reactive(common)