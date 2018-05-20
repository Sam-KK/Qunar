<template>
    <div>
        <v-header :city="city"></v-header>

        <div class="container">
            <v-swiper :list="swiperList"></v-swiper>
            <v-quickEnter :list="quickEnterList"></v-quickEnter>
            <v-recommend :list="recommendList"></v-recommend>
            <v-weekend :list="weekendList"></v-weekend>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import header from '@/components/home/header'
import homeSwiper from '@/components/home/swiper'
import quickEnter from '@/components/home/quick-enter'
import Recommend from '@/components/home/recommend'
import weekend from '@/components/home/weekend'
export default {
    name: 'App',
    components: {
        'v-header': header,
        'v-swiper': homeSwiper,
        'v-quickEnter': quickEnter,
        'v-recommend': Recommend,
        'v-weekend': weekend
    },
    data() {
        return {
            city: '',
            swiperList: [],
            quickEnterList: [],
            recommendList: [],
            weekendList: []
        }
    },
    created() {
        axios.get('/api/index.json').then((res) => {
            res = res.data
            if (res.ret && res.data) {
                res = res.data
                this.city = res.city
                this.swiperList = res.swiperList
                this.quickEnterList = res.quickEnterList
                this.recommendList = res.recommendList
                this.weekendList = res.weekendList
                console.log(this.city)
            }
        })
    }
}
</script>

<style lang="less" scoped>

</style>
