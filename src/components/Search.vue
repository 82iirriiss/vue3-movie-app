<template>
    <div class="container">
        <input 
            type="text"
            class="form-control"
            v-model="title"
            placeholder="Search for Movies, Series & more"
            @keyup.enter="apply"/>
        <div class="selects">
            <select
            v-for="filter in filters"
            v-model="$data[filter.name]"
            :key="filter.name"
            class="form-select">
                <option v-if="filter.name === 'year'" 
                value="">
                    All Years
                </option>
                <option
                v-for="item in filter.items"
                :key="item"
                :value="item"
                >{{item}}</option>
            </select>
            <button 
            class="btn btn-primary" 
            @click="apply">Applay
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '',
            type:'movie',
            number: 10,
            year:'',
            filters:[
                {
                    name:'type',
                    items: ['movie', 'series', 'episode']
                },
                {
                    name:'number',
                    items: [10, 20, 30]
                },
                {
                    name:'year',
                    items:(()=>{
                        const years = []
                        const thisYear = new Date().getFullYear()
                        for (let i = thisYear; i >=1995; i -= 1){
                            years.push(i);
                        }
                        return years
                    })()
                }
            ]
        }
    },
    methods:{
        async apply(){
            // Search movies...
            // Store의 Mutations를 실행할 때는, .commit() 메소드를,
            // Store의 Actions를 실행할 때는, .dispatch() 메소드를 사용한다.
            this.$store.dispatch('movie/searchMovies', {
                title:this.title,
                type:this.type,
                number:this.number,
                year:this.year
            })          
        }
    }
}
</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        > * {
            margin-right: 10px;
            &:last-child {
                margin-right:0px;
            }
        }
        .selects {
            display: flex;
            select {
                width: 120px;
                margin-right:10px;
                &:last-child {
                    margin-right:0px;
                }
            }
        }
        .btn {
            width:120px;
            height:50px;
            font-weight:700;
            flex-shrink:0;
        }
    }
</style>