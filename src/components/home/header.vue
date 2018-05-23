<template>
    <div class="header">
        <div class="home-return">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="home-input">
            <a class="home-link" href="">
                <i class="iconfont icon-search"></i>
                <span class="placeholder">输入城市/景点/游玩主题</span>
            </a>
        </div>
        <!--<div class="home-city">-->
            <router-link tag="div" to="/city" class="home-city">
                <span>{{ this.$store.state.city }}</span>
                <i class="iconfont icon-xiajiantou"></i>
            </router-link>
        <!--</div>-->
    </div>
</template>

<script>
export default {
    name: 'homeHeader'
    // props: {  // 去掉：:city="city" 使用Vuex
    //     city: String
    // }
}
</script>

<style lang="less" scoped>
    @import "~styles/variables.less";

    .header {
        display: flex;
        color: #fff;
        background: @headerColor;
        .home-return {
            padding-left: 10px;
            width: 34px;
            height: 44px;
            line-height: 44px;
            .iconfont {
                font-size: 20px;;
                font-weight: bold;
            }
        }
        .home-input {
            flex: 1;
            box-flex: 1;
            height: 30px;
            line-height: 30px;
            margin: 7px 0;
            padding-left: 10px;
            background: #fff;
            border-radius: 4px;
            .home-link {
                color: #e4e7ea;
            }
        }
        .home-city {
            line-height: 44px;
            padding: 0 12px;
            color: #fff;
        }
    }
</style>
