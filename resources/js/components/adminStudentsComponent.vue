<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Administrar estudiantes</h3>
                    <div class="card-body">
                        <a class="btn btn-warning" href="#" v-on:click.prevent="createS()">
                            Crear Estudiante
                        </a>
                        <a class="btn btn-warning">
                            Asignar salón
                        </a>
                        <br />
                        <br />
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <h3>Bloquedos</h3>
                            <tbody v-for="(student,key) in students" :key="key">
                                <tr v-show="student.status === 1" data-toggle="collapse" data-target="#accordion" class="clickable">
                                    <td>{{student.name+' '+student.last_name}}</td>
                                    <td class="float-right">
                                        <a class="btn btn-success" v-on:click="()=>updateStatus(student)">
                                            Desbloquear
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <h3>Asignados a un salón</h3>
                            <tbody v-for="(student,key) in students" :key="key">
                                <tr v-show="student.status === 0" data-toggle="collapse" data-target="#accordion" class="clickable">
                                    <td>{{student.name+' '+student.last_name}}</td>
                                    <td class="float-right">
                                        <a class="btn btn-danger" v-on:click="()=>updateStatus(student)">
                                            Bloquear
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <modal-create-students :getStudents="getStudents"></modal-create-students>
    </div>
</template>
<script>
export default {
    data() {
        return {
            myOptions: [],
            descripcion: "",
            allowedExtensions: ["jpg", "jpeg", "png"],
            logro: "",
            name: "",
            fechaE: "",
            fechaR: "",
            docente: "",
            errors: [],
            fillS: [],
            inputs: [
                {
                    name: ""
                }
            ],
            students:[],
            data:{},
        };
    },
    created() {},
    mounted() {
        this.getStudents();
        console.log("Component mounted.");
    },
    methods: {
        getStudents(){
            axios.get('getStudentsByClassroom').then((response)=>{
                this.students = response.data;
            });
        },
        createS() {
            $("#createStudent").modal("show");
        },
        updateStatus(user){
            console.log(user);
            if(user.status===0){
                var status = 1;
            }else{
                var status = 0;
            }
            axios.put('updateStatusStudent', {
                id_user: user.id_user,
                status: status,
            })
            .then((response) => {
            this.getStudents();
            toastr.success("Estudiante actualizado");
            })
            .catch((error) => {});
        },
        /**
         * show error messages
         * @param  {string} title
         * @param  {string} message
         * @return {void}
         */ showError(title, message) {
            swal({
                title: title,
                text: message,
                type: "error",
                confirmButtonText: "Ok"
            });
        },
        emitMessage(response) {
            let message = response.data.output.message;
            let user = response.data.output.user;
            if (message) {
                this.$emit("messagesent", {
                    message: message.message,
                    user: user.name,
                    time: message.created_at,
                    image_path: $("#default_image").val(), //user.image_path,
                    type: message.type,
                    file_path: message.file_path,
                    file_name: message.file_name
                });
                console.log(message.file_path);
            }
        },
    }
};
</script>
<style>
.background2 {
    background: url(../assets/img/Fondo5.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
</style>
