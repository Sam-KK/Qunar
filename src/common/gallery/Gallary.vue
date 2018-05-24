<template>
    <div class="gallery" @click="hideGallery">
        <div class="gallery-wrap">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallery-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gallery',
    props: {
        imgs: {
            type: Array
        }
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observer: true,
                observeParents: true
            }
        }
    },
    methods: {
        hideGallery() {
            this.$emit('close')
        }
    }
}
</script>
<style lang="less" scoped="">
.gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    .gallery-wrap {
        overflow: hidden;
        height: auto;
        width: 100%;
        background: #fff;
        .gallery-img {
            display: block;
            width: 100%;
        }
    }
}
</style>
