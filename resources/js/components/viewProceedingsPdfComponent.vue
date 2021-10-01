<template>
    <div class="back">
        <div class="col-md-11 mx-auto">
            <div class="custom-card text-center">
                <h3 class="card-header fondo"></h3>
                <div class="card" >                    
                    <div class="card-body">
                        <input v-model.number="page" type="number" style="width: 5em" />
                        /{{ numPages }}
                        <button @click="rotate += 90">&#x27F3;</button>
                        <button @click="rotate -= 90">&#x27F2;</button>

                        <div style="width: 100%">
                            <div
                            v-if="loadedRatio > 0 && loadedRatio < 1"
                            style="background-color: green; color: white; text-align: center"
                            :style="{ width: loadedRatio * 100 + '%' }"
                            >{{ Math.floor(loadedRatio * 100) }}%
                            </div>
                            <pdf
                            ref="pdf"
                            style="border: 1px solid red"
                            :src="src"
                            :page="page"
                            :rotate="rotate"
                            @progress="loadedRatio = $event"
                            @num-pages="numPages = $event"
                            @link-clicked="page = $event"
                            ></pdf>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
    components: {
        pdf,
    },
    props: ['id_proceeding','type_view'],
    data() {
        return {
            show: true,
            pdfList: [""],
            src: "",
            loadedRatio: 0,
            page: 1,
            numPages: 0,
            rotate: 0,
        }
    },
    mounted() {
        this.getPdf();
    },
    methods: {
        getPdf(){
            if(this.type_view==0){
                var url="/getProceedingsUrl/" + this.id_proceeding;
                axios.get(url).then((response) => {
                    this.src=response.data;
                    this.updateViewed();
                    //console.log(this.proceedings);
                }).catch((error) => {
                    toastr.error("Acta no disponible");
                });
            }else{
                var url="/getProceedingsUrl/general/" + this.id_proceeding;
                axios.get(url).then((response) => {
                    this.src=response.data;
                    this.updateViewed();
                    //console.log(this.proceedings);
                }).catch((error) => {
                    toastr.error("Acta no disponible");
                });
            }
        },
        updateViewed(){
            if(this.type_view==0){
                var url="/updateViewedProceedings/" + this.id_proceeding;
                axios.post(url).then(response => {
                        if(response.data==1){
                            toastr.success("Visto");
                        }
                    }).catch(err=>{});
            }else{
                var url="/updateViewedProceedings/general/" + this.id_proceeding;
                axios.post(url).then(response => {
                        if(response.data==1){
                            toastr.success("Visto");
                        }
                    }).catch(err=>{});
            }
        },
    },
}
</script>