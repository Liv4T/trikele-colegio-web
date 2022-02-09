<template>
    <div>
        <div>
            <div id="crud" class="col-sm-12">
                <div class="card-container">
                    <div class="card text-center">
                        <div class="card-header">
                            <h3>Notas</h3>
                        </div>

                        <div class="card-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th v-for="(bim, key) in bimestres" :key="key">{{bim.name}}</th>
                                        <th>Nota Final</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(notes, key) in notes" :key="key">
                                        <td>{{ notes.id_bimestre === 1 ? notes.note : 'Nota Parcial sin Asignar'}}</td>
                                        <td>{{ notes.id_bimestre === 2 ? notes.note : 'Nota Parcial sin Asignar'}}</td>
                                        <td>{{ notes.id_bimestre === 3 ? notes.note : 'Nota Parcial sin Asignar'}}</td>
                                        <td>{{ notes.id_bimestre === 4 ? notes.note : 'Nota Parcial sin Asignar'}}</td>
                                        <td>{{ notes.asignNote === 'final' ? notes.note : 'Nota final sin Asignar'}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="modal-footer">
                                <input type="submit" class="btn btn-warning" value="Guardar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    props:['id_area','id_user'],
    data() {
      return {
        notes:[],
        bimestres:[],
      };
    },
    mounted() {
      this.getNotesAssigned();
    },
    methods: {
        getNotesAssigned(){
            axios.get(`/AssignNote/${this.id_user}/${this.id_area}`).then(response=>{
                this.notes = response.data
            })

            axios.get('/bimestres').then((response) => {
                this.bimestres = response.data;                
                                
            });            
        }
    },
};
</script>
<style></style>
