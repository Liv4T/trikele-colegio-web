<template>
<div class="container">
 <div class="row justify-content-center margin-top-20">
    <div class="col-md-4 col-lg-3">
      <div class="card">
        <div class="row">
            <div class="col-md-12 text-center">
                <h4>Ingresar</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10 col-md-10">
                <form onSubmit="return false;">
                    <div class="form-group">
                        <label><small class="label-required">*</small>Usuario</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                    </svg>
                                </span>
                            </div>
                            <input type="text" class="form-control" v-model="loginForm.username">
                        </div>
                    </div>
                    <div class="form-group">
                        <label><small class="label-required">*</small>Contraseña</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
                                        <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                                    </svg>
                                </span>
                            </div>
                            <input type="password" class="form-control" v-model="loginForm.password">
                        </div>
                    </div>
                    <div class="form-group content-button">
                        <button class="btn btn-Azul" @click="LoginEvent()" :disabled="!LoginValidForm()">Continuar con el pago</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card" >
        <div class="row">
            <div class="col-md-12 text-center">
                <h4>Crear cuenta</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10 col-md-10">
                 <form onSubmit="return false;">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Usuario</label>
                            <input type="text" class="form-control" v-model="registerForm.username">
                        </div>
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Contraseña</label>
                            <input type="password" class="form-control"  v-model="registerForm.password">
                        </div>
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Confirmar contraseña</label>
                            <input type="password" class="form-control"  v-model="registerForm.password_confirm">
                            <small v-if="registerForm.password_confirm && registerForm.password_confirm!=registerForm.password" class="form-text text-error">Contraseñas deben ser iguales</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label><small class="label-required">*</small>Tipo identificación</label>
                            <select class="form-control" v-model="registerForm.document_type">
                                <option v-for="(doc_type,doc_type_id) in document_types" v-bind:key="doc_type_id" v-bind:value="doc_type.id">{{doc_type.shortname}} {{doc_type.name}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label><small class="label-required">*</small>Identificación</label>
                            <input type="text" class="form-control" v-model="registerForm.identification">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Nombres</label>
                            <input type="text" class="form-control" v-model="registerForm.names">
                        </div>
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Apellidos</label>
                            <input type="text" class="form-control" v-model="registerForm.lastnames" >
                        </div>
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Número celular</label>
                            <input type="number" class="form-control" v-model="registerForm.cellphone" >
                            <small v-if="registerForm.cellphone && !validCellphone(registerForm.cellphone)" class="form-text text-error">Número de celular inválido</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label><small class="label-required">*</small>Correo electrónico</label>
                            <input type="email" class="form-control"  v-model="registerForm.email"  >
                            <small v-if="registerForm.email && !validEmail(registerForm.email)" class="form-text text-error">Correo inválido</small>
                        </div>
                        <div class="form-check col-md-6" >
                            <input type="checkbox"  id="check_term" v-model="registerForm.politics_accepted">
                            <label class="form-check-label" for="check_term"><small class="label-required">*</small>Acepta políticas, terminos y condiciones?</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group content-button col-md-12">
                            <button v-if="!events.register_loading" class="btn btn-Azul" @click="RegisterEvent()" :disabled="!RegisterValidForm()">Continuar con el pago</button>
                            <button v-if="events.register_loading" class="btn btn-primary"  :disabled="true">Registrando...</button>
                        </div>
                    </div>

                 </form>
            </div>
        </div>

      </div>
    </div>
  </div>
</div>

</template>
<script>

export default {
    props: ["plan_type","aut","voucher","area_id","payment_code"],
    data() {
        return {
            loginForm:{
                username:'',
                password:''
            },
            registerForm:{
                username:'',
                password:'',
                password_confirm:'',
                document_type:1,
                identification:'',
                names:'',
                lastnames:'',
                cellphone:'',
                email:'',
                politics_accepted:false
            },
            document_types:[],
            events:{
                register_loading:false
            }
        };
    },
    mounted(){
        if(this.aut>0)
        {
            this.navigateToResumen();
        }

        axios.get(`/api/document-type`).then((response) => {
            this.document_types=response.data;
        });
    },
    methods:{
        LoginValidForm()
        {
            return this.loginForm.username && this.loginForm.password;
        },
        LoginEvent()
        {
            axios.post(`/login/client/web`,{user_name:this.loginForm.username,password:this.loginForm.password}).then((response) => {
                 this.navigateToResumen();
            });
        },
        RegisterValidForm()
        {

            let password_confirm=this.registerForm.password == this.registerForm.password_confirm;
            let mailValid=this.validEmail(this.registerForm.email);
            let cellphoneValid=this.validCellphone(this.registerForm.cellphone);
            return this.registerForm.username
                && this.registerForm.password
                && password_confirm
                && this.registerForm.identification
                && this.registerForm.names
                && this.registerForm.lastnames
                && cellphoneValid
                && mailValid
                && this.registerForm.politics_accepted;
        },
        RegisterEvent()
        {
            this.events.register_loading=true;
            axios.post(`/api/customer`,{
                address: "",
                email: this.registerForm.email,
                id_number: this.registerForm.identification,
                last_name: this.registerForm.lastnames,
                name: this.registerForm.names,
                password: this.registerForm.password,
                phone: this.registerForm.cellphone,
                picture: [],
                type_user: "3",
                user_name: this.registerForm.username ,
                document_type:this.registerForm.document_type
            }).then((response) => {

                //this.loginForm.username=this.registerForm.username;
                //this.loginForm.password=this.registerForm.password;
                setTimeout(()=>{
                    this.loginForm.username=this.registerForm.username;
                    this.loginForm.password=this.registerForm.password;
                    this.events.register_loading=false;
                    this.LoginEvent();

                },2000)


            },(error)=>{

                this.events.register_loading=false;
                if(error.response.data.message=='The given data was invalid.')
                {
                    toastr.error("Se presento un error al procesar su solicitud. Por favor intente más tarde.");
                }
                else if(error.response.data.message.includes('1062 Duplicate entry')){
                    toastr.error("Usuario ya se encuentra registrado en el sistema, por valide su información.");
                }
                else if(error.response.data.message){
                    toastr.error(error.response.data.message);
                }

            });

        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validCellphone: function (cellphone) {
            var re = /^[3][1-2][0-9]*/;
            return re.test(cellphone) && cellphone.length==10;
        },
        navigateToResumen()
        {/*
            if(this.voucher)
            {
                 location.href=`/compra/plan/${this.plan_type}/area/${this.area_id}/resumen/v/${this.voucher}`;
            }
            else
            {
                 location.href=`/compra/plan/${this.plan_type}/area/${this.area_id}/resumen`;
                 console.log(location.href);
            }*/
            location.href=`/compra/pagar/mercadopago/${encodeURI(this.payment_code)}`;
        }

    }
};
</script>
<style>
*{font-family: 'Montserrat';}
h4{margin-top:20px;}
.border-bottom-1{border-bottom:1px solid #818181;}
form{margin-top:20px;padding:10px;}
.form-check-label{width:90%}
</style>
