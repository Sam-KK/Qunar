<template>
    <div class="detail">
        <div class="detail-header" :style="opacityStyle" v-show="!showAbsolute">
            <router-link tag="div" to="/" class="header-back">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <h1 class="detail-header-title">上海玛雅海滩水公园</h1>
        </div>
        <router-link to="/" tag="div" class="detail-back" v-show="showAbsolute">
            <i class="iconfont icon-fanhui5"></i>
        </router-link>
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
        <div class="ticket-container">
            <div class="ticket-group" v-for="(item, index) in list" :key="index">
                <h3 class="ticket-type">
                    <i class="iconfont icon-fanhui5"></i>
                    {{ item.name }}</h3>
                <div class="ticket-list" v-for="(children, index) in item.children" :key="index">
                    <div class="ticket-type-info">
                        <h5 class="ticket-type-name">
                            {{ children.typeName }}
                        </h5>
                        <div class="ticket-type-right">
                            <div class="price">
                                ¥<em class="price-num">{{ children.price }}</em><span class="numword">起</span>
                            </div>
                            <i class="iconfont icon-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Gallery from 'common/gallery/Gallary'
export default {
    name: 'Detail',
    components: {
        'v-gallery': Gallery
    },
    data() {
        return {
            list: [],
            showGallery: false,
            showAbsolute: true,
            opacityStyle: {
                opacity: 0
            },
            imgs: ['http://img1.qunarzz.com/sight/p0/1506/38/0b27cc769af006603c07e1e742c219fb.water.jpg_r_800x800_0ab47baa.jpg', 'http://img1.qunarzz.com/sight/p0/1506/ba/d25df17c5f6542e03695ba7b8bf766c4.water.jpg_r_800x800_ce4f6947.jpg']
        }
    },
    created() {
        axios.get('/api/detail.json', {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            res = res.data
            if (res.ret && res.data) {
                res = res.data
                this.list = res.categoryList
                console.log(this.list)
            }
        })
    },
    methods: {
        bannerClick() {
            this.showGallery = !this.showGallery
        },
        hideGalleryClose() {
            this.showGallery = false
        },
        initScroll() {
            const top = document.documentElement.scrollTop || document.body.scrollTop
            if (top >= 10) {
                let opacity = top / 200
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbsolute = false
            } else {
                this.showAbsolute = true
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.initScroll)
    },
    unmounted() {
        window.removeEventListener('scroll', this.initScroll)
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
        position: relative;
        .detail-header {
            z-index: 99;
            position: fixed;
            top: 0;
            left: 0;
            display: block;
            color: #fff;
            width: 100%;
            height: 44px;
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
        .detail-back {
            z-index: 9;
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px;
            .iconfont {
                font-size: 30px;
                color: #fff;
            }
        }
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
        .ticket-container {
            .ticket-group {
                .ticket-type {
                    overflow: hidden;
                    position: relative;
                    margin: 0 10px;
                    height: 44px;
                    background: #fff;
                    color: #333;
                    font-size: 16px;
                    line-height: 44px;
                    border-bottom: 1px solid #dadada;
                }
                .ticket-list {
                    .ticket-type-info {
                        position: relative;
                        z-index: 2;
                        padding: 12px 10px;
                        background: #fff;
                        border-bottom: 1px solid #e0e0e0;
                        .ticket-type-name {
                            margin-right: 90px;
                            color: #333;
                            font-size: 15px;
                            line-height: 24px;
                        }
                        .ticket-type-right {
                            display: flex;
                            position: absolute;
                            top: 12px;
                            right: 10px;
                            .price {
                                color: #ff9800;
                                font-size: 12px;
                                .price-num {
                                    font-size: 20px;
                                }
                                .numword {
                                    color: #999;
                                }
                            }
                            .iconfont {
                                margin-top: 2px;
                                color: #bbb;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
