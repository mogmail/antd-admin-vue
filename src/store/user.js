import { reactive } from 'vue'

const userData = {
    name: '',
    setName(value) {
        this.name = value
    }
}

export default reactive(userData)