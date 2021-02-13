<template>
    <div>
       <div class="back">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">{{activity.activity_name}}</h3>
                    </div>
                </div>
            </div>
            <div class="row margin-top-20">
                <div class="col-md-10 mx-auto">
                    <div class="custom-card text-center">
                      {{activity.activity_desc}}
                    </div>
                </div>
            </div>
            <div class="row margin-top-20">
                <div class="col-md-10 mx-auto">
                    <activity-complete-sentence  :previewMode="true" @refresh-data="RefreshData" v-bind:data="activity.content" v-if="activity.activity_type == 'complete_sentence'"></activity-complete-sentence>
                    <activity-open-question :previewMode="true"  @refresh-data="RefreshData"  v-bind:data="activity.content"  v-if="activity.activity_type == 'questionary_open_questions'"></activity-open-question>
                </div>
            </div>
             <div class="row margin-top-20">
                <div class="col-md-10 mx-auto">
                    <button class="btn btn-primary" @click="FinishActivity">Finalizar</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props:['id_area','id_classroom','id_activity'],
    data() {
        return {
            activity:{},
            data:{}
        }
    },
    mounted() {

        axios.get(`/getActivityById/${this.id_activity}`).then((response) => {
            this.activity = response.data;
        });
    },
    methods: {
        FinishActivity(){
            axios.put(`/area/${this.id_area}/clase/${this.id_classroom}/actividad/${this.id_activity}`,this.data).then((response) => {
                  toastr.success("Enviada");
                  location.href="/Actividad";
            });
        },
        RefreshData(data)
        {
           this.data=data;
        },
    }
}
</script>
<style>
</style>
