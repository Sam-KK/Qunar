<template>
    <div class="footer">
        <ul class="nav-wrap">
            <li>
                <i class="iconfont icon-listfeiji"></i>
                <span class="text">机票</span>
            </li>
            <li>
                <i class="iconfont icon-loufang-"></i>
                <span class="text">酒店</span>
            </li>
            <li>
                <i class="iconfont icon-fangzidaiquan"></i>
                <span class="text">公寓</span>
            </li>
            <li>
                <i class="iconfont icon-z044"></i>
                <span class="text">更多</span>
            </li>
        </ul>
        <ul class="footer-nav">
            <li><a>登录</a></li>
            <li><a>我的订单</a></li>
            <li><a>最近浏览</a></li>
            <li><a>关于我们</a></li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'comFooter'
}
</script>

<style type="text/less" lang="less" scoped>
    .footer {
        .nav-wrap {
            padding: 10px 0;
            text-align: center;
            li {
                display: inline-block;
                margin: 0 10px;
                color: #9e9e9e;
                .iconfont,
                .text {
                    display: inline-block;
                    vertical-align: middle;
                }
                .iconfont {
                    font-size: 22px;
                }
                .text {
                    font-size: 12px;
                    border-bottom: 1px solid #acacac;
                }
            }
        }
        .footer-nav {
            text-align: center;
            li {
                display: inline-block;
                a {
                    display: inline-block;
                    padding: 0 12px;
                    color: #25a4bb;
                    font-size: 14px;
                    line-height: 38px;
                }
            }
        }
    }
</style>
