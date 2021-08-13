<template>
    <!-- <div class="back"> -->
    <div v-if="showComponent === 'principal'">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-12">
                <div class="card text-center">
                    <h3 class="card-header fondo">Entregas</h3>
                    <div class="card-body">
                        <div class="float-left">
                            <a class="btn btn-warning" v-on:click="getComponent('createRepo')">
                                Crear
                            </a>
                        </div>
                        <div class="float-right">
                            <label for="">Buscar</label>
                            <input type="text" placeholder="Buscar" v-model="filter" />
                        </div>
                        <!-- <div class="form-group mx-auto">
                            <div align="center">
                                <div class="col-md-6">
                                    <label for>Materia:</label>
                                    <select class="form-control" v-model="area_classroom"  @change="areaClassroom()" required>
                                    <option :value="option.id+'/'+option.id_classroom" v-for="option in myOptions">{{ option.text }}</option>
                                    </select>
                                </div>
                            </div>
                        </div> -->
                        <div class="table-responsive" style="border-radius: 20px">
                            <table class="table table-hover table-striped" style="border-collapse: separate !important">
                                <thead >
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Tarea</th>
                                        <th>-</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, index) in filteredRows" :key="index">
                                        <td style="font-size: 18px" v-html="highlightMatches(row.date)"></td>
                                        <td style="font-size: 18px" v-html="highlightMatches(row.name)"></td>
                                        <td>
                                            <a class="btn btn-warning" v-on:click="getComponent('viewRepo',row)">
                                                Ver más
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="showComponent === 'createRepo'">
        <create-repository :id_area="area_id" :id_classroom="classroom_id" :backPage="backPage"></create-repository>
    </div>
    <div v-else-if="showComponent === 'viewRepo'">
        <repository-students :id_repo="id_repo" :backPage="backPage"></repository-students>
    </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
    components: { Multiselect },
    props: ["id_grade", "id_area", "id_classroom"],
    data() {
        return {
            clases: [],
            area_classroom: "",
            value: [{ name: "Todos", code: "js" }],
            descripcion: "",
            logro: "",
            fechaE: "",
            fechaR: "",
            id_act: "",
            errors: [],
            fillS: [],
            area: null,
            filter: "",
            myOptions: [],
            area_id: null,
            classroom_id: null,
            showComponent:"principal",
            id_repo:null
        };
    },
    watch:{
        id_area: function(newVal, oldVal){
            if(newVal !== oldVal){
                this.area_id = newVal;
                this.areaClassroom();
            }
        },

        id_classroom: function(newVal, oldVal){
            if(newVal !== oldVal){
                this.classroom_id = newVal;
                this.areaClassroom();
            }
        }
    },
    mounted() {
        this.area_id = this.id_area;
        this.classroom_id = this.id_classroom;
        this.areaClassroom();
        // var url = "/GetArearByUser";
        // axios.get(url).then((response) => {
        //   this.myOptions = response.data;
        // });

        // console.log("Component mounted.");
    },
    methods: {
        areaClassroom(){
            this.clases = [];
            axios.get(`/getRepository/${this.area_id}/${this.classroom_id}`).then((response) => {
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
        getComponent(showComponent,data){
            if(showComponent === 'createRepo'){
                this.showComponent = 'createRepo'
            }else if(showComponent === 'viewRepo'){
                this.id_repo = data.id;
                this.showComponent = 'viewRepo';
            }
        },
        backPage(){
            this.id_repo = null;
            this.showComponent = 'principal';
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