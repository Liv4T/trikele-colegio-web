<template>
    <div>
        <div class="row question">
            <div class="col-12">
                <div class="row">
                    <div class="col-8 text-left">
                        <h4>Cuestionario</h4>
                    </div>
                    <div class="col-4 text-right">
                        <button class="btn btn-primary"  @click.prevent="AddQuestionEvent()" v-if="!disabled && !playing"> Agregar pregunta </button>
                    </div>
                </div>
                <template v-if="!playing">
                    <div class="row"  v-for="(question, k_q) in module.questions" v-bind:key="k_q" >
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 text-left">
                                    <div class="row">

                                        <div class="col-7"><label><span class="required" >*</span>Pregunta N° {{k_q+1}} :</label></div>
                                        <div class="col-5 text-right" v-if="type_user === 2">
                                            <button class="btn btn-warning" alt="Remover pregunta" v-if="(k_q)>0 && !disabled" @click.prevent="RemoveQuestionEvent(k_q)" >Remover pregunta</button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12"><label><span class="required" >*</span>Tipo de pregunta:</label></div>
                                        <div class="col-12 text-left">
                                        <select class="form-control"  v-model="question.type_question" v-bind:readonly="disabled">
                                            <option v-for="(option, k_op) in question_types" v-bind:key="k_op" v-bind:value="option.id">{{option.label}}</option>
                                        </select>
                                        </div>
                                    </div>
                                    <editor-component :content="question.question" @updateText="SetQuestionEvent($event,k_q)" v-bind:readonly="disabled"></editor-component>
                                </div>
                            </div>
                            <template v-if="question.type_question!='OPEN_RTA'">
                                <div class="row"  v-for="(option, k_op) in question.options" v-bind:key="k_op">
                                    <div class="col-11 text-left">
                                        <input type="text" class="form-control" :placeholder="'Opción '+(k_op+1)" v-model="option.content" v-bind:readonly="disabled"/>
                                    </div>
                                    <div class="col-1 div-icon-add">
                                        <div class="icon-add" alt="Agregar opción" v-if="(k_op)==0" @click.prevent="AddOptionOnQuestion(k_q)">+</div>
                                        <div class="icon-remove" alt="Remover opción" v-if="(k_op)>1" @click.prevent="RemoveOptionOnQuestion(k_q,k_op)">-</div>
                                    </div>
                                </div>
                            </template>
                            <div class="row" v-if="question.type_question!='OPEN_RTA'">
                                <div class="col-12">
                                    <label for="question"><span class="required" >*</span>Respuesta correcta:</label>
                                    <select class="form-control"  v-model="question.valid_answer_index" v-bind:readonly="disabled">
                                        <option v-for="(option, k_op) in question.options" v-bind:key="k_op" v-bind:value="k_op">{{option.content}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="question-answer"><span class="required" >*</span>Justificación:</label>
                                    <editor-component :content="question.justify" v-bind:readonly="disabled" @updateText="SetJustifyEvent($event,k_q)" ></editor-component>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-if="playing">
                    <div class="row"  v-for="(question, k_q) in module.questions" v-bind:key="k_q" >
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 text-left">
                                    <div class="row">

                                        <div class="col-7"><label><span class="required" >*</span>Pregunta N° {{k_q+1}} :</label></div>
                                        <div class="col-5 text-right" v-if="type_user === 2">
                                            <button class="btn btn-warning" alt="Remover pregunta" v-if="(k_q)>0 && !disabled" @click.prevent="RemoveQuestionEvent(k_q)" >Remover pregunta</button>
                                        </div>
                                    </div>
                                    <div class="question_container" v-html="question.question">

                                    </div>
                                </div>
                            </div>
                            <template v-if="question.type_question!='OPEN_RTA'">
                                <div class="row"  v-for="(option, k_op) in question.options" v-bind:key="k_op">
                                    <div class="col-12 text-left">
                                        <button class="q-option" :disabled="disabled" @click="SelectOptionEvent(k_q,k_op)"    v-bind:class="{'q-option-checked':question.response==k_op}">{{option.content}} <i  class="fa fa-check" v-if="k_op==question.valid_answer_index && disabled"></i></button>
                                    </div>
                                </div>
                            </template>
                            <template v-if="question.type_question=='OPEN_RTA'">
                                <div class="row" >
                                     <div class="col-12">
                                         <editor-component :content="question.response" @updateText="SetResponseEvent($event,k_q)" v-bind:readonly="disabled" ></editor-component>
                                     </div>
                                </div>
                            </template>
                            <div class="row " v-if="disabled">
                                <div class="col-12">
                                    <label for="question-answer">Justificación:</label>
                                    <div class="question-answer" v-html="question.justify"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['module', 'disabled','playing','type_user'],
    data() {
        return {
            question_types:[
                {label:'RESPUESTA ÚNICA',id:'SIMPLE_RTA'},
                {label:'RESPUESTA ABIERTA',id:'OPEN_RTA'},
            ]
        }
    },
    methods:{
        AddQuestionEvent(){                          
            this.module.questions.push({
                question:"",
                type_question:'SIMPLE_RTA',
                options:[{
                    content:''
                },{
                    content:''
                }],
                valid_answer_index:0,
                justify:"",
            });
        },
        RemoveQuestionEvent(index){
            this.module.questions.splice(index,1);
        },
        AddOptionOnQuestion(index)
        {
            this.module.questions[index].options.push({
                content:''
            });
        },
        RemoveOptionOnQuestion(index_question,index)
        {
            this.module.questions[index_question].options.splice(index,1);
        },
    /*
        uploadQuestionFile(file){
            return new Promise((resolve,reject)=>{
                if(!file) resolve();
                let _fileNameSplit=file.name.split(".");
                let file_extension=_fileNameSplit[_fileNameSplit.length-1];
                let file_name=file.name.replace(`.${file_extension}`,'');
                let file_detail_name=`-editor-content-questions-${this.getRandom(1,9999999)}`;
                let file_url=`${window.location.origin}/uploads/editor_content/${file_name.split(' ').join('_')}${file_detail_name}.${file_extension}`;
                let data = new FormData();
                data.append("file", file);
                data.append("name", `${file_name}${file_detail_name}`);
                 axios.post("/api/file/upload/editor-content", data).then(response => {
                      resolve(file_url);
                }).catch(err=>{reject(err);});
            });
        },*/
        getRandom(min,max){
            return Math.random() * (max - min) + min;
        },
        SetQuestionEvent(content,ix_question){
           this.module.questions[ix_question].question=content;
        },
        SetJustifyEvent(content,ix_question){
           this.module.questions[ix_question].justify=content;
        },
        SetResponseEvent(content,ix_question){
           this.module.questions[ix_question].response=content;
        },
        SelectOptionEvent(ix_question,ix_option)
        {
            this.module.questions[ix_question].response=ix_option;
            this.module.questions=JSON.parse(JSON.stringify(this.module.questions));
            console.log( this.module.questions[ix_question])
        }
    }
}
</script>
<style>
.question{
    background-color:#e9ecefb5;
}
.div-icon-add{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.icon-remove{
  background-color:#f2f2f2;
  height:30px;
  width:40px;
  border:2px solid #8f8f8f;
  border-radius:5px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  cursor:default;
  font-weight:900;
  background-color:#ffc107;color:white;border-color:#ffc107;
}
.icon-remove:hover{ color:#ffc107;background-color:white;border-color:#ffc107;}
.icon-add{
  background-color:#233d68;
  height:30px;
  width:40px;
  border:2px solid #233d68;
  border-radius:5px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  cursor:default;
  font-weight:900;
  color:white;
}
/*Text Editor*/
.editor{ border: 1px solid #ced4da;background-color:white;border-radius: 0.25rem;}
.codex-editor__redactor{
    padding-bottom: 50px !important;
}
.visor{border:1px solid #7b7b7b;}
.question_container{font-family: "Century Gothic";width: 100%;padding:10px 20px;font-weight: 600;font-size:1.2em;border-radius:4px;}
.q-option {
    background-color: white;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 5px;
    border: 1px solid #f2f2f2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.q-option:hover {
    background-color: #ffe7a0;
    cursor: pointer;
}
.q-option-checked {
    background-color: #007bff !important;
    color: white;
    box-shadow: none;
}
.question-answer{
    padding:10px;
    background-color:white;
    border-radius:5px;
}
</style>