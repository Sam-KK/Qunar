<template>
    <div class="city-list">
        <h2 class="title">当前城市</h2>
        <ul class="current-list">
            <li>北京</li>
        </ul>
        <h2 class="title">热门城市</h2>
        <ul class="mp-list mp-tr3">
            <li>
                <a href="">北京</a>
            </li>
            <li>
                <a href="">北京</a>
            </li>
            <li>
                <a href="">北京</a>
            </li>
            <li>
                <a href="">北京</a>
            </li>
        </ul>
        <h2 class="title">字母排序</h2>
        <ul class="character-list mp-tr6">
            <li>
                <a href="">A</a>
            </li>
            <li>
                <a href="">B</a>
            </li>
            <li>
                <a href="">C</a>
            </li>
            <li>
                <a href="">D</a>
            </li>
            <li>
                <a href="">E</a>
            </li>
            <li>
                <a href="">F</a>
            </li>
            <li>
                <a href="">G</a>
            </li>
        </ul>
        <h2 class="title">A</h2>
        <ul class="mp-list mp-tr4">
            <li>
                <a href="">阿坝藏族羌族自治州</a>
            </li>
            <li>
                <a href="">阿坝藏族羌族自治州</a>
            </li>
            <li>
                <a href="">阿坝藏族羌族自治州</a>
            </li>
            <li>
                <a href="">阿坝藏族羌族自治州</a>
            </li>
            <li>
                <a href="">阿坝藏族羌族自治州</a>
            </li>
            <li>
                <a href="">阿坝藏族羌族自治州</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'city-list'
}
</script>

<style lang="less" scoped>
@import "~styles/variables.less";
@import "~styles/mixins.less";
.city-list {
    .title {
        padding: 12px 16px;
        font-size: 12px;
        background: #f5f5f5;
    }
    .current-list {
        clear: both;
        overflow: hidden;
    }
    li {
        float: left;
        height: 44px;
        line-height: 44px;
        text-align: center;
        a {
            display: block;
            color: @gray-dark;
            .ellipsis();
        }
    }
    .mp-list {
        position: relative;
        clear: both;
        overflow: hidden;
        &:before,
        &:after {
            position: absolute;
            content: '';
            height: 100%;
        }
        &:before {
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
        }
        &.mp-tr3 {
            &:before {
                width: 33.33%;
                left: 33.33%;
            }
            li {
                width: 33.33%;
                border-bottom: 1px solid #ddd;
            }
        }
        &.mp-tr4 {
            &:before {
                width: 25%;
                left: 25%;
            }
            &:after {
                left: 75%;
                border-left: 1px solid #ddd;
            }
            li {
                width: 25%;
                border-bottom: 1px solid #ddd;
            }
        }
        li {
            margin-bottom: -1px;
            border-bottom: 1px solid #ddd;
        }
    }
    .character-list {
        position: relative;
        clear: both;
        overflow: hidden;
        li {
            width: 16.66%;
            z-index: 10;
            color: #212121;
        }
    }
}
</style>
