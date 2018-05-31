<template>
    <div class="main-page">
        <!-- 去掉：:city="city" 使用Vuex -->
        <v-header></v-header>
        <!-- <v-header :city="city"></v-header> -->

        <div class="container">
            <v-swiper :list="swiperList"></v-swiper>
            <v-quickEnter :list="quickEnterList"></v-quickEnter>
            <v-hotWeek :hotSwiper="hotSwiper"></v-hotWeek>
            <v-recommend :list="recommendList"></v-recommend>
            <v-weekend :list="weekendList"></v-weekend>
        </div>

        <v-footer></v-footer>
    </div>
</template>

<script>
import axios from 'axios'
import header from '@/components/home/header'
import homeSwiper from '@/components/home/swiper'
import quickEnter from '@/components/home/quick-enter'
import hotSwiper from '@/components/home/hotWeek'
import Recommend from '@/components/home/recommend'
import weekend from '@/components/home/weekend'
import footer from '@/components/footer/footer'
export default {
    name: 'App',
    components: {
        'v-header': header,
        'v-swiper': homeSwiper,
        'v-quickEnter': quickEnter,
        'v-hotWeek': hotSwiper,
        'v-recommend': Recommend,
        'v-weekend': weekend,
        'v-footer': footer
    },
    data() {
        return {
            // city: '',  // 去掉：:city="city" 使用Vuex
            swiperList: [],
            quickEnterList: [],
            hotSwiper: [],
            recommendList: [],
            weekendList: []
        }
    },
    created() {
        axios.get('/api/index.json').then((res) => {
            res = res.data
            if (res.ret && res.data) {
                res = res.data
                console.log(res)
                // this.city = res.city  // 去掉：:city="city" 使用Vuex
                this.swiperList = res.swiperList
                this.quickEnterList = res.quickEnterList
                this.hotSwiper = res.hotSwiper
                this.recommendList = res.recommendList
                this.weekendList = res.weekendList
            }
        })
    }
}
</script>

<style lang="less" scoped>
.main-page {
    background: #f5f5f5;
}
</style>
