<template>
    <div>
        
    </div>
</template>
<script>
(function() {
'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                }, false);
            });
        }, false);
})();
export default {
    
    data() {
        return {
        fillC: {'id': '','description': '','id_user':'','id_category':'','task':'','id_class':'','id_type':'','message':'', 'subtask':'' }
        }
    },
    methods:{
     getTasks(){
            var urlr = 'tasks';
            axios.get(urlr).then(response=> {
                this.tasks = response.data
            });
        },
        editTasks(task){
            this.fillC.id = task.id;
            this.fillC.description = task.description;
            this.fillC.name = task.name;
            this.fillC.id_user = task.id_user;
            this.fillC.id_category = task.id_category;
            this.fillC.id_subcategory = task.id_subcategory;
            this.fillC.subject = task.subject;
            this.fillC.task= task.task;
            this.fillC.objetive = task.objetive;
            this.fillC.id_type= task.id_type;
            this.fillC.id_class= task.id_class;
            this.fillC.subtask= task.subtask;
            this.fillC.message= task.message;
            $('#edit').modal('show');
        },
        updateTasks(id) {
            var url = 'tasks/'+ id;
            axios.put(url, this.fillC).then(response=> {
                this.getTasks();
                this.fillC= {'id': '','description': '','id_user':'','id_category':'','task':'','id_class':'','id_type':'','message':'', 'subtask':'' },
                this.errors = [];
                $('#edit').modal('hide');
                toastr.success('Class successfully edited');
                }).catch(error => {
                this.errors = error.response.data
                });
        },
    }
}
</script>
