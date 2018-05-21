<template>
    <div class="city">
        <v-cityheader></v-cityheader>
        <v-cityList :cities="cities" :hot="hotCities"></v-cityList>
    </div>
</template>

<script>
import axios from 'axios'
import cityHeader from '@/components/city/city-header'
import cityList from '@/components/city/city-list'

export default {
    name: 'city',
    components: {
        'v-cityheader': cityHeader,
        'v-cityList': cityList
    },
    data() {
        return {
            cities: {},
            hotCities: []
        }
    },
    created() {
        axios.get('/api/city.json').then((res) => {
            res = res.data
            if (res.ret && res.data) {
                res = res.data
                this.cities = res.cities
                this.hotCities = res.hotCities
            }
        })
    }
}
</script>

<style lang="less" scoped>
</style>
