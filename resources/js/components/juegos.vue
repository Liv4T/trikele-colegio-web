<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Juegos</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody>
                <tr>
                  <td>Trivia Imagenes</td>
                  <td>
                    <a href="/triviaimg" class="btn btn-warning">Jugar</a>
                  </td>
                </tr>
                <tr>
                  <td>Memoria</td>
                  <td>
                    <a href="/memoria" class="btn btn-warning">Jugar</a>
                  </td>
                </tr>
                <tr>
                  <td>Examen</td>
                  <td>
                    <a href="/quiz" class="btn btn-warning">Jugar</a>
                  </td>
                </tr>
                <tr>
                  <td>Completar oración</td>
                  <td>
                    <a href="/sentence" class="btn btn-warning">Jugar</a>
                  </td>
                </tr>
                <tr>
                  <td>Pizarra</td>
                  <td>
                    <a href="/board" class="btn btn-warning">Jugar</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errors: []
    };
  },
  created() {},
  mounted() {
    console.log("Component mounted.");
  },
  methods: {}
};
</script>
<style></style>
