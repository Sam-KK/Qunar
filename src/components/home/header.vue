<template>
    <div class="header">
        <div class="home-return">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="home-input">
            <!-- <a class="home-link" href=""> -->
                <i class="iconfont icon-search"></i>
                <span class="placeholder">输入城市/景点/游玩主题</span>
            <!-- </a> -->
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
        align-items: center;
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
            padding: 0 10px;
            height: 30px;
            line-height: 30px;
            color: #e4e7ea;
            background: #fff;
            border-radius: 4px;
        }
        .home-city {
            padding: 0 12px;
            min-width: 48px;
            line-height: 44px;
            color: #fff;
            span,
            .iconfont  {
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
</style>
