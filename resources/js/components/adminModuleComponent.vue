<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h5 class="card-header fondo">Ciclo</h5>
                    <h3 class="card-header fondo">{{ nameWeekly }}</h3>
                    <span class="classroom-label">{{ nameArea }}</span>
                    <div class="card-body">
                        <div class="float-right">
                            <a
                                class="btn btn-primary float-right"
                                :href="
                                    '/docente/modulo/' +
                                        id_module +
                                        '/clase/nueva'
                                "
                                >Crear Clase</a
                            >
                        </div>
                        <table
                            class="table table-responsive-xl table-hover table-striped center"
                        >
                            <thead>
                                <tr>
                                    <th>Clases</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(clas, t) in fillS" :key="t">
                                    <td>{{ clas.name }}</td>
                                    <td>
                                        <a
                                            class="btn btn-primary"
                                            :href="
                                                '/docente/modulo/' +
                                                    id_module +
                                                    '/clase/' +
                                                    clas.id
                                            "
                                            >Ir a clase</a>

                                        <span class="class-active" v-if="clas.state==1">Clase activa</span>
                                       <button v-if="clas.state==2" class="btn btn-primary" @click="enabledClass(clas)"  >Habilitar clase</button>                                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td>Recursos Adicionales</td>
                                    <td>
                                        <a
                                            class="btn btn-primary"
                                            :href="
                                                '/clases_adicionales/' +
                                                    id_module +
                                                    '/' +
                                                    id_area +
                                                    '/' +
                                                    id_classroom
                                            "
                                            >Ir a recursos</a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { RsiIndicator } from "@syncfusion/ej2-vue-charts";
export default {
    props: ["id_module"],
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
            id_classroom: ""
        };
    },
    created() {},
    mounted() {
        this.fillS = [];
         this.getClasses();
       
        var urls = window.location.origin + "/GetNameWeekly/" + this.id_module;
        axios.get(urls).then(response => {
            this.nameWeekly = response.data;
        });
    },
    methods:  {
        enabledClass: function (clas){
            axios.put(`/api/admin/module/${this.id_module}/class/${clas.id}/open`).then(response => {
                this.getClasses();
            });
        },
        getClasses()
        {
              var urlr = window.location.origin + "/showClass/" + this.id_module;
                axios.get(urlr).then(response => {
                    this.fillS = response.data.clase;
                    this.nameArea = `${response.data.area.name} ${response.data.classroom.name}`;

                    this.id_area = response.data.area.id;
                    this.id_classroom = response.data.classroom.id;
                });
        }
    },
};
</script>
<style>
.class-active{
    margin: 10px;
    font-weight: bold;
    color: #F79D52;
}
</style>
