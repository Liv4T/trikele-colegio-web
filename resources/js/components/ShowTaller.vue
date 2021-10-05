<template>
    <div>
        <button class="btn btn-primary col-md-5" v-on:click="backPage">Volver</button>
        <div v-for="(activity,key_a) in course.activities" v-bind:key="key_a">
            <activity-questionary v-if="activity.activity_type=='CUESTIONARIO' || activity.activity_type == 'CUESTIONARIO_UNICA_RTA'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-questionary>
            <activity-complete-sentence v-if="activity.activity_type=='COMPLETAR_ORACION'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-complete-sentence>
            <activity-relationship v-if="activity.activity_type=='RELACION'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-relationship>
            <activity-crossword v-if="activity.activity_type=='CRUCIGRAMA'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-crossword>
        </div>
    </div>    
</template>
<script>
export default { 
    props:['id_achievement','id_class','backPage'],
    data() {
        return {
            course:[],            
        };
    },
    watch:{
        id_class: function(newVal){            
            if(newVal){
                this.getData();
            }
        }
    },
    mounted(){
        if(this.id_class !== null){
            this.getData();
        }        
    },
    methods: {
        getData(){
            axios.get(`/api/teacher/module/${this.id_achievement}/class/${this.id_class}`).then((response) => {
                this.course=response.data;     
                console.log(response.data);           
                if(this.course.content.length==0)
                {
                    this.course.content=[
                        {
                            content_type:'YOUTUBE',
                            content:'',
                            description:''
                        },
                        {
                            content_type:'LINK',
                            content:'',
                            description:''
                        },
                        {
                            content_type:'DOCUMENT',
                            content:'',
                            description:''
                        }
                    ];
                }
                if(this.course.activities.length>0)
                {
                    this.course.activities.forEach(act=>{
                        act.delivery_max_date=act.delivery_max_date ? act.delivery_max_date && delivery_max_date.replace(" ","T") : '';
                        act.feedback_date=act.feedback_date.replace(" ","T");
                        this.GetIndicatorsEvent(act);
                    });
                }
            });
        },
    },
    
};
</script>