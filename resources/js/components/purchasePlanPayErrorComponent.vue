<template>
<div>
     <div class="row justify-content-center">
        <div class="col col-lg-8 text-center">
            <h3>{{error}}</h3>
        </div>
    </div>
     <div class="row justify-content-center margin-top-20">
            <div class="col text-center">
               <a href="/inicio" class="btn btn-Azul">Regresar a mi cuenta</a>
            </div>
       </div>
</div>
</template>
<script>
export default {
     props:['error'],
     data() {
        return {
            events:{

            }
        };
    },
    mounted(){
        console.log(this.error);
    },
    methods:{

    }
}
</script>
<style scoped>

</style>
