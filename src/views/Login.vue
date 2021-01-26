<template>
    <div class="login">
        <div class="login_cont">
            <div>
                欢迎登录 - MMALL管理系统
            </div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item  prop='username' >
                    <el-input type="password" v-model="ruleForm.username" autocomplete="off" placeholder="User Name"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="Password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "" ,
        components: {} ,
        data() {
            var username = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }
                callback()
            };
            var password = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }
                    callback();
            };
            return {
                ruleForm: {
                    username:'admin',
                    password:'admin'
                },
                rules: {
                    username: [
                        { validator: username, trigger: 'blur' }
                    ],
                    password: [
                        { validator: password, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                       this.$http.login(this.ruleForm).then((res) =>{
                           console.log( res );
                           if ( res.data.status === 0 ){
                               this.$message.success("登录成功")
                               sessionStorage.setItem('users' , JSON.stringify(res.data.data))
                               this.$router.push("/index")
                           }
                       })
                    } else {
                       this.$message.error("账号或者密码错我")
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
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
    .login{
        width: 100%;
        height: 100%;
        background-color: #EEEEEE;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login_cont{
        width: 489px;
        background-color: #fff;
        border-radius: 6px;
        &>div{
            background-color: #f5f5f5;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
    }
    .el-form{
        padding: 10px;
    }
    .el-input{
        margin-top: 10px;
    }
    .el-button{
        width: 100%;
        padding: 15px ;
        margin-top: 10px;
        border-radius: 10px;
    }
</style>
