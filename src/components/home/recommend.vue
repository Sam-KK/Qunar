<template>
    <div class="recommend">
        <div class="title"><i class="iconfont icon-zan1"></i><span class="mp-title">猜你喜欢</span></div>
        <ul class="like-list">
            <li class="like-item" v-for="item in list" :key="item.id">
                <a class="full-link" href="">
                    <div class="like-img">
                        <img
                            :src="item.imgUrl"
                            alt="">
                        <span v-if="item.tag" class="tag">{{ item.tag  }}</span>
                    </div>
                    <div class="like-info">
                        <div class="like-title">{{ item.title }}</div>
                        <div class="like-comment">
                            <span class="starlevel">
                                <i class="iconfont icon-xingxing"></i>
                                <i class="iconfont icon-xingxing"></i>
                                <i class="iconfont icon-xingxing"></i>
                                <i class="iconfont icon-xingxing"></i>
                                <i class="iconfont icon-xingxing"></i>
                            </span>
                            <span class="comment-num">{{ item.commentNum }}条评论</span>
                        </div>
                        <div class="like-price">
                            <span class="price">
                                ¥
                                <em class="price-num">{{ item.price }}</em>
                                起
                            </span>
                            <span class="like-address">{{ item.address }}</span>
                        </div>
                        <div class="like-feature">
                            <p>{{ item.feature }}</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <a class="like-more">查看所有产品</a>
    </div>
</template>

<script>
export default {
    name: 'homeRecommend',
    props: {
        list: Array,
        any: '',
        tom: ''
    }
}
</script>

<style lang="less" scoped>
    @import "~styles/variables.less";
    @import "~styles/mixins.less";

    .recommend {
        .title {
            padding: 12px 14px;
            .iconfont,
            .mp-title {
                display: inline-block;
                vertical-align: middle;
            }
            .iconfont {
                margin-right: 2px;
                color: #ff654d;
                font-size: 20px;
            }
        }
        .like-list {
            padding: 0 12px;
            .like-item {
                position: relative;
                padding: 10px 0;
                border-bottom: 1px solid #e0e0e0;
                .full-link {
                    display: block;
                    .like-img {
                        position: relative;
                        float: left;
                        width: 100px;
                        height: 100px;
                        img {
                            display: block;
                            width: 100%;
                        }
                        .tag {
                            position: absolute;
                            top: 0;
                            left: 0;
                            padding: 2px 4px;
                            font-size: 10px;
                            color: #fff;
                            background: #f00;
                            border-radius: 0 0 8px 0;
                            &.tom {
                                background: #000;
                            }
                            &.any {
                                background: #f00;
                            }
                        }
                    }
                    .like-info {
                        overflow: hidden;
                        padding-left: 12px;
                        .like-title {
                            margin-top: 14px;
                            font-size: 16px;
                            color: @gray-dark;
                        }
                        .like-comment {
                            margin-top: 8px;
                            .starlevel {
                                font-size: 0;
                                .iconfont {
                                    color: #ffb436;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                    .comment-num {
                        display: inline-block;
                        margin-left: 14px;
                        font-size: 12px;
                        color: #616161;
                    }
                    .like-price {
                        position: relative;
                        margin-top: 14px;
                        font-size: 12px;
                        color: #616161;
                        line-height: 20px;
                        .price {
                            color: #ff8300;
                            .price-num {
                                font-size: 20px;
                            }
                        }
                        .price {
                            color: #ff8300;
                            .price-num {
                                font-size: 20px;
                            }
                        }
                        .like-address {
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            .ellipsis();
                        }
                    }
                    .like-feature {
                        position: relative;
                        display: inline-block;
                        margin-top: 24px;
                        padding: 2px 4px;
                        background: #fff9f9;
                        font-size: 12px;
                        color: #f55;
                        line-height: 18px;
                    }
                }
            }
        }
        .like-more {
            display: block;
            padding: 10px 0;
            color: #00afc7;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
        }
    }
</style>
