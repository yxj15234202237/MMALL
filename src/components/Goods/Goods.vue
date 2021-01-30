<template>
    <div class="goods">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "" ,
        components: {} ,
        data() {
            return {}
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
    .goods{
        width: 100%;
        height: 100%;
    }

</style>
