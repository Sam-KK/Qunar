<template>
    <div class="detail">
        <div class="banner" @click="bannerClick">
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
            imgs: ['http://img1.qunarzz.com/sight/p0/1506/38/0b27cc769af006603c07e1e742c219fb.water.jpg_r_800x800_0ab47baa.jpg', 'http://img1.qunarzz.com/sight/p0/1506/ba/d25df17c5f6542e03695ba7b8bf766c4.water.jpg_r_800x800_ce4f6947.jpg']
        }
    },
    methods: {
        bannerClick() {
            this.showGallery = !this.showGallery
        },
        hideGalleryClose() {
            this.showGallery = !this.showGallery
        }
    }
}
</script>
<style lang="less" scoped="">
    .detail {
        .banner {
            position: relative;
            overflow: hidden;
            height: 0;
            padding-bottom: 55%;
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
