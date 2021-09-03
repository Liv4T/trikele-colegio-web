<template>
    <div class="back">
        <div>
            <div id="crud" class="col-sm-12">
                <div class="card-container">
                    <div class="card text-center">
                        <div class="card-header">
                            <h3>Datos para Contrato Educativo</h3>
                        </div>

                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-6">
                                        <label for="motherName">Nombres y Apellidos de Madre</label>
                                        <input type="text" class="form-control" v-model="motherName">

                                        <label for="motherName">Cedula de Madre</label>
                                        <input type="text" class="form-control" v-model="ccMother">
                                    </div>
                                    <div class="col-6">
                                        <label for="motherName">Nombres y Apellidos de Padre</label>
                                        <input type="text" class="form-control" v-model="fatherName">

                                        <label for="motherName">Cedula de Padre</label>
                                        <input type="text" class="form-control" v-model="ccFather">
                                    </div>
                                    <div class="col-6 mt-5"> 
                                        <label for="">Nombres y Apellidos Estudiante</label>
                                        <input type="text" class="form-control" v-model="studentName">

                                        <label for="">Cedula Estudiante</label>
                                        <input type="text" class="form-control" v-model="ccStudent">

                                        <label for="">Clase</label>
                                        <input type="text" class="form-control" v-model="classStudent">
                                    </div>
                                    <div class="col-6 mt-5">
                                        <label for="">Fecha de cancelación de Contraprestación</label>
                                        <input type="text" class="form-control" v-model="contraprestacion">

                                        <label for="">Año de cancelación de Contraprestación</label>
                                        <input type="text" class="form-control" v-model="yearContraprestacion">
                                    </div>
                                    <div class="col-6 mt-5">
                                        <label for="">Grado</label>
                                        <input type="text" class="form-control" v-model="grade">

                                        <label for="">Valor</label>
                                        <input type="text" class="form-control" v-model="price">
                                    </div>
                                    <div class="col-6 mt-5">
                                        <label for="">Mes Pago de Matricula</label>
                                        <input type="text" class="form-control" v-model="dateFinish">

                                        <label for="">Cuotas de pago Matricula</label>
                                        <input type="text" class="form-control" v-model="quotes">
                                    </div>

                                    <div class="col-12 mt-5">
                                        <label for="">Mes inicio Año Escolar</label>
                                        <input type="text" class="form-control" v-model="dateInitSchool">

                                        <label for="">Dia de la firma del Contrato</label>
                                        <input type="text" class="form-control" v-model="days">

                                        <label for="">Mes y año de la firma del Contrato</label>
                                        <input type="text" class="form-control" v-model="month">

                                        <label for="">Firma</label>
                                        <input type="file" class="form-control">
                                    </div>
                                </div>
                            </form>
                            
                            <div class="modal-footer">                                
                                <button v-on:click="DownloadFile" class="btn btn-primary">Descargar</button>                                
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import download from 'downloadjs';
  export default {    
    data() {
      return {
          motherName:"",
          fatherName:"",
          studentName:"",
          ccMother:"",
          ccFather:"",
          ccStudent:"",
          classStudent:"",
          contraprestacion:"",
          yearContraprestacion:"",
          grade:"",
          price:"",
          dateFinish:"",
          quotes:"",
          dateInitSchool:"",
          days:"",
          month:"",
          downloadedFile:""
      };
    },
    methods: {
        DownloadFile(){                 
            window.open(`contratoEducativo/${this.motherName}/${this.fatherName}/${this.studentName}/${this.ccMother}/${this.ccFather}/${this.ccStudent}/${this.classStudent}/${this.contraprestacion}/${this.yearContraprestacion}/${this.grade}/${this.price}/${this.dateFinish}/${this.quotes}/${this.dateInitSchool}/${this.days}/${this.month}`);            
        }
        
    },
  };
</script>
<style></style>
