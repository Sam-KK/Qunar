<template>
    <div class="city">
        <v-cityheader></v-cityheader>
        <v-cityList></v-cityList>
    </div>
</template>

<script>
import cityHeader from '@/components/city/city-header'
import cityList from '@/components/city/city-list'
export default {
    name: 'city',
    components: {
        'v-cityheader': cityHeader,
        'v-cityList': cityList
    }
}
</script>

<style lang="less" scoped>
</style>
