<template>
    <div class="row justify-content-center">
        <div v-if="showLectives === false" id="crud" class="col-sm-12">
            <div v-if="repoUpload=== '' && repoComment === '' " class="card text-center">
                <h3 class="card-header fondo">Entregas</h3>
                <div class="card-body">

                    <div class="float-right">
                        <label for="">Buscar</label>
                        <input type="text" placeholder="Buscar" v-model="filter" />
                    </div>
                    
                    <div class="table-responsive" style="border-radius: 20px">
                        <table class="table table-hover table-striped" style="border-collapse: separate !important">
                            <thead >
                                <tr>
                                    <th>Fecha</th>
                                    <th>Fecha Limite</th>
                                    <th>Tarea</th>
                                    <th>Estado</th>
                                    <th>-</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in filteredRows" :key="index">
                                    <td
                                        style="font-size: 18px"
                                        v-html="highlightMatches(row.date)"
                                    >
                                    <td
                                        style="font-size: 18px"   
                                        v-html="filterDate(row.date_limit)"
                                    >
                                    </td>

                                    <td
                                        style="font-size: 18px"
                                        v-html="highlightMatches(row.name)"
                                    >
                                    </td>
                                    
                                    <td
                                        style="font-size: 18px"
                                        v-html="highlightMatches(row.status)"
                                    >
                                    </td>

                                    <td>                                        
                                        <a v-if="row.status!='Calificado' && row.date_limit >= actualDate"
                                            class="btn btn-warning"                                        
                                            v-on:click="getUpload(row.id)"
                                            >Ver más</a
                                        >
                                        <a
                                            class="btn btn-info"                                            
                                            v-on:click="getComment(row.id)"
                                            >Retroalimentación</a
                                        >

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div v-else-if="repoUpload !== ''">
                <repository-upload :id_repo="repoUpload" :cleanVariables="cleanVariables"></repository-upload>
            </div>
            <div v-else-if="repoComment !== ''">
                <student-comments :id_repo="repoComment" :cleanVariables="cleanVariables"></student-comments>
            </div>
        </div>
        <div v-else>
            <lectives-student-activities :id_lective_planification="id_lective_planification"></lectives-student-activities>
        </div>
    </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import moment from 'moment';
Vue.component("multiselect", Multiselect);
export default {
    components: { Multiselect },
    props: ["nameArea","id_lective_planification"],
    data() {
        return {
            clases: [],
            area_classroom: "",
            showLectives: false,
            value: [{ name: "Todos", code: "js" }],
            descripcion: "",
            logro: "",
            fechaE: "",
            actualDate: "",
            fechaR: "",
            id_act: "",
            errors: [],
            fillS: [],
            area: null,
            filter: "",
            repoUpload:"",
            repoComment:""
        };
    },
    mounted() {
        this.getData();
    },
    watch:{
        nameArea(old_value, new_value){
            if(old_value != new_value){
                this.getData();
            }
        }
    },
    methods: {
        getData(){
            this.clases = []
            axios.get("/GetArearByUser").then((response) => {
                let myOptions = response.data.filter(e => e.text === this.nameArea);
                if(myOptions.length > 0){
                    this.showLectives = false;
                    myOptions.forEach(e=>{
                        this.areaClassroom(e.id, e.id_classroom)
                    })
                }else{
                    this.showLectives = true;
                }
            });

            // console.log("Component mounted.");
        },
        areaClassroom(area_id, classroom_id){
            axios.get(`/getRepoStudent/${area_id}/${classroom_id}`).then((response) => {
                this.clases = response.data;
            });
        },
        highlightMatches(texto) {
            const matchExists = texto
                .toLowerCase()
                .includes(this.filter.toLowerCase());
            if (!matchExists) return texto;

            const re = new RegExp(this.filter, "ig");
            return texto.replace(
                re,
                (matchedText) => `<strong>${matchedText}</strong>`
            );
        },
        filterDate(date){
            this.actualDate = moment().format('YYYY-MM-DDTHH:MM');
            if(date){
                return moment(date).format('YYYY-MM-DD hh:mm a');
            }else{
                return 'Fecha no Registrada';
            }
            
        },
        getUpload(uploadId){
            this.repoUpload = uploadId;
        },
        getComment(commentId){
            this.repoComment = commentId;
        },
        cleanVariables(){
            this.repoUpload = "";
            this.repoComment = "";
        }
    },
    computed: {
        filteredRows() {
            return this.clases.filter((row) => {
                const text = row.name.toString().toLowerCase();
                const searchTerm = this.filter.toLowerCase();

                return text.includes(searchTerm);
            });
        },

        
    },
};
</script>
<style>

</style>
