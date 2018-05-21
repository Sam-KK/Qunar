<template>
    <div class="category-enter">
        <swiper :options="swiperOption">
            <swiper-slide v-for="page in pages" :key="page.index">
                <div class="category-item" v-for="item in page" :key="item.id">
                    <a href="">
                        <img class="enter-icon" :src="item.imgUrl" alt="">
                        <p class="keywords">{{ item.keywords }}</p>
                    </a>
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
            // console.log(pages)
            return pages
        }
    }
}
</script>

<style lang="less" scoped>
    @import "~styles/variables.less";
    @import "~styles/mixins.less";

    .category-enter {
        background: #fff;
        .swiper-container {
            padding-bottom: 20px;
            .swiper-pagination {
                bottom: 0;
            }
        }
    }

    .category-item {
        float: left;
        margin-top: 6px;
        width: 25%;
        text-align: center;
        .enter-icon {
            display: inline-block;
            width: 56px;
            height: 56px;
        }
        .keywords {
            margin-top: 6px;
            font-size: @font-size-base;
            color: @gray-dark;
            .ellipsis();
        }
    }
</style>
