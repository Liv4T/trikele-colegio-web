<template>
    <!-- <div class="back"> -->
    <div v-if="showSection==='listClass'">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-12">
                <div class="card text-center">
                    <h5 class="card-header fondo">Ciclo</h5>
                    <h3 class="card-header fondo">{{ nameWeekly }}</h3>
                    <span class="classroom-label">{{ nameArea }}</span>
                    <div class="card-body">
                        <div class="float-left">
                            <a class="btn btn-primary" style="color: white;" v-on:click="getSection('createClass')">
                                Crear Clase
                            </a>
                        </div>
                        <div class="float-right" v-if="backPage">
                            <button class="btn btn-primary" v-on:click="backPage">Volver</button>
                        </div>
                        <br>
                        <table
                            class="table table-responsive-xl table-hover table-striped center"
                        >
                            <thead>
                                <tr>
                                    <th class="text-center">Clases</th>
                                    <th class="text-center">Acción</th>
                                     <!--<th class="text-center">Estado</th>-->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(clas, t) in fillS" :key="t">
                                    <td>{{ clas.name }}</td>
                                    <td>
                                        <a class="btn btn-primary" style="color: white;" v-on:click="getSection('editClass', clas)">
                                            Ir a clase
                                        </a>

                                    </td>
                                    <!--<td>
                                          <span class="class-inactive" v-if="clas.state==2">Clase cerrada</span>
                                        <button v-if="clas.state==1" class="btn btn-primary" @click="enabledClass(clas)">Cerrar clase</button>
                                    </td>-->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="showSection === 'createClass'">
        <teacher-course :id_module="id_module" :id_class="clas_id" :id_area="id_area" :id_classroom="id_classroom" :backToPage="backToPage"></teacher-course>        
    </div>
    <div v-else-if="showSection === 'editClass'">
        <teacher-course :id_module="id_module" :id_class="clas_id" :id_area="id_area" :id_classroom="id_classroom" :backToPage="backToPage"></teacher-course>
    </div>
</template>
<script>
import { RsiIndicator } from "@syncfusion/ej2-vue-charts";
export default {
    props: ["id_module","id_area","id_classroom","backPage"],
    data() {
        return {
            clases: [],
            areas: [],
            descripcion: "",
            logro: "",
            fechaE: "",
            fechaR: "",
            id_act: "",
            errors: [],
            fillS: [],
            nameWeekly: "",
            nameArea: "",
            id_area: "",
            id_classroom: "",
            clas_id:undefined,
            showSection:"listClass"
        };
    },
    created() {},
    mounted() {
        this.getData();
    },
    methods: {
        getData(){
            this.fillS = [];
            this.getClasses();
            var urls = window.location.origin + "/GetNameWeekly/" + this.id_module;
            axios.get(urls).then(response => {
                this.nameWeekly = response.data;
            });
        },
        enabledClass: function (clas){
            axios.put(`/api/admin/module/${this.id_module}/class/${clas.id}/close`).then(response => {
                this.getClasses();
            });
        },
        getClasses()
        {
            var urlr = window.location.origin + "/showClass/" + this.id_module;
            axios.get(urlr).then(response => {

                this.fillS = response.data.clase;

                if(response.data.area && response.data.classroom)
                    this.nameArea = `${response.data.area.name} ${response.data.classroom.name}`;

                this.id_area = response.data.area.id;
                this.id_classroom = response.data.classroom.id;
            });
        },
        getSection(showSection, data){
            if(showSection === 'createClass'){
                this.showSection = 'createClass';
            }else if(showSection === 'editClass'){
                this.clas_id = data.id;
                this.showSection = 'editClass';
            }
        },
        backToPage(){
            this.showSection = 'listClass';
            this.clas_id = undefined;
            this.getData();
        }
    }
};
</script>
<style>
.class-inactive{
    margin: 10px;
    font-weight: bold;
    color: #F79D52;
}
</style>
