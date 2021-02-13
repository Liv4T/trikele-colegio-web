<template>
    <div >
        <div>
             <vue-editor v-model="content_editor" :editorToolbar="custom_toolbar"  v-on:text-change="method_executed" :disabled="readonly"></vue-editor>
        </div>
    </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
    props: ["content","customtoolbar","readonly"],
    components: {
        VueEditor
    },
    data(){
        return{
            content_editor: "",
            custom_toolbar: [["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }], ["image"]]
        };
    },
    mounted() {
        
        this.content_editor=this.content;

        if(this.customtoolbar)
        {  
            this.custom_toolbar=this.customtoolbar;
        }
    },
    methods: {
       method_executed()
       {

           this.$emit('updateText', this.content_editor)
      
       }
    }
}
</script>
<style>
.ql-editor{min-height: 100px;}
.quillWrapper{background-color:white;}
</style>