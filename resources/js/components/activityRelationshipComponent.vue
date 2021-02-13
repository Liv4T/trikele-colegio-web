<template>
    <section class="relationship" >
        <template v-if="!playing">
            <div class="row ">
                <div class="col-8 text-left">
                    <h4>Ejercicio de relación</h4>
                </div>
                <div class="col-4 text-right">
                    <button type="button" class="btn btn-primary" :disabled="disabled" @click="AddItemEvent">Agregar item</button>
                </div>
            </div>
            <div class="row" v-if="!disabled">
                <div class="col-sm padding-10">
                    <p>*Agregue cada par de items, estos se organizarán aleatoriamente para que el estudiante relaciones segun corresponda.</p>
                </div>
            </div>
            <div class="row" >
                <div class="col-sm padding-10">
                <button type="button" class="btn btn-primary" @click="PreviewEvent">{{preview?'Editar':'Previsualizar'}}</button>
                </div>
            </div>
            <div class="row" v-if="loading_component" >
                <div class="col-sm padding-10">
                    <span>Cargando...</span>
                </div>
            </div>
            <template v-if="!loading_component && !preview" >
                <div class="row" v-for="(item,k_item) in module.items" v-bind:key="k_item">
                    <div class="col-sm ">
                        <div class="card padding-10">
                            <div class="row" >
                                <div class="col-12  col-lg-12" >
                                    <div class="icon-remove-button" alt="Remover item" v-if="(k_item)>0" @click="RemoveItemEvent(k_item)">- Remover</div>
                                </div>
                            </div>
                            <div class="row" >
                                <div class="col-12  col-lg-6 padding-10" >
                                    <label>Item {{k_item+1}}:</label>
                                    <editor-component :content="item.content_left" v-bind:readonly="disabled" @updateText="SetContentLeftEvent($event,k_item)" ></editor-component>
                                </div>
                                <div class="col-12  col-lg-6 padding-10" >
                                    <label>Relacionado con:</label>
                                    <editor-component :content="item.content_right" v-bind:readonly="disabled" @updateText="SetContentRightEvent($event,k_item)" ></editor-component>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-if="!loading_component && preview" >
                <div class="row" v-for="(item,k_item) in items_right" v-bind:key="k_item">
                    <div class="col-sm ">
                        <div class="card padding-10">
                            <div class="row" >
                                <div class="col-12  col-lg-4 padding-10" >
                                    <label>{{k_item+1}}.</label>
                                    <div class="relation-container relation-container_draggable" v-on:dragstart="DragEvent($event,k_item)" v-on:drag="DraggingEvent" draggable="true" v-html="items_left[k_item].content_left"></div>
                                </div>
                                <div class="col-12  col-lg-4 padding-10" >
                                    <label>Arrastrar aca.</label>
                                    <div class="relation-container relation-container_drop"  v-on:drop="DropEvent($event,k_item)" v-on:dragover="AllowDropEvent" v-html="selected_items[k_item].content"></div>
                                </div>
                                <div class="col-12  col-lg-4 padding-10" >
                                    <label></label>
                                    <div class="relation-container" v-html="item.content_right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </template>
        <template v-else>
             <div class="row" v-if="loading_component" >
                <div class="col-sm padding-10">
                    <span>Cargando...</span>
                </div>
            </div>
            <template v-if="!loading_component" >
                <div class="row" v-for="(item,k_item) in items_right" v-bind:key="k_item">
                    <div class="col-sm ">
                        <div class="card padding-10">
                            <div class="row" >
                                <div class="col-12  col-lg-4 padding-10" >
                                    <label>{{k_item+1}}.</label>
                                    <div class="relation-container" v-html="item.content_right"></div>
                                </div>
                                <div class="col-12  col-lg-4 padding-10" >
                                    <small>{{(!disabled)?'Arrastrar aca.':'Respuesta:'}}</small>
                                    <div class="relation-container relation-container_drop"  v-on:drop="DropEvent($event,k_item)" v-on:dblclick="RemoveSelection(k_item)" v-on:dragover="AllowDropEvent" v-html="selected_items[k_item].content"></div>
                                </div>
                                <div class="col-12  col-lg-4 padding-10" v-if="!disabled">
                                    <small>Clic sin levantar, para arrastrar.</small>
                                    <div class="relation-container relation-container_draggable" v-on:dragstart="DragEvent($event,k_item)" v-on:drag="DraggingEvent" draggable="true" v-html="items_left[k_item].content_left"></div>
                                </div>
                                <div class="col-12  col-lg-4 padding-10" v-else>
                                    <small v-if="items_right[k_item].index==items_left[k_item].index"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path style="fill:#48DA7E" fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg> Es correcto.</small>
                                    <small v-if="items_right[k_item].index!=items_left[k_item].index"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path style="fill:#D61D5A" d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path><path style="fill:#D61D5A" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg> Es incorrecto, debe ser:</small>
                                    <div class="relation-container relation-container_draggable"  v-html="items_right[k_item].content_left"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </template>
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
            preview:false,
            items_left:[],
            items_right:[],
            selected_items:[]
        }
    },
    mounted() {
        if(this.module.items===undefined||this.module.items==null)
        {
            this.module.items=[{
                content_left:'',
                content_right:''
            }];
        }
        console.log(this.module);
        if(this.playing && this.module.student_response)
        {
            this.items_left=this.module.student_response.items_left;
            this.items_right=this.module.student_response.items_right;
            this.selected_items=this.module.student_response.selected_items;
        }
        else if(this.playing && !this.disabled){
            this.createRandomLists();
        }

       this.loadingComponent();
    },
    methods: {
        AddItemEvent(){
            this.preview=false;
            this.loadingComponent();

            this.module.items.push({
                content_left:'',
                content_right:'',
                index:this.module.items.length
            });
        },
        SetContentLeftEvent($e,index)
        {
            this.module.items[index].content_left=$e;
        },
        SetContentRightEvent($e,index)
        {
            this.module.items[index].content_right=$e;
        },
        RemoveItemEvent(index)
        {
            this.module.items.splice(index,1);
            this.loadingComponent();

        },
        loadingComponent()
        {
            this.loading_component=true;
            setTimeout(()=>{
                this.loading_component=false;
            },2000)
        },
        PreviewEvent()
        {
            this.preview=(!this.preview);

            this.createRandomLists();

        },
        DragEvent(ev,index)
        {
            //console.log(ev);

            if(!ev) return;
           ev.dataTransfer.setData("index", index);
        },
        DropEvent(ev,index)
        {
            if(this.disabled) return;

            ev.preventDefault();
            var indexLeftItem = ev.dataTransfer.getData("index");

            if(this.selected_items.find(p=>p.index==indexLeftItem)!=null)
            {
                return;
            }

            this.selected_items[index].content=this.items_left[indexLeftItem].content_left;
            this.selected_items[index].index=indexLeftItem;

            if(this.playing)
            {
                this.module.student_response={
                    selected_items:this.selected_items,
                    items_left:this.items_left,
                    items_right:this.items_right
                };
            }



           // ev.target.appendChild(document.getElementById(data));
        },
        AllowDropEvent(ev) {
            ev.preventDefault();
        },
        DraggingEvent()
        {
            //console.log('start dragging')
        },
        RemoveSelection(index){

            if(this.disabled) return;

            this.selected_items[index].content='';
            this.selected_items[index].index=null;
        },
        createRandomLists()
        {

            this.items_left=this.shuffleList(this.module.items);
            this.items_right=this.module.items;
            this.selected_items=[];
            this.module.items.forEach(()=>{
                this.selected_items.push({index:null,content:''});
            });

        },
        shuffleList(array)
        {
                let newArray=[];
                var currentIndex = array.length, temporaryValue, randomIndex;

                let i=0;
                 while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    newArray[i] = temporaryValue;
                    i++;
                }

                return newArray;
        }
    }
}
</script>
<style>
.relationship{
    background-color:#e9ecefb5;
    padding:5px;
}
.relationship .icon-remove-button{
  background-color:white;
  height:30px;
  width:100px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  cursor:default;
  color:rgb(255, 0, 21);
  font-weight:600;
}
.relationship .icon-remove-button:hover{ background-color:#f2f2f2;}
.relation-container{
    border:2px solid #f2f2f2;
    padding:5px;
    border-radius: 5px;
    min-height:100px;
    text-align: center;
}
.relation-container_draggable:hover{
    border:2px solid #aeff44;
    background-color:#ebffd2;
}
.relation-container_drop:hover{
    border:2px solid #ffbe44;
    background-color:#ffe7bb;
}
</style>
