<template>
    <div class="home-swiper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
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
.home-swiper .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: #fff;
    &.swiper-pagination-bullet-active {
        background: #fff
    }
}
.home-swiper {
    overflow: hidden;
    height: 0;
    padding-bottom: 26.67%;
    .swiper-img {
        width: 100%
    }
}

</style>
