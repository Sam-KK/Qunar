<template>
    <div class="home-swiper" id="home-swiper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" width="100%" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'homeWwiper',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                loop: true,
                pagination: '.swiper-pagination'
            }
        }
    },
    computed: {
        showSwiper() {
            return this.list.length
        }
    }
}
</script>

<style lang="less" scoped>
#home-swiper /deep/ .swiper-container {
    height: 0;
    padding-bottom: 42.89%;
}

#home-swiper /deep/ .swiper-pagination-bullet {
    opacity: 1;
    width: 6px;
    height: 6px;
    background: rgb(0, 188, 212);
    &.swiper-pagination-bullet-active {
        background: #fff
    }
}
</style>
