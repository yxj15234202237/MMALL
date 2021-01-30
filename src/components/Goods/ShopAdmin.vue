<template>
    <div class="ShopAdmin">
        <header>
            <span>商品管理</span>
            <el-button>添加商品</el-button>
        </header>
        <div>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-input placeholder="关键字"></el-input>
            <el-button>查询</el-button>
        </div>
        <el-table
                :data="list"
                stripe
                style="width: 100%"
                border>
            <el-table-column
                    prop="id"
                    label="id"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="信息"
                    width="180">
                <template slot-scope="scope">
                    <p>
                        {{ scope.row.name }}
                    </p>
                    <p>
                         {{ scope.row.subtitle }}
                    </p>
                </template>
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
            >
                <template slot-scope="scope" >
                    <span>{{ scope.row.status == 2? '已下架' : '在售' }}</span>
                    <el-button @click="goods(scope.row.id , scope.row.status)" type="warning" size="mini" class="btn">{{ scope.row.status ==2? '上架' : '下架' }}</el-button>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作">
                <el-button class="btn1">查看</el-button>
                <el-button class="btn1">编辑</el-button>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @current-change="pagesize"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "" ,
        components: {} ,
        data() {
            return {
                options:[
                    {

                    }
                ],
                value:"",
                list:[],
                total:0,
                pageSize: 1
            }
        },
        methods: {
            getData() {
                this.$http.goodsList('pageNum='+ this.pageSize).then(( res ) =>{
                    console.log(res)
                    if(res.data.status === 0){
                        this.list = res.data.data.list
                        this.total = res.data.data.total
                    }
                })
            },
            pagesize(size){
                this.pageSize = size
                this.getData()
            },
            goods(id , status){
                let obj = {
                    productId: id,
                    status: status == 1? 2 : 1
                }
                if ( status === 2 ){
                    this.$confirm('确认要上架该商品吗？？？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$http.buy(obj).then(( res ) =>{
                            this.$message({
                                type: 'success',
                                message: res.data.data
                            });
                            this.getData()
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消修改'
                        });
                    });
                } else {
                    this.$confirm('确认要下架该商品吗？？？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$http.buy(obj).then(( res ) =>{
                            this.$message({
                                type: 'success',
                                message: res.data.data
                            });
                            this.getData()
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消修改'
                        });
                    });
                }

            }
        },
        mounted(){
            this.getData()
        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    .ShopAdmin{
        width: 100%;
        height: 100%;
        padding: 20px;
        background-color: #fff;
        &>div:nth-of-type(1){
            &>.el-input{
                width: 200px;
                margin: 10px;
            }
        }
    }
    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        &>span{
            font-size: 28px;
            color: #666;
        }
    }
    .el-button{
        border: none;
        color: #337;
        margin-left: 20px;
    }
    .btn1{
        background-color:  transparent;
    }
</style>
