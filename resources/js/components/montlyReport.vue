<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header fondo">
                        <strong>Reporte Mensual</strong>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Estudiante</th>
                                    <th>Fecha Creación de Reporte</th>
                                    <th>Descargar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, key) in dataReport" :key="key">
                                    <td>{{data.dataStudent.student.toUpperCase()}}</td>
                                    <td>{{data.created_at}}</td>
                                    <td>
                                        <button class="btn btn-primary" v-on:click="downloadReport(data.dataStudent)">
                                            {{downloading ? 'Descargando Reporte' : 'Descargar Reporte'}}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        

        <table id="tableReport" style="width:100%" hidden>
            <tr class="header">
                <th colspan="8">REPORTE DE {{dataStudent.student ? dataStudent.student.toUpperCase() : ''}}</th>
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
            
            <tr>                  
                <th class="label">CLASE: </th>
                <td class="label-content">{{dataStudent.class}}</td>
                
                <td></td>
                
                <th class="label">LOGRO: </th>
                <td class="label-content">{{dataStudent.logro}}</td>
            </tr>
            
            <tr>
                <th class="label"> ESTUDIANTE: </th>
                <td class="label-content">{{dataStudent.student}}</td>
                  
                <td></td>

                <th class="label">CORREO: </th>
                <td class="label-content">{{dataStudent.email}}</td>
            
                <td></td>
            </tr>
            
            <tr>
                <td style="height:5px" colspan="8"></td>
            </tr>
            <tr>
                <th class="label">ACTIVIDAD: </th>
                <td class="label-content">{{dataStudent.activity}}</td>
                
                <td></td>
                
                <th class="label">DESCRIPCIÓN: </th>
                <td class="label-content">{{dataStudent.activity_description}}</td>
                
                <td></td>
                
                <th class="label">FECHA ACTIVIDAD</th>
                <td class="label-content">{{dataStudent.activity_date}}</td>
                
            </tr>
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
                
            <tr>
                <th class="label">PORCENTAJE DE ACTIVIDAD: </th>
                <td class="label-content">{{dataStudent.percentage_activity}}</td>
                
                <td></td>
                
                <th class="label" :style="{'display':displayCol}">NOTA GENERAL: </th>
                <td class="label-content" :style="{'display':displayCol}">{{dataStudent.nota_class}}</td>
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
            
            <tr>
                <th class="label">NOMBRE DE ACUDIENTE: </th>
                <td class="label-content">{{dataStudent.parent_name ? dataStudent.parent_name : 'Sin Información'}}</td>
                  
                <td></td>
                  
                <th class="label">CORREO DE ACUDIENTE: </th>
                <td class="label-content">{{dataStudent.parent_email ? dataStudent.parent_email : 'Sin Información'}}</td>
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
                
            <tr>
                <th class="label">OBSERVACIÓN DEL DOCENTE: </th>
                <td>{{dataStudent.observation}}</td>         
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
        </table>
    </div>
</template>
<script>
import moment from 'moment';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
    components: {
        moment
    },
    data(){
        return{
            dataReport:[],
            dataStudent:{},
            downloading: false,
            displayCol:'inline'
        }
    },
    mounted(){
        axios.get('getReportsByParent').then((response)=>{
            let data = response.data;

            data.forEach((e)=>{
                this.dataReport.push({
                    created_at: moment(e.created_at).format('YYYY MMMM DD hh:mm:ss'),
                    dataStudent: JSON.parse(e.dataStudent)
                })
                this.dataStudent = JSON.parse(e.dataStudent)                
            });
        })
    },
    watch:{
        dataStudent(newVal){
            console.log(newVal)
            if(newVal.nota_class.length === 0){            
                this.displayCol='none';                
            }else{
                this.displayCol='inline';
            }
        }
    },
    methods:{
        downloadReport(data){
            this.dataStudent = data;
            this.downloading = true; 
            setTimeout(()=>{
                
                let pdf = new jsPDF('p', 'pt', 'letter');
            
                pdf.autoTable({ 
                    html: '#tableReport',
                    columnStyles: { halign: 'center', fillColor: [0, 255, 0] }
                })
                
                pdf.save(`Informe ${this.dataStudent.student}.pdf`);
                this.downloading = false; 
            }, 1000);
        }
    }
}
</script>