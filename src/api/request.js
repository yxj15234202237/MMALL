import request from "./http"
import qs from "qs"
//  登录接口
function login(data) {
    return request({
        url: "/user/login.do",
        method: "post",
        data: qs.stringify(data)
    })
}

// 商品管理数据
function goodsList(data) {
    return request({
        url: "/product/list.do?"+data,
        method: 'get',
    })
}

//  商品的上架与下架
function buy(data) {
    return request({
        url: "/product/set_sale_status.do?"+qs.stringify(data),
        method: 'get'
    })
}

// 导出
export default {
    login,
    goodsList,
    buy
}
