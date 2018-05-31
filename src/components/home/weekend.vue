<template>
    <div class="weekend">
        <h2 class="title">
            周末去哪儿
        </h2>
        <div class="weekend-container">
            <div class="weekend-item" v-for="item in list" :key="item.id">
                <a class="full-link" href="">
                    <div class="image-ready">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="product-info">
                        <p class="name">{{ item.name }}</p>
                        <p class="desc">{{ item.desc }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'weekend',
    props: {
        list: Array
    }
}
</script>

<style lang="less" scoped>
@import "~styles/variables.less";
@import "~styles/mixins.less";
.weekend {
    .title {
        padding: 12px 14px;
        color: @gray-dark;
        font-size: 14px;
    }
    .weekend-container {
        .weekend-item {
            position: relative;
            margin-bottom: 6px;
            background: #fff;
            .full-link {
                display: block;
                .image-ready {
                    overflow: hidden;
                    height: 0;
                    padding-bottom: 38%;
                    img {
                        display: block;
                        width: 100%;
                    }
                }
                .product-info {
                    padding: 6px 10px 10px;
                    .name {
                        color: @gray-dark;
                        line-height: 28px;
                        .ellipsis();
                    }
                    .desc {
                        color: #616161;
                        line-height: 22px;
                    }
                }
            }
        }
    }
}
</style>
