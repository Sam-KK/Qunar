<template>
    <div class="city-list" ref="wrapper">
        <div class="city-container">
            <h2 class="title">当前城市</h2>
            <ul class="current-list">
                <!-- <li>{{ this.$store.state.city }}</li> -->
                <li>{{ city }}</li>
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
                <ul class="mp-list">
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
import {mapGetters} from 'vuex'
export default {
    name: 'city-list',
    props: {
        cities: Object,
        hot: Array
    },
    computed: {
        ...mapGetters(['city'])
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
        z-index: 2;
        position: relative;
        float: left;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: @gray-dark;
        .ellipsis();
    }
    .mp-list {
        z-index: 0;
        position: relative;
        clear: both;
        overflow: hidden;
        background: #fff;
        &:before,
        &:after {
            position: absolute;
            content: '';
            height: 100%;
        }
        &:before {
            width: 25%;
            left: 25%;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
        }
        &:after {
            left: 75%;
            /*width: 25%;*/
            height: 100%;
            border-left: 1px solid #ddd;
            border-right: 0;
        }
        li {
            width: 25%;
            margin-bottom: -1px;
            border-bottom: 1px solid #ddd;
            .ellipsis();
        }
        &.mp-tr3 {
            &:before {
                width: 33.33%;
                left: 33.33%;
            }
            &:after {
                display: none;
            }
            li {
                width: 33.33%;
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
