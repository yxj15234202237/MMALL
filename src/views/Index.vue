<template>
    <div class="index">
        <el-container>
            <el-header>
                <div>
                    HAPPY <span>MMALL</span>
                </div>
                <div>
                    欢迎，<span>{{ username }}</span>
                    <el-button @click="quit" >退出</el-button>
                </div>
            </el-header>
            <el-container>
                <el-aside width="250px">
                    <Aside></Aside>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Aside from "../components/Aside/Aside";
    export default {
        name: "" ,
        components: { Aside } ,
        data() {
            return {
                username: ""
            }
        },
        methods: {
            quit(){
                this.$notify({
                    title: '退出成功',
                    message: '您已退出',
                    type: 'success',
                    duration: 1500
                });
                sessionStorage.removeItem("users")
                this.$router.push("/login")
            }
        },
        mounted(){
            let user = JSON.parse(sessionStorage.getItem('users'))
            this.username = user.username
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    .index{
        width: 100%;
        height: 100%;
    }
    .el-aside {
        background-color: #32323A;
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }

     .el-container {
         width: 100%;
         height: 100%;
    }
    .el-header{
        display: flex;
        &>div:nth-of-type(1){
            background-color: #32323A;
            color: #2DAFCB;
            width: 250px;
            font-size: 24px;
            line-height: 60px;
            padding-left: 20px;
            &>span{
                color: #fff;
            }
        }
        &>div:nth-of-type(2){
            padding-right: 30px;
            flex: 1;
            text-align: right;
            line-height: 55px;
            &>.el-button{
                border: none;
                margin-left: 10px;
            }
        }
    }
</style>
