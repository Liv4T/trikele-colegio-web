<template>
    <div>
        <div class="justify-content-center">
            <div id="crud" class="col-sm-12">
                <div class="card-container">
                <div class="card text-center">
                    <div class="card-header">
                        <h3>Actividades Pendientes por Calificar</h3>
                    </div>
                    <div class="card-body">
                        <div class="float-right">
                            <label for="">Buscar</label>
                            <input type="text" placeholder="Módulo" v-model="filter" />
                        </div>
                        <div class="table-responsive" style="border-radius: 20px">
                            <table class="table table-hover table-striped" style="border-collapse: separate !important">
                                <thead >
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Fecha de entrega</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, index) in filteredRows" :key="index">
                                        <td width="200px" style="font-size: 16px" v-html="highlightMatches(row.name)"></td>
                                        <td style="font-size: 16px" v-html="highlightMatches(row.delivery_max_date)"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    export default {
        props: ["idArea", "idClassroom"],
        data() {
            return {
                activities: [],
                filter: '',
            };
        },
        mounted() {
            this.getData();
        },
        watch:{
            idArea(newVal, oldVal){
                if(newVal !== oldVal){
                    this.getData();
                }
            }
        },
        methods: {
            getData(){
                axios.get(`/getActivitiesTeacher/${this.idArea}/${this.idClassroom}`).then((response) => {
                    let hash = {};
                    let activities = response.data.filter(
                        o => hash[o.id] ? false : hash[o.id] = true
                    );
                    activities.forEach(element=>{
                        if(moment(element.delivery_max_date).format("YYYY-MM-DD") > moment().format("YYYY-MM-DD")){
                            this.activities.push(element)
                        }
                    })
                });
            },

            highlightMatches(texto) {
                const matchExists = texto.toLowerCase().includes(this.filter.toLowerCase());
                if (!matchExists) return texto;

                const re = new RegExp(this.filter, "ig");
                return texto.replace(
                    re,
                    (matchedText) => `<strong>${matchedText}</strong>`
                );
            },
        },
        computed: {
            filteredRows() {
                if(!this.activities.filter) return false;

                return this.activities.filter((row) => {
                    const name = row.name.toString().toLowerCase();
                    const searchTerm = this.filter.toLowerCase();

                    return name.includes(searchTerm);
                });
            },
        },
    };
</script>
