<template>
    <div class="fondo-lista">
        <div class="phone" style="text-align:center; padding-bottom:10px;">
            <a href="/compra/plan/MENSUAL/resumen"><img src="/uploads/home/banner-compra.png" alt=""></a>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-3"  style="background-color: #ffffffa3;">
                <ul style="list-style: none;" v-for="(option,key) in grades" :key="key">
                    <li v-if="option.id >= 5">
                        <a class="etiqueta letra-boldfont" :href="`/materias/${option.id}`"> {{ option.grade }} </a>
                        <ul style="list-style: none;" v-for="(item, key) in option.areas" :key="key">
                            <li>
                                <a class="etiqueta letra-poppins"  :href="`/modulos_home/${item.id}/${option.id}`" v-if="item.name!='Inglés'&& item.name!='Física'">{{ item.name }} </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="crud" class="col-sm-8">
                <div class="custom-card  text-center">
                    <div class="card-header text-center row" style=" border-radius: 15px; background-color:#8ac43f;">
                        <div class="col-md-5" style="display: inline-flex;"><img src="/uploads/home/trikelechiqui.png" alt=""><h2 class="letra-boldfont" style="align-self: center; color:white;">Busca tu tema</h2> </div>
                        <input class="form-control col-md-6" style="align-self: center;" type="text" placeholder="Tema" v-model="filter" />
                        <autocomplete @submit="search" :search="search"></autocomplete>
                    </div>
                    <div class=" row padding-20">
                        <div style="text-align:center;" class="desktop padding-20">
                            <a href="/compra/plan/MENSUAL/resumen"><img src="/uploads/home/banner-compra.png" alt=""></a>
                        </div>
                        <div class="row">
                            <div class="col-md-4" style="min-width: 200px;" v-for="(row, index) in clases" :key="index">
                                <div v-if="index < cardsToShow">
                                    <div class="card text-center descripcion">
                                        <img class="card-img-top" :src="row.image" style="max-width:70%; align-self: center;"/>
                                        <div class="card-body d-flex flex-column justify-content-between" style="min-height:280px;">
                                            <p class=" text-center overflow-ellipsis2 letra-poppins-bold" v-html="highlightMatches(row.name)">
                                            </p>

                                            <p class="overflow-ellipsis letra-poppins" v-html="(row.subject)">
                                            </p>
                                                
                                            <p style="color:gray;">Cantidad de clases: {{ row.quantity_class}}</p>
                                                
                                            <p style="display:none;" v-html="(row.keywords)">
                                            </p>
                                            <div>
                                                <a :href="'/modulo_clases/'+row.id_weekly" class="btn btn-Azul letra-boldfont">
                                                    Ver más
                                                </a>
                                                <a :href="`/compra/plan/${plan_code?plan_code:'MODULO'}/modulo/${row.id_weekly}/resumen`" class="btn btn-trikele letra-boldfont">
                                                    {{plan_code?'Seleccionar':`Comprar $${formatPrice(row.price)}`}}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div v-if="cardsToShow < filteredRows.length || filteredRows.length > cardsToShow">
                        <button @click="cardsToShow += 9" class="btn btn-Azul letra-boldfont">Ver mas</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group text-center">
            <img class="" src="/uploads/home/recurso9.png" />
        </div>
    </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'
Vue.component("multiselect", Multiselect);
Vue.use(Autocomplete)
export default {
    components: { Multiselect, Autocomplete},
    props: ["plan_code"],
    data() {
        return {
            clases: [],
            classroom: "",
            value: [{ name: "Todos", code: "js" }],
            descripcion: "",
            areas: [],
            fechaE: "",
            fechaR: "",
            id_act: "",
            errors: [],
            fillS: [],
            area: null,
            grades:[],
            filter: "",
            cardsToShow: 6,
            totalCards: 0,
            className: false,
            subject: false
        };
    },
    mounted() {
        var url = window.location.origin + "/getAllClass";
        axios.get(url).then((response) => {
            this.clases = response.data;
        });
        
        var urlg = window.location.origin + "/getAllGrades";
        axios.get(urlg).then((response) => {
            this.grades = response.data;
        });
    },

    methods: {
        search(input) {
            if(input != undefined){
                this.filter = input;
            }
       
            let data = []
            if (input.length < 1) {return [];}

            let classs =  this.clases.filter(clase => {
                let className = clase.name.toLowerCase().startsWith(input.toLowerCase())
                if(className == true){
                    this.className = true;
                    this.subject = false;
                }
                return className
            });

            classs.forEach((el)=>{
                data.push(el.name)
            })


            let subject = this.clases.filter(clase => {
                let subject = clase.subject.toLowerCase().startsWith(input.toLowerCase());
                if(subject == true){
                    this.subject = true;
                    this.className = false;
                }
                return subject
            });


            subject.forEach((el)=>{
                data.push(el.subject)
            })

            const uniqueArray = [...new Set(data)];

            return uniqueArray
        },

        highlightMatches(texto) {
            if(texto){
                const matchExists = texto.toLowerCase().includes(this.filter.toLowerCase());
                if (!matchExists) return texto;

                const re = new RegExp(this.filter, "ig");
                return texto.replace(
                    re,
                    (matchedText) => `<strong>${matchedText}</strong>`
                );
            }else{
                return ''
            }       
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    },
    computed: {
        filteredRows() {
            return this.clases.filter((row) => {
                if(row.name){
                    let text = ""
                    if(this.className == true){
                        text = row.name.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    }else if(this.subject == true){
                        text = row.subject.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    }else if(this.className == false && this.subject == false){

                        text = row.name.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    }
                    const searchTerm = this.filter.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

                    return text.includes(searchTerm);
                }else {
                    return ''
                }            
            });
        },
    },
};
</script>
<style>
.overflow-ellipsis{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.overflow-ellipsis2{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.phone{
    display: none;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
.phone{
    display: inline;
}
.desktop{
    display: none;
}
}

.overflow-ellipsis{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.overflow-ellipsis2{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.phone{
    display: none;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
.phone{
    display: inline;
}
.desktop{
    display: none;
}
}
</style>
