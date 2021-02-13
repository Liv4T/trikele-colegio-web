<template>
  <div>
    <div class="card">
      <h1 class="card-header">Curso</h1>
      <form class="needs-validation" novalidate>
        <div class="card-body">
          <div class="form-group row">
            <div class="col-md-6">
              <label for="name">Nombre del curso</label>
              <input type="text" name="name" class="form-control" v-model="fillC.name" required />
              <div class="invalid-feedback">Please fill out this field</div>
            </div>
            <div class="col">
              <label for="subject">Intensidad horaria acompañamiento dirigido</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                v-model="fillC.intensityAC"
                required
              />
              <div class="invalid-feedback">Please fill out this field</div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for="subject">Intensidad horaria trabajo autónomo</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                v-model="fillC.intensityTA"
                required
              />
              <div class="invalid-feedback">Please fill out this field</div>
            </div>
            <div class="col">
              <label for>Metodología</label>
              <select2 :options="myOptions" v-model="metodology" required></select2>
            </div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Bienvenida</strong>
            </div>
            <textarea name="welcome" class="form-control" v-model="fillC.welcome" required></textarea>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Presentación del tutor</strong>
            </div>
            <textarea name="intentioned" class="form-control" v-model="fillC.presentation" required></textarea>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Intencion educativa</strong>
            </div>
            <textarea name="intentioned" class="form-control" v-model="fillC.intention" required></textarea>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Competencias</strong>
            </div>
            <textarea name="competences" class="form-control" v-model="fillC.competences" required></textarea>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Logros</strong>
            </div>
            <textarea name="achievement" class="form-control" v-model="fillC.achievements" required></textarea>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Indicadores de Logro</strong>
            </div>
            <textarea name="gold" class="form-control" v-model="fillC.indicatorA" required></textarea>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Mapa tematico</strong>
            </div>
            <input type="file" name="picture2" class="form-control" accept="image/*" required />
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Metodologia general del curso</strong>
            </div>
            <textarea name="metodology" class="form-control" v-model="fillC.metodologyG" required></textarea>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Descripción de las guías de actividades</strong>
            </div>
            <textarea name="objects" class="form-control" v-model="fillC.description" required></textarea>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Descripción de los objetos de evaluativos</strong>
            </div>
            <textarea name="objects" class="form-control" v-model="fillC.descriptionO" required></textarea>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="form-group mx-auto">
            <div align="center">
              <strong>Unidades</strong>
            </div>
            <div class="form-group row">
              <div class="col">
                <a href="/unit">
                  Unidad 1
                  <br />Nombre de la unidad
                </a>
              </div>
              <div class="col">
                <a href="/unit">
                  Unidad 2
                  <br />Nombre de la unidad
                </a>
              </div>
              <div class="col">
                <a href="/unit">
                  Unidad 3
                  <br />Nombre de la unidad
                </a>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="/class" class="btn btn-primary float-right">Volver</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
$(function() {
  $('[data-toggle="popover"]').popover();
});
$(".popover-dismiss").popover({
  trigger: "focus"
});
export default {
  data() {
    return {
      fillC: {
        id: "",
        name: "",
        description: "",
        id_user: "",
        id_category: "",
        id_subcategory: "",
        intensityAC: "",
        intensityTA: "",
        methodology: "",
        methodologyG: "",
        welcome: "",
        presentation: "",
        intention: "",
        competences: "",
        achievement: "",
        indicatorA: "",
        map: "",
        type: "",
        descriptionO: "",
        state: "",
        publish: ""
      },
      errors: []
    };
  }
};
</script>