<template>
    <div class="hot-week">
        <div class="title">
            <i class="iconfont icon-icon-test"></i>
            <span class="hot-title">本周热门榜单</span>
        </div>
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item in hotSwiper" :key="item.id">
                <div class="img-box">
                    <div class="tag-box">
                        <img :src="item.tagUrl" alt="">
                    </div>
                    <img class="swiper-img" :src="item.imgUrl" alt="">
                </div>
                <div class="info">
                    <p class="sight">{{ item.sight }}</p>
                    <p class="price"><em class="mpg-price">￥{{ item.price }}</em>起</p>
                </div>
            </swiper-slide>
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
                slidesPerView: 3.5
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
        margin-top: 12px;
        padding: 0 14px 10px;
        background: #fff;
        .title {
            position: relative;
            padding: 12px 0;
            .hot-title,
            .iconfont {
                display: inline-block;
                vertical-align: middle;
            }
            .iconfont {
                color: #ff654d;
                font-size: 20px;
            }
        }
        .img-box {
            position: relative;
            width: 100px;
            height: 100px;
            .tag-box {
                position: absolute;
                top: 0;
                left: 0;
                width: 42px;
                img {
                    display: block;
                    width: 100%;
                }
            }
            .swiper-img {
                width: 100%;
            }
        }
        .info {
            margin-top: 12px;
            width: 100px;
            .sight {
                font-size: 12px;
                text-align: center;
                line-height: 16px;
                .ellipsis();
            }
            .price {
                color: #616161;
                font-size: 12px;
                line-height: 18px;
                text-align: center;
                .mpg-price {
                    color: #ff8300;
                }
            }
        }
    }
</style>
