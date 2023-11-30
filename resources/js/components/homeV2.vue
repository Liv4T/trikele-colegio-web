<template>
    <div>
        <section class="home-section-1">
            <div class="new-navbar">
                <nav class="navbar navbar-expand-md navbar-light nav-height">
                    <ul class="navbar-nav mr-sm-6 justify-content-start flex-nav nav-height">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContentMenu" aria-controls="navbarContentMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarContentMenu">
                            <ul class="navbar-nav ml-auto nav-phone">
                                <li class="">
                                    <a class="color-nav" href="/program">Programas</a>
                                </li>
                                <li class="">
                                    <a class="color-nav" href="#queEs">¿Qué es?</a>
                                </li>
                                <li class="">
                                    <a class="color-nav" href="#metodoTrikele">Método Trikele</a>
                                </li>
                                <li class="">
                                    <a class="color-nav" href="#testimonio">Testimonios</a>
                                </li>
                                <li class="">
                                    <a class="color-nav" href="#contactanos">Contáctanos</a>
                                </li>
                                <li class="">
                                    <a class="color-nav" href="/loginNew">Iniciar Sesión</a>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </nav>
            </div>
            <div class="new-navbar-orange desktop"></div>
            <div class="btn-position">
                <div class="col-md-12">
                    <a :href='"/loginNew"' class="btn btn-login">Iniciar Sesión</a>
                </div>
            </div>
        </section>
        <section class="home-section-2" id="queEs">
            <div class="text-position">
                <p>Trikele es un colegio personalizado que se adapta a las necesidades individuales de cada estudiante a través de la tecnología.</p>
                <p>En este colegio, los estudiantes tienen la flexibilidad de aprender a su propio ritmo recibiendo atención personalizada de los docentes.</p>
            </div>
        </section>
        <section class="home-section-3" id="metodoTrikele">
            <div class="text-position-metodo">
                <p>Este enfoque personalizado que brinda Trikele permite a los estudiantes, deportistas, artistas y emprendedores desarrollar habilidades de autogestión, fomentar su autonomía y concentrarse en sus intereses y sin descuidar sus metas académicas.</p>
            </div>
            <div class="text-whatsapp1">
                <p>316 010 8409</p>
            </div>
        </section>
        <section class="home-section-4" id="testimonios">
            <iframe class="youtube-position" src="https://www.youtube.com/embed/VaZaMqj3OLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section class="home-section-5">
            <div>
                <div class="team-text-position1">
                    <p>Lic. En filosofía y humanidades de la Universidad Sergio Arboleda, con 19 años de experiencia en educación formal,  formación en ISSO 21001 y coordinadora académica del colegio Trikele.</p>
                </div>
                <div class="team-text-position2">
                    <p>Licenciada en educación universidad javeriana, Especialización en lenguas modernas universidad Javeriana, Especialización en Gestión y evaluación, Universidad externado de Colombia, Experiencia en educación desde 1977.</p>
                </div>
                <div class="team-text-position3">
                    <p>Carlos Felipe Diago, Administrador de Empresas del CESA en Colombia con IMBA en IE Business School de madrid, España, Emprendedor, con más de 15 años trabajando en educación, hoy estando al frente como Director General del Colegio Trikele.</p>
                </div>
            </div>
        </section>
        <section class="home-section-6">
            <div class="position-form desktop">
                <div class="col-lg-12">
                    <form v-on:submit.prevent="createSignUp">
                        <div class="form__group field">
                            <input type="text" class="form__field" name="name" id="name" v-model="name" placeholder="Nombre" required>
                            <label for="name" class="form__label">Nombre</label>
                        </div>
                        <div class="form__group field">
                            <input type="email" class="form__field" name="email" id="email" v-model="email" placeholder="Correo Electrónico" required>
                            <label for="email" class="form__label">Correo Electrónico</label>
                        </div>
                        <div class="form__group field">
                            <input type="text" class="form__field" name="phone" id="phone" v-model="phone" placeholder="Teléfono" required>
                            <label for="phone" class="form__label">Teléfono</label>
                        </div>
                        <div class="form__group field" style="margin-bottom:10px;">
                            <textarea type="textarea" class="form__field" name="message" id="message" v-model="message" placeholder="Mensaje" size="lg" rows="6" required></textarea>
                            <label for="message" class="form__label">Mensaje</label>
                        </div>
                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" required>
                            <label class="form-check-label text-terms" for="gridCheck">
                                Acepto Políticas de datos y términos y condiciones
                            </label>
                        </div> -->
                        <div>
                            <button type="submit" class="btn text-center btn-form">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="position-form phone">
                <div class="col-lg-12">
                    <form v-on:submit.prevent="createSignUp" style="display: flex;">
                        <div class="col-lg-6">
                            <div class="form__group field">
                                <input type="text" class="form__field" name="name" id="name" v-model="name" placeholder="Nombre" required>
                                <label for="name" class="form__label">Nombre</label>
                            </div>
                            <div class="form__group field">
                                <input type="email" class="form__field" name="email" id="email" v-model="email" placeholder="Correo Electrónico" required>
                                <label for="email" class="form__label">Correo</label>
                            </div>
                            <div class="form__group">
                                <button type="submit" class="btn btn-primary text-center btn-form">Enviar</button>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form__group field">
                                <input type="text" class="form__field" name="phone" id="phone" v-model="phone" placeholder="Teléfono" required>
                                <label for="phone" class="form__label">Teléfono</label>
                            </div>
                            <div class="form__group field" style="margin-bottom:10px;">
                                <textarea type="textarea" class="form__field" name="message" id="message" v-model="message" placeholder="Mensaje" size="lg" rows="3" required></textarea>
                                <label for="message" class="form__label">Mensaje</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Vue from "vue";

export default {
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            message: "",
            style_width: "desktop",
        };
    },
    computed: {},
    methods: {
        getHome() {
            window.location = "/";
        },
        createSignUp(){
            var url="createSignUp";
            axios.post(url,{
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            })
            .then((response) => {
              this.getHome();
              toastr.success("Contacto Guardado con Exito");
            })
            .catch((error) => {});
        },
        screenWidth(){
            if (screen.width < 600){
                this.style_width = 'phone';
            }
        }
    }
};
</script>
<style>
    .margin-logo{
        margin-right: 150px !important;
    }
    .color-nav{
        color: black;
        font-size: 24px !important;
        font-weight: 800;
        text-decoration: none !important;
        font-family: Nunito;
    }
    .img-logo{
        max-width: 280px;
    }
    .nav-pad{
        padding-top: 20px;
    }
    .home-section-1 {
        background-image: url("/uploads/home/first-view.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 680px;
    }
    .home-section-2 {
        background-image: url("/uploads/home/que-es.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 720px;
    }
    .home-section-3 {
        background-image: url("/uploads/home/metodo-trikele.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 720px;
    }
    .home-section-4 {
        background-image: url("/uploads/home/testimonios.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 720px;
    }
    .home-section-5 {
        background-image: url("/uploads/home/nuestro-equipo.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 720px;
    }
    .home-section-6 {
        background-image: url("/uploads/home/contactanos.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 720px;
    }
    .btn-login{
        background-color: #ff7900;
        color: white;
        font-weight: 800;
        width: 250px;
        border-radius: 30px;
        font-size: 20px;
    }
    .btn-login:hover{
        background-color: #f79d52;
        color: #c9c9c9;
        font-weight: 800;
    }
    .btn-position {
        position: absolute;
        top: 550px;
        left: 900px;
    }
    .text-position {
        position: absolute;
        padding-top: 280px;
        padding-left: 820px;
        padding-right: 80px;
        font-size: 28px;
        color: white;
        line-height: 30px;
        text-align: center;
    }
    .text-position-metodo {
        position: absolute;
        padding-top: 280px;
        padding-left: 820px;
        padding-right: 80px;
        font-size: 28px;
        color: white;
        line-height: 30px;
        text-align: center;
    }
    .new-navbar {
        position: fixed;
        background-color: #0047AB;
        margin-top: 60px;
        margin-left: 355px;
        height: 50px;
        width: 100%;
        z-index: 1020;
        border-radius: 5px;
    }
    .new-navbar-orange {
        position: fixed;
        width: 100%;
        background-color: #ff7900;
        margin-left: 348px;
        margin-top: 70px;
        height: 50px;
        z-index: 1019;
        border-radius: 5px;
    }
    .nav-height {
        height: 100%;
    }
    .youtube-position {
        position: relative;
        top: 260px;
        left: 120px;
        width: 800px;
        height: 400px !important;
    }
    .team-text-position1 {
        position: absolute;
        padding-top: 550px;
        padding-left: 920px;
        padding-right: 75px;
        font-size: 14px;
        color: white;
        line-height: 20px;
        text-align: center;
    }
    .team-text-position2 {
        position: absolute;
        padding-top: 550px;
        padding-left: 500px;
        padding-right: 500px;
        font-size: 14px;
        color: white;
        line-height: 20px;
        text-align: center;
    }
    .team-text-position3 {
        position: absolute;
        padding-top: 550px;
        padding-left: 70px;
        padding-right: 930px;
        font-size: 14px;
        color: white;
        line-height: 20px;
        text-align: center;
    }
    .position-form {
        padding: 200px 160px 0 650px;
    }

    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 50%;
    }
    .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 1.3rem;
        color: #fff;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }
    .form__field::placeholder {
        color: transparent;
    }

    .form__field:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }
    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #9b9b9b;
    }
    .form__field:focus ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #ff7900;
        font-weight:700;
    }
    .form__field:focus{
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #f79d52, #ff7900);
        border-image-slice: 1;
    }
    .form__field:required, .form__field:invalid { box-shadow: none; }
    .btn-form{
        font-size: 25px;
        width: 25%;
        height: auto;
        padding: 0;
        margin: 0;
        border: 0;
        letter-spacing: 0.11em;
        border-radius: 5px;
        background-color: #ff7900;
        color: #fff;
        font-weight: 600;
    }
    .phone {
        display: none;
    }
    @media (max-width: 600px) {
        .desktop {
            display: none;
        }
        .phone {
            display: block;
        }
        .navbar a{
            padding: 14px 4px !important;
        }
        .color-nav {
            font-size: 14px !important;
        }
        .flex-nav{
            flex-direction: row !important;
        }
        .new-navbar {
            background-color: transparent;
            margin-top: 0;
            margin-left: 0;
        }
        .nav-phone{
            background-color: #0047AB;
            box-shadow: 10px 10px #ff7900;
            border-radius: 5px;
        }
        .home-section-1 {
            background-image: url("/uploads/home/phone-first-view.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 800px;
        }
        .home-section-2 {
            background-image: url("/uploads/home/phone-que-es.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 800px;
        }
        .home-section-3 {
            background-image: url("/uploads/home/phone-metodo-trikele.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 800px;
        }
        .home-section-4 {
            background-image: url("/uploads/home/phone-testimonios.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 800px;
        }
        .home-section-5 {
            background-image: url("/uploads/home/phone-nuestro-equipo.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 800px;
        }
        .home-section-6 {
            background-image: url("/uploads/home/phone-contactanos.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 800px;
        }
        .btn-login{
            width: 200px;
        }
        .btn-position {
            top: 650px;
            left: 170px;
        }
        .text-position {
            padding-top: 470px;
            padding-left: 17%;
            padding-right: 18%;
            font-size: 16px;
            line-height: normal;
        }
        .text-position-metodo {
            padding-top: 530px;
            padding-left: 13%;
            padding-right: 21%;
            font-size: 16px;
            line-height: normal;
        }
        .text-whatsapp1{
            display: none;
        }
        .youtube-position {
            top: 260px;
            left: 30px;
            width: 350px;
            height: 350px !important;
        }
        .position-form {
            padding: 420px 45px 0 45px;
        }
        .team-text-position1 {
            padding-top: 600px;
            padding-left: 50%;
            padding-right: 7%;
            font-size: 11px;
            line-height: normal;
        }
        .team-text-position2 {
            padding-top: 430px;
            padding-left: 50%;
            padding-right: 7%;
            font-size: 11px;
            line-height: normal;
        }
        .team-text-position3 {
            padding-top: 240px;
            padding-left: 50%;
            padding-right: 7%;
            font-size: 11px;
            line-height: normal;
        }
        .form__group {
            position: relative;
            padding: 15px 0 0;
            margin-top: 15px;
            width: 100%;
        }
        .form__field {
            font-size: 0.9rem;
        }
        .form__field::placeholder {
            color: transparent;
        }

        .form__field:placeholder-shown ~ .form__label {
            font-size: 0.9rem;
            top: 15px;
        }
        .form__label {
            font-size: 0.9rem;
        }
        .form__field:focus ~ .form__label {
            font-size: 0.9rem;
        }
        .form__field:required, .form__field:invalid { box-shadow: none; }
        .btn-form{
            font-size: 18px;
            width: 100%;
        }
    }
</style>
