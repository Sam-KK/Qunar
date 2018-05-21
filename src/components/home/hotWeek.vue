<template>
    <div class="hot-week">
        <div>本周热门榜单</div>
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item in hotSwiper" :key="item.id">
                <div class="img-box">
                    <img class="swiper-img" :src="item.imgUrl" alt="">
                </div>
                <div class="info">
                    <p>{{ item.sight }}</p>
                    <span>￥<em>{{ item.price }}起</em></span>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'hot-week',
    props: {
        hotSwiper: Array
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 3.5,
                pagination: '.swiper-pagination'
            }
        }
    },
    computed: {
        showSwiper() {
            return this.hotSwiper.length
        }
    }
}
</script>

<style type="text/less" lang="less" scoped>
    @import "~styles/variables.less";
    @import "~styles/mixins.less";
    .hot-week {
        padding: 0 14px;
        .img-box {
            width: 100px;
            height: 100px;
            img {
                width: 100%;
            }
        }
        .info {
            margin-top: 12px;
            p {
                font-size: 12px;
                text-align: center;
                .ellipsis();
            }
        }
    }
</style>
