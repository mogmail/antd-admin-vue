import { axios } from '@/utils/request'

var front = ''
if (process.env.NODE_ENV === 'development') {
    front = '/dev'
} else {
    front = '/api'
}

// 列表
export function List(parameter) {
    return axios({
        url: `${front}/list`,
        method: 'get',
        params: parameter
    })
}
// 提交
export function List(parameter) {
    return axios({
        url: `${front}/list`,
        method: 'post',
        data: parameter
    })
}
// 更新
export function Update(parameter) {
    return axios({
        url: `${front}/Update/${parameter.id}`,
        method: 'put',
        data: parameter
    })
}
// 删除
export function Delete(parameter) {
    return axios({
        url: `${front}/list/${parameter.id}`,
        method: 'delete'
    })
}