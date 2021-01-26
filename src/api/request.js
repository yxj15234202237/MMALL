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

// 导出
export default {
    login
}
