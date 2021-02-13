<template>
    <nav>
         <!--paginacion -->
			<ul class="pagination">
				<li class="page-item" v-if="pagination.current_page > 1">
					<a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)">
						<span>Atras</span>
					</a>
				</li>

				<li class="page-item" v-for="page in pagesNumber" v-bind:class="[ page == isActived ? 'active' : '']">
					<a class="page-link" href="#" @click.prevent="changePage(page)">
						{{ page }}
					</a>
				</li>

				<li class="page-item" v-if="pagination.current_page < pagination.last_page">
					<a class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)">
						<span>Siguiente</span>
					</a>
				</li>
			</ul>
		</nav>
</template>
<script>
export default {
    data() {
            return { 

        pagination: {
            'total':0,
            'current_page':0,
            'per_page' :0,
            'last_page' :0,
            'from' :0,
            'to' :0,
        },
        offset: 3
        }
    },
    created() {
        this.getPage();
    },
    //metodos para determinar si la pagina esta activa y cual es la pagina
    computed: {
        isActived() {
            return this.pagination.current_page;
        },
        pagesNumber() {
            if(!this.pagination.to){
                return [];
            }
            var from = this.pagination.current_page - this.offset;
            if(!from<1){
                from = 1;
            }
            var to = from +(this.offset * 2);
            if(to>= this.pagination.last_page){
                to = this.pagination.last_page;
            }
            var pagesArray = [];
            while(from<= to){
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }
    },
    mounted() {
    console.log("Component mounted.");
    },
    methods: { //metodos del CRUD
        getPage(page) {
            var urlKeeps = "tasks?page=" + page;
             axios.get(urlKeeps).then(response => {
                (this.pagination = response.data.pagination);
            });
        },
        changePage(page) {
            this.pagination.current_page = page;
        },

    }
}
</script>
