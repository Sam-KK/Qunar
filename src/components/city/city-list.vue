<template>
    <div class="city-list" ref="wrapper">
        <div class="city-container">
            <h2 class="title">当前城市</h2>
            <ul class="current-list">
                <li>{{ this.$store.state.city }}</li>
            </ul>
            <h2 class="title">热门城市</h2>
            <ul class="mp-list mp-tr3">
                <li v-for="item in hot" :key="item.id" @click="selectCity(item.name)">
                    {{ item.name }}
                </li>
            </ul>
            <h2 class="title">字母排序</h2>
            <ul class="character-list mp-tr6">
                <li v-for="(item, key) in cities" :key="key">
                    {{ key }}
                </li>
            </ul>
            <div class="character-item" v-for="(value, key) in cities" :key="key">
                <h2 class="title">{{ key }}</h2>
                <ul class="mp-list mp-tr4">
                    <li v-for="v in value" :key="v.id" @click="selectCity(v.name)">
                        {{ v.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'city-list',
    props: {
        cities: Object,
        hot: Array
    },
    methods: {
        selectCity(city) {
            this.$store.dispatch('changeCity', city)
            // 选择城市后跳转到首页
            this.$router.push('/')
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang="less" scoped>
@import "~styles/variables.less";
@import "~styles/mixins.less";
.city-list {
    overflow: hidden;
    position: absolute;
    top: 88px;
    left: 0;
    bottom: 0;
    width: 100%;
    .title {
        padding: 12px 16px;
        font-size: 12px;
        background: #f5f5f5;
    }
    .current-list {
        clear: both;
        overflow: hidden;
        li {
            width: 33.33%;
            text-align: center;
        }
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
        z-index: 0;
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
        li {
            margin-bottom: -1px;
            border-bottom: 1px solid #ddd;
        }
        &.mp-tr3 {
            &:before {
                width: 33.33%;
                left: 33.33%;
            }
            li {
                z-index: 10;
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
