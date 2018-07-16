<template>
    <div class="category-enter" id="category-enter">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="category-item" v-for="item in page" :key="item.id">
                    <div class="img-box">
                        <img class="enter-icon" :src="item.imgUrl" alt="">
                    </div>
                    <p class="keywords">{{ item.keywords }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'quick-enter',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination'
            }
        }
    },
    computed: {
        pages() {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="less" scoped>

    @import "~styles/variables.less";
    @import "~styles/mixins.less";

    #category-enter  /deep/ .swiper-container {
        background: #fff;
        height: 0;
        padding-bottom: 50%;
    }

    #category-enter /deep/ .swiper-pagination-bullet {
        opacity: 1;
        width: 6px;
        height: 6px;
        background: rgb(144, 144, 144);
        &.swiper-pagination-bullet-active {
            background: rgba(0, 175, 190, .8);
        }
    }

    .category-item {
        position: relative;
        overflow: hidden;
        float: left;
        padding-bottom: 25%;
        height: 0;
        width: 25%;
        text-align: center;
        .img-box {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 22px;
            left: 0;
            padding: 6px;
            .box-sizing(border-box);
            .enter-icon {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }
        .keywords {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 22px;
            text-align: center;
            font-size: @font-size-base;
            color: @gray-dark;
            .ellipsis();
        }
    }
</style>
