<template>
    <div class="detail">
        <div class="detail-header" :style="opacity" v-show="!showAbsolute">
            <router-link tag="div" to="/" class="header-back">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <h1 class="detail-header-title">上海玛雅海滩水公园</h1>
        </div>
        <div class="banner" @click="bannerClick">
            <router-link to="/" tag="div" class="detail-back" v-show="showAbsolute">
                <i class="iconfont icon-fanhui5"></i>
            </router-link>
            <img class="banner-img"
                 src="http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_600x330_866232e3.jpg"
                 alt="">
            <div class="banner-info">
                <div class="title">上海玛雅海滩水公园</div>
                <div class="num-wrap">
                    <i class="iconfont icon-tupian"></i>
                    <span class="num">31</span>
                </div>
            </div>
        </div>
        <v-gallery :imgs="imgs" v-show="showGallery" @close="hideGalleryClose"></v-gallery>
        <div style="height: 1200px; background: #000;"></div>
    </div>
</template>
<script>
import Gallery from 'common/gallery/Gallary'
export default {
    name: 'Detail',
    components: {
        'v-gallery': Gallery
    },
    data() {
        return {
            showGallery: false,
            showAbsolute: true,
            opacity: 0,
            imgs: ['http://img1.qunarzz.com/sight/p0/1506/38/0b27cc769af006603c07e1e742c219fb.water.jpg_r_800x800_0ab47baa.jpg', 'http://img1.qunarzz.com/sight/p0/1506/ba/d25df17c5f6542e03695ba7b8bf766c4.water.jpg_r_800x800_ce4f6947.jpg']
        }
    },
    methods: {
        bannerClick() {
            this.showGallery = !this.showGallery
        },
        hideGalleryClose() {
            this.showGallery = !this.showGallery
        },
        initScroll() {
            const top = document.documentElement.scrollTop
            if (top >= 40) {
                let opacity = top / 120
                opacity = opacity > 1 ? 1 : opacity
                this.opacity = { opacity }
                this.showAbsolute = false
            } else {
                this.showAbsolute = true
            }
            console.log(document.documentElement.scrollTop)
        }
    },
    activated() {
        // window 全局对象
        window.addEventListener('scroll', this.initScroll)
    },
    // 全局事件解绑
    deactivated() {
        window.removeEventListener('scroll', this.initScroll)
    }
}
</script>
<style lang="less" scoped="">
    @import "~styles/mixins.less";
    .detail {
        .detail-header {
            z-index: 2;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 44px;
            color: #fff;
            background: #00bcd4;
            overflow: hidden;
            .header-back {
                position: absolute;
                top: 0;
                left: 0;
                padding-left: 10px;
                width: 34px;
                height: 44px;
                line-height: 44px;
                .iconfont {
                    font-size: 20px;
                    font-weight: bold;
                }
            }
            .detail-header-title {
                overflow: hidden;
                margin: 0 44px;
                line-height: 44px;
                font-size: 16px;
                text-align: center;
                .ellipsis();
            }
        }
        .banner {
            position: relative;
            overflow: hidden;
            height: 0;
            padding-bottom: 55%;
            .detail-back {
                position: absolute;
                padding: 10px;
                .iconfont {
                    font-size: 30px;
                    color: #fff;
                }
            }
            .banner-img {
                display: block;
                width: 100%;
            }
            .banner-info {
                position: absolute;
                left: 0;
                bottom: 0;
                display: flex;
                width: 100%;
                color: #fff;
                font-size: 16px;
                background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
                .title {
                    flex: 1;
                    padding: 10px;
                }
                .num-wrap {
                    padding: 10px;
                }
            }
        }
    }
</style>
