<template>
    <div class="complete-sentence">
        <div class="row " v-if="!playing">
            <div class="col-8 text-left">
                <h4>Completar la oración</h4>
            </div>
            <div class="col-4 text-right" >
                <button type="button" class="btn btn-primary" :disabled="disabled" @click="AddSentenceEvent">Agregar oración</button>
            </div>
        </div>
        <template v-if="!playing">
            <div class="row" v-for="(sentence,k_sentence) in module.sentences" v-bind:key="k_sentence">
                <div class="col-sm ">
                    <div class="card padding-10">
                        <div class="row" v-if="!disabled">
                            <div class="col-12  col-lg-6 padding-10" >
                                <label>Contenido de la oración:</label>
                                <textarea class="form-control input-color" rows="4" v-model="sentence.content" placeholder="Contenido"  @change="EvaluateContent(k_sentence, sentence)"></textarea>
                                <div class="row">
                                    <div class="col-sm text-left">
                                        <button type="button" class="btn btn-link" @click="AddInputEvent(k_sentence,sentence)">Agregar campo</button>
                                    </div>
                                </div>
                                <div class="row" v-for="(property,k_property) in sentence.properties" v-bind:key="k_property">
                                    <div class="col-sm padding-10">
                                        <label>Respuesta del campo {{(k_property+1)}}:</label>
                                        <input class="form-control" type="text" v-model="property.text" placeholder="opción1,opción2 " @change="EvaluateContent(k_sentence, sentence)" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12  col-lg-6 padding-10">
                                <div class="label-preview">
                                    <label>Previsualización:</label>
                                    <button class="btn btn-default label-preview_button" @click="RefreshContent(k_sentence, sentence)">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></svg>
                                    </button>
                                </div>

                                <div class="paragraph-sentence">
                                    <p>
                                        <span v-for="(property,k_content) in module.sentences[k_sentence].content_array" v-bind:key="k_content">
                                            {{property.text}} <input class="input-word"  v-if="sentence.properties[k_content]" type="text" v-model="sentence.properties[k_content].text" :placeholder="'Respuesta '+(k_content+1)"/>
                                        </span>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="row" v-if="disabled">
                            <div class="col-12 padding-10">
                                <label>Completar las oraciones:</label>
                                <div class="paragraph-sentence-preview">
                                    <p>

                                        <span v-for="(property,k_content) in module.sentences[k_sentence].content_array" v-bind:key="k_content">
                                            {{property.text}}  <input class="input-word"  type="text" v-if="sentence.properties[k_content]" v-model="sentence.responses[k_content]"  @change="RefreshResponse(k_sentence)" :placeholder="'Respuesta '+(k_content+1)" :disabled="disabled" />
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="playing">
             <div class="row" v-for="(sentence,k_sentence) in module.sentences" v-bind:key="k_sentence">
                 <div class="col-sm ">
                     <h5>{{k_sentence+1}}.</h5>
                      <div class="paragraph-sentence">
                            <p>
                                <span v-for="(property,k_content) in sentence.content_array" v-bind:key="k_content">
                                    {{property.text}} <input class="input-word"  v-if="sentence.student_response[k_content]" type="text" v-model="sentence.student_response[k_content].response" :placeholder="'Respuesta '+(k_content+1)" :disabled="disabled" />
                                    <i class="check-ok" v-if="disabled && sentence.student_response[k_content]">
                                        <svg  v-if="EvaluateReponse(sentence.student_response[k_content])" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path style="fill:#48DA7E" fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path style="fill:#D61D5A" d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path><path style="fill:#D61D5A" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>
                                    </i>
                                </span>
                            </p>
                      </div>
                 </div>
             </div>
        </template>



    </div>
</template>
<script>
export default {
    props:['module', 'disabled','playing'],
    data() {
        return {

        }
    },
    mounted() {

        if(this.module)
        {
            if(this.playing)
            {
                this.module.sentences.forEach(s=>{

                    if(!s.student_response||s.student_response.length==0)
                        s.student_response=s.properties.map(p=>{return {content:p.text,response:''}});
                });

            }

        }
        else{
            this.module.sentences=[];
        }

    },
    methods: {
        AddSentenceEvent(){
            this.module.sentences.push({content:'',properties:[]});
        },
        AddInputEvent(i_sentence,sentence){
           sentence.content=`${sentence.content} ~input~`;

          this.EvaluateContent(i_sentence);
        },
        RefreshContent(i_sentence,sentence)
        {
             sentence.content=`${sentence.content} `;

             this.EvaluateContent(i_sentence);
        },
        RefreshResponse(i_sentence){

            let d={sentences:[], complete:false, score:0};
            let total=0;
            let corrects=0;

            this.module.sentences.forEach(s=>{
                let res=[];
                let i=0;
                s.responses.forEach(r=>{

                    let responses_correct=s.properties[i].text.split(',');

                    let isCorrect=(responses_correct.filter(p=>p.toLowerCase()==r.toLowerCase()).length>0);

                    if(isCorrect)
                    {
                        corrects++;
                    }

                      total++;

                    res.push({response:r,isCorrect:isCorrect});
                    i++;
                });

            });

            d.complete= this.module.sentences[i_sentence].responses.filter(p=>p=='').length==0;
            d.score=(corrects*5)/total;
            d.sentences=this.module.sentences;
+
            this.$emit('refresh-data',d);
        },
        EvaluateContent(i_sentence)
        {
            if(!this.module.sentences[i_sentence].content) return;

           this.module.sentences[i_sentence].content_array=[];

            let i=0;

             this.module.sentences[i_sentence].content.split(/(\~input\~)/g).forEach(e=>{
                 if(e!='~input~')
                 {
                   this.module.sentences[i_sentence].content_array.push({text:e});
                 }
                 else{

                     if(this.module.sentences[i_sentence].properties.length<=i)
                     {
                        this.module.sentences[i_sentence].properties.push({text:''});
                     }

                    i++;
                 }

             });

            let dif=this.module.sentences[i_sentence].properties.length-(i);

            for (let j = 0; j <dif; j++) {
                this.module.sentences[i_sentence].properties.splice(this.module.sentences[i_sentence].properties.length-1-j,1);
            }


           this.$emit('refresh-data',{sentences:this.module.sentences, complete: this.module.sentences[i_sentence].properties.filter(p=>p.text=='').length==0});

        },
        EvaluateReponse(student_response)
        {
            if(!student_response) return false;

            if(!student_response.response) return false;

            if(!student_response.content) return false;

            let contains=false;
            student_response.content.toLowerCase().split(',').forEach(i=>{
                if(i==(student_response.response.toLowerCase())){
                    contains=true;
                }
            })

            return contains;
        }
    }
}
</script>
<style>
.complete-sentence{
    background-color:#e9ecefb5;
    padding:5px;
}
.input-word{
    height:30px ;
    border-radius: 5px;
    background-color:rgb(179, 209, 255);
    border-width: 0px;
    padding: 0px 15px;
    color:black;
}
.paragraph-sentence{
    padding: 5px 15px;
    background: #fff;
    border-radius: 5px;
}
.paragraph-sentence>p{
    line-height: 3.5;
    font-weight: 500;
    text-align: justify;
}
.paragraph-sentence-preview>p{
    line-height: 3.0;
    font-weight: 500;
    text-align: justify;
    font-size: 1.2em;
}
.input-color{
    background-color:#fffde7;
}
.label-preview{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}
.label-preview_button{
     animation-duration: 5s;
     outline:none;
}
.label-preview_button:hover{
    transform: rotate(360deg) ;
}
.label-preview_button:hover>svg{
    fill:#61f174;
}
</style>
