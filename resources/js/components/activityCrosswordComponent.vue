<template>
    <section class="crossword">
         <div class="row " v-if="!playing">
            <div class="col-8 text-left">
                <h4>Crucigrama</h4>
            </div>
            <div class="col-4 text-right">

            </div>
        </div>
        <div class="row" v-if="!disabled && !playing">
            <div class="col-sm padding-10">
                <p>*Ingrese cada letra de cada palabra en el orden vertical u horizontal que desee.</p>
            </div>
        </div>
        <div class="row" v-if="loading_component" >
            <div class="col-sm padding-10">
                <span>Cargando...</span>
            </div>
        </div>
        <template v-if="!loading_component" >
            <div v-if="!playing">
                <div class="card padding-10">
                        <div class="crossword_table" >
                            <div  class="crossword_table_row" v-for="(row,k_row) in table" v-bind:key="k_row" >
                                <div class="crossword_table_col" v-for="(col,k_col) in row.cols" v-bind:key="k_col">
                                    <input :ref="'input_'+k_row+'_'+k_col" v-if="k_row>0 && k_col>0" @change="InputChanged(k_row,k_col)" @input="col.letter = $event.target.value.toUpperCase()" class="crossword_table_col_input " :maxlength="1"  type="text" v-model="col.letter" @keyup.down="downEvent(k_row,k_col)" @keyup.right="rightEvent(k_row,k_col)" @keyup.up="topEvent(k_row,k_col)" @keyup.left="leftEvent(k_row,k_col)" v-bind:class="{ 'crossword_table_col_input-active': (col.letter!='' && col.letter!=null) }"  />
                                </div>
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col-sm padding-10 text-center">
                            <button class="btn btn-primary" @click="validateWords">Ingresar contenido</button>
                            </div>
                        </div>
                    </div>
                    <div class="card padding-10">
                        <div class="row ">
                            <div class="col-8 text-left">
                                <h4>Preguntas del crucigrama</h4>
                            </div>
                            <div class="col-4 text-right">

                            </div>
                        </div>
                        <div class="row" v-for="(word,k_word) in words" v-bind:key="k_word">
                            <div class="col-sm-4 padding-10">
                            <label>Palabra:</label>
                            <input type="text" class="form-control" :disabled="true" v-model="word.word" />
                            </div>
                            <div class="col-sm-8 padding-10">
                            <label>Pregunta</label>
                            <editor-component :content="word.content" v-bind:readonly="disabled" @updateText="SetWordContentEvent($event,k_word)"></editor-component>
                            </div>
                        </div>
                    </div>
            </div>
             <div v-if="playing">
                 <div class="card padding-10">
                        <div class="row ">
                            <div class="col-8 text-left">
                                <h4>Preguntas:</h4>
                            </div>
                            <div class="col-4 text-right">

                            </div>
                        </div>
                        <div class="row" v-for="(word,k_word) in words" v-bind:key="k_word">
                            <div class="col-sm-8 padding-10" style="display:flex;flex-direction:row">
                                 <label style="margin-right:10px;font-weight:bold">{{k_word+1}}. </label>
                                 <div v-html="word.content" style="margin-right:10px;"></div>
                                 <small v-if="word.response && word.response.toUpperCase()==word.word.toUpperCase() && disabled"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path style="fill:#48DA7E" fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg> ({{word.word}}). </small>
                                 <small v-if="word.response && word.response.toUpperCase()!=word.word.toUpperCase() && disabled"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path style="fill:#D61D5A" d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path><path style="fill:#D61D5A" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg> ({{word.word}}). Respondiste: {{word.response}}</small>
                            </div>
                        </div>
                    </div>
                    <div class="card padding-10" v-if="!disabled">
                        <div class="crossword_table" >
                            <div  class="crossword_table_row" v-for="(row,k_row) in table" v-bind:key="k_row" >
                                <div class="crossword_table_col_resp_input" v-for="(col,k_col) in row.cols" v-bind:key="k_col">
                                    <input v-if="!col.title && col.letter" :ref="'input_'+k_row+'_'+k_col" @change="InputResponseChanged(k_row,k_col)" @input="col.response = $event.target.value.toUpperCase()" class="crossword_table_col_input " :maxlength="1"  type="text" v-model="col.response" @keyup.down="downEvent(k_row,k_col)" @keyup.right="rightEvent(k_row,k_col)" @keyup.up="topEvent(k_row,k_col)" @keyup.left="leftEvent(k_row,k_col)" v-bind:class="{ 'crossword_table_col_resp_input-active': (col.letter!='' && col.letter!=null) }"  />
                                    <span v-if="col.title">{{col.response}}</span>
                                </div>
                            </div>
                        </div>
                    </div>

             </div>



        </template>

    </section>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
    props:['module', 'disabled','playing'],
    data() {
        return {
            loading_component:true,
            rows:15,
            cols:15,
            table:[],
            words:[]
        }
    },
    mounted() {
        if(this.module.table===undefined||this.module.table.length==0)
        {
            this.module.table=[];
             this.table=[];
            for (let r = 0; r < this.rows; r++) {
                let cols=[];
                for (let c = 0; c <this.cols; c++) {
                    cols.push({index:c,letter:''});
                }

                this.table.push({index:r,cols:cols});
                cols=[];
            }

        }
        else{

             this.table=[];
                    this.words=this.module.words;
                    this.module.table.forEach(r=>{
                        let col=[];
                        r.cols.forEach(c=>{
                            if(c.letter==null)
                            {
                                c.letter='';
                                c.response='';
                                c.title=false;
                            }
                            col.push(c);
                        })
                        r.cols=col;
                        this.table.push(r);
                    });

                this.validateWords();

                    if(this.playing)
                    {
                        let w_i=1;
                        this.words.forEach(w=>{
                            if(w.letters[0].r==w.letters[1].r)
                            {
                                let _c= w.letters[0].c-1;
                                this.table[w.letters[0].r].cols[_c]={letter:w_i,response:w_i,title:true};
                                }
                            else
                            {
                                let _r= w.letters[0].r-1;
                                this.table[_r].cols[w.letters[0].c]={letter:w_i,response:w_i,title:true};
                            }

                            w_i++;
                        })
                    }



        }

       this.loadingComponent();
    },
    methods: {
        loadingComponent()
        {
            this.loading_component=true;
            setTimeout(()=>{
                this.loading_component=false;
            },1000)
        },
        downEvent(k_row,k_col){
            if(this.cols==(k_col+1)) return;

            let refs=this.$refs;
            let input='';
            eval('input=refs.input_'+(k_row)+'_'+(k_col+1));
            if(!input || input.length==0)return;
            input[0].focus();
            input[0].select();

        },
        rightEvent(k_row,k_col){
            if(this.rows==(k_row+1)) return;

            let refs=this.$refs;
            let input='';
            eval('input=refs.input_'+(k_row+1)+'_'+(k_col));
            if(!input || input.length==0)return;
            input[0].focus();
            input[0].select();

        },
        topEvent(k_row,k_col){
             if(0==(k_col)) return;

            let refs=this.$refs;
            let input='';
            eval('input=refs.input_'+(k_row)+'_'+(k_col-1));
            if(!input || input.length==0)return;
            input[0].focus();
            input[0].select();

        },
        leftEvent(k_row,k_col){
             if(0==(k_row)) return;

            let refs=this.$refs;
            let input='';
            eval('input=refs.input_'+(k_row-1)+'_'+(k_col));
            if(!input || input.length==0)return;
            input[0].focus();
            input[0].select();

        },
        InputChanged(k_row,k_col){
            this.module.table=this.table;
        },
        InputResponseChanged(k_row,k_col){
            this.module.table=this.table;
            this.validateResponse();
        },
        validateWords()
        {
            let word='';
            let existLetter=false;
            let letters=[];

            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {

                    let cell=this.table[r].cols[c];
                    word+=cell.letter;
                    letters.push({r:r,c:c});

                    if(cell.letter!='' && !existLetter)
                    {
                        word=cell.letter;
                        letters=[{r:r,c:c}];
                    }
                    else if(cell.letter=='' && existLetter && word.length>1)
                    {
                        if(this.words.filter(p=>p.word===word.trim()).length==0)
                        {
                            this.words.push({word:word,content:'',letters:letters});
                        }

                        existLetter=false;
                        word='';
                        letters=[];
                    }

                    existLetter=(cell.letter!='');

                }

            }

            for (let c = 0; c < this.cols; c++) {
                for (let r = 0; r < this.rows; r++) {

                        let cell=this.table[r].cols[c];
                        word+=cell.letter;
                        letters.push({r:r,c:c});

                        if(cell.letter!='' && !existLetter)
                        {
                            word=cell.letter;
                            letters=[{r:r,c:c}];
                        }
                        else if(cell.letter=='' && existLetter && word.length>1)
                        {
                            if(this.words.filter(p=>p.word===word.trim()).length==0)
                            {
                                this.words.push({word:word,content:'',letters:letters});
                            }

                            existLetter=false;
                            word='';
                            letters=[];
                        }

                        existLetter=(cell.letter!='');

                }
            }

            if(this.words.length==0)
            {
                alert('Por favor ingrese las palabras del crucigrama en la tabla.')
            }
            else
            {
                this.module.words=this.words;
                this.module.table=this.table;
            }

        },
        validateResponse(){
            this.words.forEach(w=>{
                w.response='';
                w.letters.forEach((l)=>{
                    if(this.table[l.r].cols[l.c].response)
                    {
                        w.response+=this.table[l.r].cols[l.c].response;
                    }
                });
            });

            this.module.words=this.words;
        },
        SetWordContentEvent(content,k_word){
          this.words[k_word].content=content;
          this.module.words=this.words;


        },
    }
}
</script>
<style>
.crossword{
    background-color:#e9ecefb5;
    padding:5px;
}
.crossword_table{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.crossword_table_row{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.crossword_table_col{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border:1px solid #e2e2e2;
}
.crossword_table_col_input{
    width:40px;
    height: 40px;
    text-align: center;
    border:2px solid #fff;
    text-transform: uppercase;
}
.crossword_table_col_input-active
{
    border:2px solid #4b87f7;
}
.crossword_table_col_resp_input{
  width:40px;
  height: 40px;
  padding:1px;
}
.crossword_table_col_resp_input-active
{
    border:1px solid #4b87f7;
}
</style>
