<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="card">
                    <div class="card-header">
                       <h3> Desactivación de Usuarios</h3>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <input type="text" class="form-control" placeholder="Buscar por Nombre" v-model="search_filter">
                                </div>
                                <div class="col-sm">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-center">
                                            <li :class="actualPage <= 1 ? 'page-item disabled' : 'page-item'">
                                                <a class="page-link" v-on:click="()=>pagination('first_page',1)">1</a>
                                            </li>

                                            <li :class="actualPage <= 1 ? 'page-item disabled' : 'page-item'">                                    
                                                <a class="page-link" v-on:click="()=>pagination('-',1)" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                                        
                                            <li class="page-item disabled"><a class="page-link">{{actualPage}}</a></li>
                                            
                                            <li :class="last_page <= actualPage ? 'page-item disabled' : 'page-item'">                                    
                                                <a class="page-link" v-on:click="()=>pagination('+',1)" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                            <li :class="last_page <= actualPage ? 'page-item disabled' : 'page-item'">
                                                <a class="page-link" v-on:click="()=>pagination('last_page',last_page)">{{last_page}}</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Cargo</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(user, key) in users" :key="key">
                                <tr v-if="search_filter =='' || filterUserName(user.name)">
                                    <td>{{user.name}}</td>
                                    <td>{{user.last_name}}</td>
                                    <td>{{ 
                                            user.type_user === 1 ? 'Administrador' : 
                                            user.type_user === 2 ? 'Docente'       :
                                            user.type_user === 3 ? 'Estudiante'    :
                                            user.type_user === 4 ? 'Coordinador'   :
                                            '( Usuario Sin Asignar )'
                                        }}
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-primary" v-on:click="()=>getUser(user)">
                                            Desactivar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>                        
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Desactivación de Usuarios</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">Nombre</label>
                        <input type="text" class="form-control" disabled v-model="user.name">
                    </div>

                    <div class="form-group">
                        <label for="">Apellido</label>
                        <input type="text" class="form-control" disabled v-model="user.last_name">
                    </div>

                    <div class="form-group">
                        <label for="">Correo</label>
                        <input type="text" class="form-control" disabled v-model="user.email">
                    </div>

                    <div class="form-group">
                        <label for="">Telefono</label>
                        <input type="text" class="form-control" disabled v-model="user.phone">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="deleteUser(user.id)">Guardar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            users:[],
            user:{},
            totalPages: 1,
            actualPage: 1,
            search_filter: '',
            allUsers:[],
            last_page:null
        };
    },
    mounted() {
        this.getUsers();
    },
    watch:{
       actualPage: function(newVal, oldVal){
            if(newVal !== oldVal){
               this.getUsers();
            }
       } 
    },
    methods: {        
        getUsers(){
            axios.get(`getAllUsersPaginated?page=${this.actualPage}`).then((response)=>{                
                this.totalPages = response.data.total;
                this.users = response.data.data;
                this.last_page = response.data.last_page;
                console.log(response.data);
            });            
        },

        getUser(user){
            this.user = user;
            $('#exampleModal').modal('show');
        },

        deleteUser(id){
            if(window.confirm('Seguro que desea desactivar este dato?')){
                axios.delete(`users/${id}`).then((response)=>{
                    toastr.success(response.data);
                })
            }            
        },

        pagination(op, data){
            if(op === '+'){
                this.actualPage = (this.actualPage + data);
            }else if(op === '-'){
                this.actualPage = (this.actualPage - data);
            }else if('last_page' || 'first_page'){
                this.actualPage = data;
            }
            
        },

        filterUserName(userName){
            let data = userName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));            
            return data            
        },
    },
};
</script>
<style></style>
