<template>
    <div class="city-header">
        <div class="head">
            <div class="return">
                <i class="iconfont icon-fanhui"></i>
            </div>
            <div class="title">城市选择</div>
        </div>
        <div class="city-search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
    </div>
</template>

<script>
export default {
    name: 'city-header'
}
</script>

<style lang="less" scoped>
@import "~styles/variables.less";
@import "~styles/mixins.less";
.city-header {
    background: @headerColor;
    .head {
        position: relative;
        color: #fff;
        .return {
            position: absolute;
            top: 0;
            left: 0;
            width: 44px;
            height: 44px;
            line-height: 44px;
            text-indent: 10px;
            .iconfont {
                font-size: 20px;;
                font-weight: bold;
            }
        }
        .title {
            margin: 0 44px;
            font-size: 16px;
            line-height: 44px;
            text-align: center;
            .ellipsis();
        }
    }
    .city-search {
        padding: 0 10px 10px;
        .search-input {
            .box-sizing(border-box);
            color: #616161;
            text-align: center;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            outline: none;
            box-shadow: none;
            .ellipsis();
        }
    }
}
</style>
