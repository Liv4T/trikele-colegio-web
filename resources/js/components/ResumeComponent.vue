<template>
    <div class="backgroun1">
        <div class="row justify-content-center">
            <div id="crud" class="col-md-11">
                <div class="card text-center">
                    <h3 class="card-header">Hoja de vida</h3>
                    <form class="needs-validation" novalidate>
                        <div class="card-body">
                            <div class="form-group mx-auto">
                                <strong>Perfil profesional</strong>
                                <textarea
                                    name="description"
                                    v-model="resumen.newDescription"
                                    class="form-control"
                                    maxlength="200"
                                    required
                                ></textarea>
                                <div class=" invalid-feedback ">
                                    Please fill out this field
                                </div>
                            </div>
                            <div class="container">
                                <div class="form-group mx-auto">
                                    <strong>Formacion Academica</strong>
                                </div>
                                <div class="form-group row">
                                    <div class="col">
                                        <div
                                            class="custom-control custom-checkbox custom-control-inline"
                                        >
                                            <input
                                                class="custom-control-input"
                                                type="checkbox"
                                                id="gridCheck1"
                                                required
                                            />
                                            <label
                                                class="custom-control-label"
                                                for="gridCheck1"
                                                >Bachiller</label
                                            >
                                        </div>
                                        <div
                                            class="custom-control custom-checkbox custom-control-inline"
                                        >
                                            <input
                                                class="custom-control-input"
                                                type="checkbox"
                                                id="gridCheck2"
                                            />
                                            <label
                                                class="custom-control-label"
                                                for="gridCheck2"
                                                >Tecnico</label
                                            >
                                        </div>
                                        <div
                                            class="custom-control custom-checkbox custom-control-inline"
                                        >
                                            <input
                                                class="custom-control-input"
                                                type="checkbox"
                                                id="gridCheck3"
                                            />
                                            <label
                                                class="custom-control-label"
                                                for="gridCheck3"
                                                >Profesional</label
                                            >
                                        </div>
                                        <div
                                            class="custom-control custom-checkbox custom-control-inline"
                                        >
                                            <input
                                                class="custom-control-input"
                                                type="checkbox"
                                                id="gridCheck4"
                                            />
                                            <label
                                                class="custom-control-label"
                                                for="gridCheck4"
                                                >Especializado</label
                                            >
                                        </div>
                                        <div
                                            class="custom-control custom-checkbox custom-control-inline"
                                        >
                                            <input
                                                class="custom-control-input"
                                                type="checkbox"
                                                id="gridCheck5"
                                            />
                                            <label
                                                class="custom-control-label"
                                                for="gridCheck5"
                                                >Maestria</label
                                            >
                                        </div>
                                        <div
                                            class="custom-control custom-checkbox custom-control-inline"
                                        >
                                            <input
                                                class="custom-control-input"
                                                type="checkbox"
                                                id="gridCheck6"
                                            />
                                            <label
                                                class="custom-control-label"
                                                for="gridCheck6"
                                                >Doctorado</label
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div id="hidden_fields1">
                                    <div class="form-group row">
                                        <strong>Bachiller</strong>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="modalidadB"
                                                >Modalidad Academica</label
                                            >
                                            <input
                                                type="text"
                                                name="modalidadB"
                                                class="form-control"
                                                v-model="resumen.newModalidadB"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="titleB"
                                                >Titulo Obtenido</label
                                            >
                                            <input
                                                type="text"
                                                name="titleB"
                                                class="form-control"
                                                v-model="resumen.newTitleB"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="institutionB"
                                                >Institución</label
                                            >
                                            <input
                                                type="text"
                                                name="institutionB"
                                                class="form-control"
                                                v-model="
                                                    resumen.newInstitutionB
                                                "
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="dateB"
                                                >Fecha del titulo</label
                                            >
                                            <input
                                                type="date"
                                                name="dateB"
                                                class="form-control"
                                                v-model="resumen.newDateB"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="hidden_fields2">
                                    <div class="form-group row">
                                        <strong>Tecnico</strong>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="modalidadT"
                                                >Modalidad Academica</label
                                            >
                                            <input
                                                type="text"
                                                name="modalidadT"
                                                class="form-control"
                                                v-model="resumen.newModalidadT"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="titleT"
                                                >Titulo Obtenido</label
                                            >
                                            <input
                                                type="text"
                                                name="titleT"
                                                class="form-control"
                                                v-model="resumen.newTitleT"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="institutionT"
                                                >Institución</label
                                            >
                                            <input
                                                type="text"
                                                name="institutionT"
                                                class="form-control"
                                                v-model="
                                                    resumen.newInstitutionT
                                                "
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="dateT"
                                                >Fecha del titulo</label
                                            >
                                            <input
                                                type="date"
                                                name="dateT"
                                                class="form-control"
                                                v-model="resumen.newDateT"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="hidden_fields3">
                                    <div class="form-group row">
                                        <strong>Profesional</strong>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="modalidadP"
                                                >Modalidad Academica</label
                                            >
                                            <input
                                                type="text"
                                                name="modalidadP"
                                                class="form-control"
                                                v-model="resumen.newModalidadP"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="titleP"
                                                >Titulo Obtenido</label
                                            >
                                            <input
                                                type="text"
                                                name="titleP"
                                                class="form-control"
                                                v-model="resumen.newTitleP"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="institutionP"
                                                >Institución</label
                                            >
                                            <input
                                                type="text"
                                                name="institutionP"
                                                class="form-control"
                                                v-model="
                                                    resumen.newInstitutionP
                                                "
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="dateP"
                                                >Fecha del titulo</label
                                            >
                                            <input
                                                type="date"
                                                name="dateP"
                                                class="form-control"
                                                v-model="resumen.newDateP"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="hidden_fields4">
                                    <div class="form-group row">
                                        <strong>Especializado</strong>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="modalidadE"
                                                >Modalidad Academica</label
                                            >
                                            <input
                                                type="text"
                                                name="modalidadE"
                                                class="form-control"
                                                v-model="resumen.newModalidadE"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="titleE"
                                                >Titulo Obtenido</label
                                            >
                                            <input
                                                type="text"
                                                name="titleE"
                                                class="form-control"
                                                v-model="resumen.newTitleE"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="indtitutionE"
                                                >Institución</label
                                            >
                                            <input
                                                type="text"
                                                name="institutionE"
                                                class="form-control"
                                                v-model="
                                                    resumen.newInstitutionE
                                                "
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="dateE"
                                                >Fecha del titulo</label
                                            >
                                            <input
                                                type="dateE"
                                                name="date"
                                                class="form-control"
                                                v-model="resumen.newDateE"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="hidden_fields5">
                                    <div class="form-group row">
                                        <strong>Maestria</strong>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="modalidadM"
                                                >Modalidad Academica</label
                                            >
                                            <input
                                                type="text"
                                                name="modalidadM"
                                                class="form-control"
                                                v-model="resumen.newModalidadM"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="titleM"
                                                >Titulo Obtenido</label
                                            >
                                            <input
                                                type="text"
                                                name="titleM"
                                                class="form-control"
                                                v-model="resumen.newTitleM"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="institutionM"
                                                >Institución</label
                                            >
                                            <input
                                                type="text"
                                                name="institutionM"
                                                class="form-control"
                                                v-model="
                                                    resumen.newInstitutionM
                                                "
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="dateM"
                                                >Fecha del titulo</label
                                            >
                                            <input
                                                type="date"
                                                name="dateM"
                                                class="form-control"
                                                v-model="resumen.newDateM"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="hidden_fields6">
                                    <div class="form-group row">
                                        <strong>Doctorado</strong>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="modalidadD"
                                                >Modalidad Academica</label
                                            >
                                            <input
                                                type="text"
                                                name="modalidadD"
                                                class="form-control"
                                                v-model="resumen.newModalidadD"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="titleD"
                                                >Titulo Obtenido</label
                                            >
                                            <input
                                                type="text"
                                                name="titleD"
                                                class="form-control"
                                                v-model="resumen.newTitleD"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="institutionD"
                                                >Institución</label
                                            >
                                            <input
                                                type="text"
                                                name="institutionD"
                                                class="form-control"
                                                v-model="
                                                    resumen.newInstitutionD
                                                "
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="dateD"
                                                >Fecha del titulo</label
                                            >
                                            <input
                                                type="date"
                                                name="dateD"
                                                class="form-control"
                                                v-model="resumen.newDateD"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--div id="hidden_fields7">
                                    <div class="form-group row">
                                        <div class="col-md-4">
                                            <strong>Otro</strong>
                                            <input
                                                type="text"
                                                name="institution"
                                                class="form-control"
                                                v-model="newOther"
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="country"
                                                >Modalidad Academica</label
                                            >
                                            <input
                                                type="text"
                                                name="country"
                                                class="form-control"
                                                v-model="newCountryB"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="institution"
                                                >Titulo Obtenido</label
                                            >
                                            <input
                                                type="text"
                                                name="c"
                                                class="form-control"
                                                v-model="newInstitutionB"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="country"
                                                >Institución</label
                                            >
                                            <input
                                                type="text"
                                                name="institution"
                                                class="form-control"
                                                v-model="newCountryB"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="date"
                                                >Fecha del titulo</label
                                            >
                                            <input
                                                type="date"
                                                name="date"
                                                class="form-control"
                                                v-model="newDateB"
                                                required
                                            />
                                            <div class=" invalid-feedback ">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                </div-->
                            </div>
                            <div class="container">
                                <div class="form-group mx-auto">
                                    <strong
                                        >Experiencia Profesional Docente</strong
                                    >
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="jobtitle">Entidad</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newCompany"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="jobtitle">Cargo</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newJobtitle"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="company"
                                            >Actividades desarrolladas</label
                                        >
                                        <input
                                            type="text"
                                            name="company"
                                            class="form-control"
                                            v-model="resumen.newActivities"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="time">Año</label>
                                        <input
                                            type="text"
                                            name="time"
                                            class="form-control"
                                            v-model="resumen.newYear"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="jobtitle">Entidad</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newCompany1"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="jobtitle">Cargo</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newJobtitle1"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="company"
                                            >Actividades desarrolladas</label
                                        >
                                        <input
                                            type="text"
                                            name="company"
                                            class="form-control"
                                            v-model="resumen.newActivities1"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="time">Año</label>
                                        <input
                                            type="text"
                                            name="time"
                                            class="form-control"
                                            v-model="resumen.newYear1"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="form-group mx-auto">
                                    <strong
                                        >Experiencia Profesional No
                                        Docente</strong
                                    >
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="jobtitle">Entidad</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newCompanyN"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="jobtitle">Cargo</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newJobtitleN"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="company"
                                            >Actividades desarrolladas</label
                                        >
                                        <input
                                            type="text"
                                            name="company"
                                            class="form-control"
                                            v-model="resumen.newActivitiesN"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="time">Año</label>
                                        <input
                                            type="text"
                                            name="time"
                                            class="form-control"
                                            v-model="resumen.newYearN"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="jobtitle">Entidad</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newCompany1N"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="jobtitle">Cargo</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newJobtitle1N"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="company"
                                            >Actividades desarrolladas</label
                                        >
                                        <input
                                            type="text"
                                            name="company"
                                            class="form-control"
                                            v-model="resumen.newActivities1N"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="time">Año</label>
                                        <input
                                            type="text"
                                            name="time"
                                            class="form-control"
                                            v-model="resumen.newYear1N"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="form-group mx-auto">
                                    <strong>Cursos y seminarios</strong>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="jobtitle">Entidad</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newEntity"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="jobtitle">Nombre</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newName"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="company">Descripción</label>
                                        <input
                                            type="text"
                                            name="company"
                                            class="form-control"
                                            v-model="resumen.newDescriptionC"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="time">Año</label>
                                        <input
                                            type="text"
                                            name="time"
                                            class="form-control"
                                            v-model="resumen.newYearC"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="jobtitle">Entidad</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newEntity1"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="jobtitle">Nombre</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            class="form-control"
                                            v-model="resumen.newName1"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="company">Descripción</label>
                                        <input
                                            type="text"
                                            name="company"
                                            class="form-control"
                                            v-model="resumen.newDescriptionC1"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="time">Año</label>
                                        <input
                                            type="text"
                                            name="time"
                                            class="form-control"
                                            v-model="resumen.newYearC1"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div
                                        class="custom-control custom-checkbox custom-control-inline"
                                    >
                                        <input
                                            class="custom-control-input"
                                            type="checkbox"
                                            id="gridCheck12"
                                            required
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="gridCheck12"
                                            >Para todos los efectos legales,
                                            certifico que todas las respuestas e
                                            información anotadas por mí, en la
                                            presente hoja de vida son veraces
                                            (C. S. T.) Art. 62 Núm. 1° Régimen
                                            Laboral Colombiano § 1057
                                            (Legis).</label
                                        >
                                    </div>
                                </div>
                                <div class="form-group mx-auto">
                                    <div
                                        class="custom-control custom-checkbox custom-control-inline"
                                    >
                                        <input
                                            class="custom-control-input"
                                            type="checkbox"
                                            id="gridCheck13"
                                            required
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="gridCheck13"
                                            >Voluntaria y expresamente autorizo
                                            a Live4Teach, a verificar mis
                                            antecedentes disciplinarios y
                                            judiciales.</label
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input
                                type="submit"
                                @click="createResumes"
                                class="btn btn-primary"
                                value="Guardar"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "toastr/toastr.scss";
$(function() {
    // Get the form fields and hidden div
    var checkbox = $("#gridCheck1");
    var checkbox1 = $("#gridCheck2");
    var checkbox2 = $("#gridCheck3");
    var checkbox3 = $("#gridCheck4");
    var checkbox4 = $("#gridCheck5");
    var checkbox5 = $("#gridCheck6");
    var checkbox6 = $("#gridCheck7");
    var hidden = $("#hidden_fields1");
    var hidden1 = $("#hidden_fields2");
    var hidden2 = $("#hidden_fields3");
    var hidden3 = $("#hidden_fields4");
    var hidden4 = $("#hidden_fields5");
    var hidden5 = $("#hidden_fields6");
    var hidden6 = $("#hidden_fields7");

    hidden.hide();
    hidden1.hide();
    hidden2.hide();
    hidden3.hide();
    hidden4.hide();
    hidden5.hide();
    hidden6.hide();

    checkbox.change(function() {
        if (checkbox.is(":checked")) {
            // Show the hidden fields.
            hidden.show();
        } else {
            hidden.hide();
        }
    });
    checkbox1.change(function() {
        if (checkbox1.is(":checked")) {
            // Show the hidden fields.
            hidden1.show();
        } else {
            hidden1.hide();
        }
    });
    checkbox2.change(function() {
        if (checkbox2.is(":checked")) {
            // Show the hidden fields.
            hidden2.show();
        } else {
            hidden2.hide();
        }
    });
    checkbox3.change(function() {
        if (checkbox3.is(":checked")) {
            // Show the hidden fields.
            hidden3.show();
        } else {
            hidden3.hide();
        }
    });
    checkbox4.change(function() {
        if (checkbox4.is(":checked")) {
            // Show the hidden fields.
            hidden4.show();
        } else {
            hidden4.hide();
        }
    });
    checkbox5.change(function() {
        if (checkbox5.is(":checked")) {
            // Show the hidden fields.
            hidden5.show();
        } else {
            hidden5.hide();
        }
    });
    checkbox6.change(function() {
        if (checkbox6.is(":checked")) {
            // Show the hidden fields.
            hidden6.show();
        } else {
            hidden6.hide();
        }
    });
});
(function() {
    "use strict";
    window.addEventListener(
        "load",
        function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener(
                    "submit",
                    function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
})();
export default {
    data() {
        return {
            resume: [],
            resumen: {
                newDescription: "",
                /*Formacion Academica*/
                newModalidadB: "",
                newModalidadT: "",
                newModalidadP: "",
                newModalidadE: "",
                newModalidadM: "",
                newModalidadD: "",
                newLanguage: "",
                newInstitutionB: "",
                newInstitutionT: "",
                newInstitutionP: "",
                newInstitutionE: "",
                newInstitutionM: "",
                newInstitutionD: "",
                newDateB: "",
                newDateT: "",
                newDateP: "",
                newDateE: "",
                newDateM: "",
                newDateD: "",
                newTitleB: "",
                newTitleT: "",
                newTitleP: "",
                newTitleE: "",
                newTitleM: "",
                newTitleD: "",
                /*Experiencia Docente */
                newCompany: "",
                newCompany1: "",
                newJobtitle: "",
                newJobtitle1: "",
                newActivities: "",
                newActivities1: "",
                newYear: "",
                newYear1: "",
                /*Experiencia no docente */
                newCompanyN: "",
                newCompany1N: "",
                newJobtitleN: "",
                newJobtitle1N: "",
                newActivitiesN: "",
                newActivities1N: "",
                newYearN: "",
                newYear1N: "",
                /*Cursos y seminarios */
                newEntity: "",
                newEntity1: "",
                newName: "",
                newName1: "",
                newDescriptionC: "",
                newDescriptionC1: "",
                newYearC: "",
                newYearC1: ""
            },
            newId_user: "",
            errors: [],
            offset: 3
        };
    },
    created() {
        this.getResumes();
    },
    computed: {},
    mounted() {
        console.log("Component mounted.");
    },
    methods: {
        //metodos del CRUD
        getResumes() {
            var urlr = "resumes/";
            axios.get(urlr).then(response => {
                this.resume = response.data.resum.data;
            });
        },
        editResumes(resume) {
            this.resumen.newDescription = this.resume.newDescription;
            this.resumen.newModalidadB = this.resume.newModalidadB;
            this.resumen.newModalidadT = this.resume.newModalidadT;
            this.resumen.newModalidadP = this.resume.newModalidadP;
            this.resumen.newModalidadE = this.resume.newModalidadE;
            this.resumen.newModalidadM = this.resume.newModalidadM;
            this.resumen.newModalidadD = this.resume.newModalidadD;
            this.resumen.newLanguage = this.resume.newLanguage;
            this.resumen.newInstitutionB = this.resume.newInstitutionB;
            this.resumen.newInstitutionT = this.resume.newInstitutionT;
            this.resumen.newInstitutionP = this.resume.newInstitutionP;
            this.resumen.newInstitutionE = this.resume.newInstitutionE;
            this.resumen.newInstitutionM = this.resume.newInstitutionM;
            this.resumen.newInstitutionD = this.resume.newInstitutionD;
            this.resumen.newDateB = this.resume.newDateB;
            this.resumen.newDateT = this.resume.newDateT;
            this.resumen.newDateP = this.resume.newDateP;
            this.resumen.newDateE = this.resume.newDateE;
            this.resumen.newDateM = this.resume.newDateM;
            this.resumen.newDateD = this.resume.newDateD;
            this.resumen.newTitleB = this.resume.newTitleB;
            this.resumen.newTitleT = this.resume.newTitleT;
            this.resumen.newTitleP = this.resume.newTitleP;
            this.resumen.newTitleE = this.resume.newTitleE;
            this.resumen.newTitleM = this.resume.newTitleM;
            this.resumen.newTitleD = this.resume.newTitleD;
            this.resumen.newCompany = this.resume.newCompany;
            this.resumen.newCompany1 = this.resume.newCompany1;
            this.resumen.newJobtitle = this.resume.newJobtitle;
            this.resumen.newJobtitle1 = this.resume.newJobtitle1;
            this.resumen.newActivities = this.resume.newActivities;
            this.resumen.newActivities1 = this.resume.newActivities1;
            this.resumen.newYear = this.resume.newYear;
            this.resumen.newYear1 = this.resume.newYear1;
            this.resumen.newCompanyN = this.resume.newCompanyN;
            this.resumen.newCompany1N = this.resume.newCompany1N;
            this.resumen.newJobtitleN = this.resume.newJobtitleN;
            this.resumen.newJobtitle1N = this.resume.newJobtitle1N;
            this.resumen.newActivitiesN = this.resume.newActivitiesN;
            this.resumen.newActivities1N = this.resume.newActivities1N;
            this.resumen.newYearN = this.resume.newYearN;
            this.resumen.newYear1N = this.resume.newYear1N;
            this.resumen.newEntity = this.resume.newEntity;
            this.resumen.newEntity1 = this.resume.newEntity1;
            this.resumen.newName = this.resume.newName;
            this.resumen.newName1 = this.resume.newName1;
            this.resumen.newDescriptionC = this.resume.newDescriptionC;
            this.resumen.newDescriptionC1 = this.resume.newDescriptionC1;
            this.resumen.newYearC = this.resume.newYearC;
            this.resumen.newYearC1 = this.resume.newYearC1;
        },
        updateResumes(id) {
            var url = "resumes/" + id;
            axios
                .put(url, this.fillResumes)
                .then(response => {
                    this.getResumes();
                    this.errors = [];
                    toastr.success("Hoja de vida editado con exito");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        createResumes() {
            var url = "resumes";
            axios
                .post(url, this.resumen)
                .then(response => {
                    this.getResumes();
                    toastr.success("Hoja de vida creada con exito");
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        }
    }
};
</script>
<style>
.background1 {
    background: url(../assets/img/Fondo5.jpg);
    background-attachment: fixed;
}
</style>
