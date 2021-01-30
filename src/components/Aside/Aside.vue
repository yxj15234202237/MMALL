<template>
    <div class="aside">
        <el-menu
                default-active="/index/home"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#32323A"
                text-color="#fff"
                active-text-color="#fff"
                router
        >
            <el-menu-item index="/index/home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/index/goods">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>商品</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/index/goods/shopAdmin">商品管理</el-menu-item>
                    <el-menu-item index="1-2">品类管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">订单管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">用户列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "" ,
        components: {} ,
        data() {
            return {
                username:""
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
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
    /deep/.el-submenu , .el-menu-item {
        color: #fff;
        text-align: left;
    }
    .is-active{
        background-color: #2DAFCB !important;
    }
    .el-menu{
        border-right: 1px solid #32323A;
    }
</style>
