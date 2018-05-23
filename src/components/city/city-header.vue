<template>
    <div class="city-header">
        <div class="head">
            <router-link tag="div" to="/" class="return">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <div class="title">城市选择</div>
        </div>
        <div class="city-search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-container" ref="wrapper" v-show="keyword">
            <ul class="search-box">
                <li class="search-item" v-for="item in list" :key="item.id" @click="selectCity(item.name)">{{ item.name }}</li>
                <li class="search-item" v-show="notSearchData">暂无数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'city-header',
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        notSearchData() {
            return !this.list.length
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {})
        })
    },
    methods: {
        selectCity(city) {
            this.$store.dispatch('changeCity', city)
            // 选择城市后跳转到首页
            this.$router.push('/')
        }
    },
    watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    }
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
    .search-container {
        z-index: 1;
        overflow: hidden;
        position: absolute;
        top: 88px;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #f5f5f5;
        .search-item {
            padding: 12px 14px;
            background: #fff;
            border-bottom: 1px solid #ddd;
        }
    }
}
</style>
