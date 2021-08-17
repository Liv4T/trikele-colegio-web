<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud text-center" class="col-sm-11">

                <div class="form-group col-md-5 mx-auto">
                    <div class="text-center">
                        <select class="btn btn-warning letra-boldfont" name="type" @change="ShowSelected">
                            <option disabled selected hidden value="">CURSOS</option>
                            <option :value="JSON.stringify(area)" v-for="(area, key) in areas" :key="key">{{ area.text }}</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div id="tabs" class="col-md-10 mx-auto">
                        <div class="tabs">
                            <a v-on:click="activetab = 1" v-bind:class="[activetab === 1 ? 'active' : '']"><h4 class="letra-boldfont">CLASES</h4></a>
                            <a v-on:click="activetab = 2" v-bind:class="[activetab === 2 ? 'active' : '']"><h4 class="letra-boldfont">ACTIVIDADES</h4></a>
                            <a v-on:click="activetab = 3" v-bind:class="[activetab === 3 ? 'active' : '']"><h4 class="letra-boldfont">NOTAS</h4></a>
                            <a v-on:click="activetab = 4" v-bind:class="[activetab === 4 ? 'active' : '']"><h4 class="letra-boldfont">ENTREGAS</h4></a>
                        </div>

                        <div>
                            <div v-if="activetab === 1" class="tabcontent">
                                <div v-if="idArea !=''">                                    
                                    <bimestre-list-component :id_area="idArea" :id_classroom="idClassroom" :type_u="user"></bimestre-list-component>
                                </div>
                            </div>

                            <div v-if="activetab === 2" class="tabcontent">
                                <div v-if="idArea !='' && idClassroom != ''">
                                    <activities-teacher-component :idArea="idArea" :idClassroom="idClassroom"></activities-teacher-component>
                                </div>
                            </div>

                            <div v-if="activetab === 3" class="tabcontent">
                                <div v-if="idArea !='' && idClassroom != ''">
                                    <notasd-component :id_area="idArea" :id_classroom="idClassroom"></notasd-component>
                                </div>
                            </div>

                            <div v-if="activetab === 4" class="tabcontent">
                                <div v-if="idArea !='' && idClassroom != ''">
                                    <repository-component :id_grade="undefined" :id_area="idArea" :id_classroom="idClassroom"></repository-component>
                                </div>
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
    props:["user"],
    data() {
        return {
            areas: [],
            activetab:null,
            idArea: '',
            idClassroom:''
        };
    },
    mounted() {
        axios.get("/GetArearByUser").then((response) => {
            this.areas = response.data;
        });
    },
    methods: {
        ShowSelected(data){
            let dataArea = JSON.parse(data.target.value);
            this.idArea = dataArea.id;
            this.idClassroom = dataArea.id_classroom;
            this.idAreaClass = dataArea.id+'/'+dataArea.id_classroom;
        }
    },
};
</script>
<style>
.mg-btn {
  margin: 10px;
  min-width: 165px;
}
.width-r {
  max-width: 97%;
  border: 1px solid #cccccc82;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #b0acac;
}
.tabs {
  margin-top: 20px;
  overflow: hidden;
  margin-left: 90px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #bfbfbf;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  color: #fff !important;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}
.pd-20 {
  padding: 20px;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #09708C;
  color: #fff;
  border-bottom: 2px solid #fff;
  cursor: default;
}
.tabcontent {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
.content-azul {
  background-color: #00cbcec6;
}
.flotante {
  position: fixed;
  top: 380px;
  z-index: 1020;
}
</style>
