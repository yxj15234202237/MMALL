import axios from "axios";
import { Loading , Message } from "element-ui"
var instance = axios.create({
    baseURL: '/api',
    withCredentials:true
});

let loading;
//请求拦截器 在发送请求之前自动的执行
instance.interceptors.request.use(
    config =>{
        loading = Loading.service({
            text: "Loading...",
            background: 'rgba(0,0,0,0.7)'
        })
        //alert('数据在加载的路上')
        //获取到token值
        // var users = JSON.parse( sessionStorage.getItem("users") )|| {}
        // console.log( users )
        // if( users.remember_token ){
        //     //附加到请求头上
        //     config.headers.authorization ="Bearer " + users.remember_token
        // }
        console.log(document.cookie)
        return config;
    }
);

//响应拦截器 在拿到响应数据之后但是没有渲染之前执行
instance.interceptors.response.use(
    response=>{
        //写自己的一些代码
        loading.close()
        return response
    },

);

//  导出instance
export default instance
