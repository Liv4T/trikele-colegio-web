<template>
    <div class="container">
        <div class="row justify-content-center align-items-center margin-top-100">
            <div class="col text-center" v-for="(item, index) in items" v-bind:key="index">
                <div class="div-circle" @click="NavigateEvent(item)" v-bind:class="[index<=active ? 'active' : '']">{{index+1}}</div>
                <span class="title">{{item.title}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['items','active'],
    data() {
        return {

        };
    },
    methods:{
        NavigateEvent(item){
            if(item && item.link)
            {
                location.href=item.link;
            }
        }
    }
}
</script>
<style>
.div-circle{margin:auto;height:60px;width:60px;background-color:#f2f2f2;border-radius:50%;display:flex;justify-content:center;align-items:center;color:#b2b2b2;font-weight:bold;border:3px solid #f2f2f2;box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.2);}
.div-circle.active{background-color:#f79d52;color:white;}
.title{font-size:0.5em;color:grey;}

@media (min-width: 1200px) { .title{font-size:0.9em;} }
@media (min-width: 992px) { .title{font-size:0.9em;} }
@media (min-width: 768px) { .title{font-size:0.8em;} }
@media (min-width: 576px) { .title{font-size:0.7em;} }
</style>
